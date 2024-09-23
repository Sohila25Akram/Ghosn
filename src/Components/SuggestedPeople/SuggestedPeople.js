import axios from "axios";
import { PeopleSnapshot, RecommendedPeopleSnapshot } from "../Post/Post";
import './suggestedPeople.css'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUsers } from "../../features/users/usersSlice";
import { getRecommndedUsers } from "../../queries/query";
import { Suspense } from "react";
import { useQuery } from "react-query";
import Skeleton from "../Skeleton/UserSkeleton/Skeleton";

const api = 'https://ghosn.runasp.net'
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2MTFlYjM5Ny0zZjQxLTQ4YzAtYWY4Zi1kZTJjNmU5MzJhZjEiLCJzdWIiOiJMZ0VZdkh6ZVd5Y1Y2NCIsImVtYWlsIjoidXNlckBleGFtcGxlLmNvbSIsIm5hbWUiOiJqbGpsIGlvIiwidWlkIjoiOCIsInJvbGUiOiJXcml0ZXIiLCJuYmYiOjE3MTU2MDc1NDYsImV4cCI6MTcxNTYwNzcyNiwiaWF0IjoxNzE1NjA3NTQ2LCJpc3MiOiJNYWluU3RyZWFtQmFja2VuZC5WMCIsImF1ZCI6IkZyb250RW5kSW5EZXZlbG9wbWVudCJ9.tJRwlX7OzPOhwSSEajIoB9ilKiSqy3dc-keip8Hie14"

export function SuggestedPeople () {
    const [suggestedPeople, setSuggestedPeople] = useState([]);

    const dispatch = useDispatch();

    // const fetchSuggestedPeopleList = async () => {
    //     try{
    //         const response = await axios.get(`${api}/api/Follow/Suggested Users`, {
    //             headers : {
    //                 'Authorization': `Bearer ${token}`
    //             }
    //         })
    //         setSuggestedPeople(response.data)
    //         dispatch(setUsers(response.data))
    //     }catch(error){
    //         console.error('failed to fetch recommended people', error)
    //     }
    // }

    const fetchSuggestedPeopleList = async () => {
        try{
            const response = await axios.post(`${api}/graphql`, {
                query: getRecommndedUsers
            }, {
                headers : {
                    'Authorization': `Bearer ${token}`
                }
            })
            console.log("Suggested People API Response:", response);
            const list = response.data.data.followRecommendations;
            setSuggestedPeople(list);
            dispatch(setUsers(list));
        }catch(error){
            console.error('failed to fetch recommended people', error)
        }
    }

    useEffect(() => {
        fetchSuggestedPeopleList()
    }, [])

    const {data, isLoading, error} = useQuery("getSuggestedPeople", fetchSuggestedPeopleList);

    if (isLoading) {
        return (
            <>
                {[...Array(3)].map((_, index) => (
                    <Skeleton key={index} />
                ))}
            </>
        );
    }
    
    return(
        <>
             <div className="suggested-people">
                <ul>
                    {suggestedPeople.map((person) => (
                        <li key={person.id}>
                           <PeopleSnapshot person={person} />
                        </li>
                    ))}
                </ul>
            </div>
        </>
       
    )
}