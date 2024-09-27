import axios from "axios";
import { useEffect, useState } from "react";
import { PeopleSnapshot } from "../Components/Post/Post";
import '../styles/searchPeople.css'
import { Link } from "react-router-dom";

const api = 'https://ghosn.runasp.net'
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2MTFlYjM5Ny0zZjQxLTQ4YzAtYWY4Zi1kZTJjNmU5MzJhZjEiLCJzdWIiOiJMZ0VZdkh6ZVd5Y1Y2NCIsImVtYWlsIjoidXNlckBleGFtcGxlLmNvbSIsIm5hbWUiOiJqbGpsIGlvIiwidWlkIjoiOCIsInJvbGUiOiJXcml0ZXIiLCJuYmYiOjE3MTU2MDc1NDYsImV4cCI6MTcxNTYwNzcyNiwiaWF0IjoxNzE1NjA3NTQ2LCJpc3MiOiJNYWluU3RyZWFtQmFja2VuZC5WMCIsImF1ZCI6IkZyb250RW5kSW5EZXZlbG9wbWVudCJ9.tJRwlX7OzPOhwSSEajIoB9ilKiSqy3dc-keip8Hie14"

function SearchPeople(){
    const [searchItem, setSeachItem] = useState([]);
    const [usersData, setUsersData] = useState([]);

    const fetchUserData = async () => {
        if (!searchItem) return [];
        try {
            const response = await axios.get(`${api}/api/Follow/SearchUser`, {
                headers : {
                    'Authorization': `Bearer ${token}`,
                    'accept': '*/*'
                },
                params: {
                    SearchType: searchItem
                }
            });
            const usersList = response.data;
            setUsersData(usersList)
        } catch (error) {
            console.error('Error fetching user data:', error);
            // throw new Error('Failed to fetch user data');
        }
    };

    useEffect(() => {
        if (searchItem) {
            fetchUserData();
        }
    }, [searchItem])

    const handleSearchInput = (e) => {
        setSeachItem(e.target.value);
    };

    return(
        <div className="search-people-container container">
            <div className="search-people-upper-corner">
                <div className="search-container">
                    <span className='search-icon'><i className="ri-search-line"></i></span>
                    <input type="search" placeholder='ما الذي تبحث عنه؟' name="" id="" value={searchItem} onChange={handleSearchInput} />
                </div>
                <Link to='/community'>
                    <span><i className="ri-arrow-left-line"></i></span>
                </Link>
            </div>
            <div className='searched-items pro'>
                {usersData && usersData.map((user) => (
                    <div className='searched-user-snapshot' key={user.id}>
                        <PeopleSnapshot person={user} />
                        {!user.isFollowing? <button className='main-button green-button'>Follow</button> : <span>Following</span>} 
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SearchPeople