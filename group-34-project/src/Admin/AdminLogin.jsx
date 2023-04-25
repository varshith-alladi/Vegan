import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Alogin.modules.css';

function AdminLogin() {

    const [userLogin, setUserLogin] = useState(
        {
            email: "",
            password: ""
        })



    const handleInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setUserLogin({ ...userLogin, [name]: value });
    }
    

    const handleSubmit = (event) => {

        event.preventDefault();
       
        setUserLogin({
            email: "",
            password: ""
        })
        if(userLogin.email==="admin@123" && userLogin.password==="admin"){
            navigate('/adminhome');}
            else{
                alert("invalid details");
            }

    }

  

    const navigate = useNavigate();


    return (
       
        <div className='l1'>
            <div className="container">
                <div className="screen">
                    <div className="screen__content">
                        <form onSubmit={handleSubmit} className="l2">
                            <div className="lf">
                                <i className="login__icon fas fa-user"></i>
                                <input className='li1' value={userLogin.email} onChange={handleInput} type="email" placeholder="Enter your email" name="email" id="email" required />
                            </div>
                            <div className="lf">
                                <i className="login__icon fas fa-lock"></i>
                                <input className='li1' value={userLogin.password} onChange={handleInput} type="password" placeholder="password" name="password" id="password" required />
                            </div>
                            <button type="submit" className="button ls1">
                                <span className="button__text">Log In Now</span>
                                <i className="button__icon fas fa-chevron-right"></i>
                            </button>
                        </form>
                     </div>   
                </div>
            </div>
        </div>
    )
}

export default AdminLogin;