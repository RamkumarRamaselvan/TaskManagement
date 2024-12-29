import React, { useEffect, useState } from 'react';
import TopNavigation from "./navigation.js";
import user from "../image/user.png";
const Profile = () => {
    const userData = JSON.parse(localStorage.getItem("userDetails")) || {};
    return (
        <section className="wrapper">
            <div className='register_container'>

                <div className='profileCard'>
                    <h2>Profile</h2>
                    <div className='row'>
                        <div className='col-md-6 txt_center'>
                            <img
                                src={user}
                                alt="Profile"
                                className='profileImage'
                            />
                            {/* <div className="App">
                                <input type="file" onChange={handleChange} />
                            </div> */}
                        </div>
                        <div className='col-md-6'>
                            <div className='profile_line'>
                                <span>First Name :</span>
                                <span>{userData?.firstName}</span>
                            </div>
                            <div className='profile_line'>
                                <span>Last Name :</span>
                                <span>{userData?.lastName}</span>
                            </div>
                            <div className='profile_line'>
                                <span>Username :</span>
                                <span>{userData?.username}</span>
                            </div>
                            <div className='profile_line'>
                                <span>Email :</span>
                                <span>{userData?.email}</span>
                            </div>
                            <div className='profile_line'>
                                <span>Mobile Number :</span>
                                <span>{userData?.mobile}</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};


export default Profile;
