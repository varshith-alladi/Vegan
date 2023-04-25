import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { store } from "./App";
import axios from "axios";
import {useSelector} from "react-redux"
import '../styles/userprofile.modules.css';

const email=localStorage.getItem("email");
function UserProfile() {

    const {users} = useSelector(state=>state.auth)
    // const [editUsers, setEditUsers] = useContext(store);
    //console.log(users);
    // console.log(editUsers)
     
    // console.log(users[0].username)
    const navigate = useNavigate();
    // useEffect(()=>{
    //     loadItems();
    // },[]);
    // const loadItems = async()=>{
    // try {
    //     const res = await axios.get(`http://localhost:4001/users/${id}`);
  
    //     setUsers(res.data);
    //   } catch (err) {
    //     console.error(err);
    //   }
    // };

    return (
        <div className="user-profile-body">
            <Navbar />
            <div class="page-content page-container" id="page-content">
                <div class="padding">
                    <div class="row container d-flex justify-content-center">
                        <div class="col-xl-6 col-md-12">
                            <div class="card-border">
                                <div class="row m-l-0 m-r-0">
                                    <div class="col-sm-4 bg-c-lite-green user-profile">
                                        <div class="card-block text-center text-white">
                                            <div class="m-b-25">
                                                <i className="user-photo fas fa-user fa-10x"></i>
                                            </div>
                                            <h6 class="f-w-600"><p>{users.username} </p></h6>
                                            <p><button className="edit-button" onClick={() => navigate('/edit-details')} ><i className="fas fa-edit"></i> Edit</button></p>
                                            <button className="logout" onClick={() => navigate('/')}>Logout</button>
                                        </div>
                                    </div>
                                    <div class="col-sm-8">
                                        <div class="card-block">
                                            <h6 class="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <p class="m-b-10 f-w-600">Email</p>
                                                    <h6 class="text-muted f-w-400">{users.email}</h6>
                                                </div>
                                                <div class="col-sm-6">
                                                    <p class="m-b-10 f-w-600">Phone</p>
                                                    <h6 class="text-muted f-w-400">{users.password}</h6>
                                                </div>
                                            </div>
                                            <h6 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">About</h6>
                                            <div class="row">
                                                <div class="">
                                                    <p class="m-b-10 f-w-600">student</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile;