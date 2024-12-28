import React, { useState } from 'react';
import TopNavigation from "./topNav.js";
const Profile = () => {
    const userData = {
        profilePicture: 'https://via.placeholder.com/150',
        name: 'John Doe',
        email: 'johndoe@example.com',
        contact: '123-456-7890',
        role: 'User',
    };
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    return (
        <section className="wrapper">
            <div >

                <div className='profileCard'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <img
                                src={file ? file : userData.profilePicture}
                                alt="Profile"
                                style={styles.profileImage}
                            />
                            <div className="App">
                                <input type="file" onChange={handleChange} />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <p><strong>Username:</strong> {userData.name}</p>
                            <p><strong>Email:</strong> {userData.email}</p>
                            <p><strong>Contact:</strong> {userData.contact}</p>
                            <p><strong>Role:</strong> {userData.role}</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f4f4f4',
    },
    profileCard: {
        width: '400px',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
        backgroundColor: '#fff',
        textAlign: 'center',
    },
    profileImage: {
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        marginBottom: '20px',
    },
};

export default Profile;
