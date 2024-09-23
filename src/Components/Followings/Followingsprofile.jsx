import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CookiesServices from '../../Services/CookiesServices';
import './followingsprofile.css';

const Followingsprofile = () => {
    const token = CookiesServices.get('jwt');
    const [followings, setFollowings] = useState([]);

    useEffect(() => {
        const fetchFollowings = async () => {
            try {
                const response = await axios.get("https://ghosn.runasp.net/api/Follow/followees", {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setFollowings(response.data.followees);
            } catch (error) {
                console.error("Failed to fetch followings", error);
            }
        };
        fetchFollowings();
    }, [token]);

    console.log(followings);

    return (
        <div>
            {followings.map((user, index) => (
                <div className="card-followers" key={index}>
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between"
                    }}>
                        <span style={{ paddingTop: "8px" }}><i className="ri-more-2-fill"></i></span>
                        <span style={{
                            marginTop: "8px",
                            background: user.isFollowingBack ? "#53AC5F" : "",
                            padding: user.isFollowingBack ? "3px" : "",
                            borderRadius: user.isFollowingBack ? "5px" : "",
                            color: user.isFollowingBack ? "#fff" : "",
                            cursor: user.isFollowingBack ? "pointer" : ""
                        }}>{user.isFollowingBack === false ? "" : "يتابعك"}</span>
                    </div>
                    <img src={`https://ghosn.runasp.net/${user.profileImage}`} alt="" style={{
                        width: "100px",
                        height: "100px",
                        borderRadius: "50%",
                        textAlign: "center",
                        margin: "auto"
                    }} />
                    <span style={{ textAlign: "center", padding: "10px 0" }}>{user.fullName}</span>
                    <Link to={`/profile/${user.userId}`} style={{
                        textAlign: "center",
                        color: "#fff",
                        background: "#53AC5F",
                        margin: "auto",
                        padding: "5px",
                        borderRadius: "20px"
                    }}>عرض الملف الشخصي</Link>
                </div>
            ))}
        </div>
    );
};

export default Followingsprofile;
