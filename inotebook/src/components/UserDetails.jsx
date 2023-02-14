import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import userContext from "../context/users/UserContext";


const UserDetails = () => {
    const usercontext = useContext(userContext);
    const { user, GetUserDetails } = usercontext;
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('token')) {
            GetUserDetails();
        }
        else {
            navigate('/login')
        }
        // eslint-disable-next-line
    }, [])

    return (
        <>

            <div className="px-0 " tabIndex="-1" style={{
                marginRight: "5px"
            }}>
                <div className="profile-logo dropdown-toggle" data-bs-auto-close="false" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{

                }}>
                    <img src="https://i.imgur.com/wvxPV9S.png" alt="UserProfile" width="50px" height="45px" style={{ borderRadius: "50%" }}
                    />
                </div>
                <div className="dropdown-menu dropdown-manu-end " aria-labelledby="dropdownMenuButton" style={{ maxWidth: "330px", marginTop: "15px", right: "20px", left: "auto" }}>
                    <div className="container mt-4  mb-4 p-3 d-flex justify-content-center ">

                        <div className="card mycard p-4">

                            <div className=" image d-flex flex-column justify-content-center align-items-center">
                                <button className="btn btn-secondary"> <img src="https://i.imgur.com/wvxPV9S.png" height="100" width="100" alt="userImage"
                                /></button>
                                <span className="name mt-3">{user.name}</span> <span className="idd">{user.email}</span>
                                <div className=" d-flex mt-2"> <button className="btn1 btn-dark">Your Account</button> </div>

                                <div className="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center">
                                    <span><a href="http://twitter.com/" target="_blank" rel=" noreferrer"><i className="fa fa-twitter"></i></a></span> 
                                    <span><a href="http://facebook.com/" target="_blank" rel=" noreferrer"><i className="fa fa-facebook-f"></i></a></span>
                                    <span><a href="http://instagram.com/" target="_blank" rel=" noreferrer"><i className="fa fa-instagram"></i></a></span> 
                                    <span><a href="http://linkedin.com/" target="_blank" rel=" noreferrer"><i className="fa fa-linkedin"></i></a></span> </div>
                                <div className=" px-2 rounded mt-4 date "> <span className="join">Joined by {new Date(user.date).toLocaleDateString()}</span> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserDetails
