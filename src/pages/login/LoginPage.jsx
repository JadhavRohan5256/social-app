import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../components/context/AuthContextProvider'
import './LoginPage.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { makeRequest } from '../../axios';

// login page components
function LoginPage() {
    const {login} = useContext(AuthContext);
    const navigate = useNavigate();
    const [redirect, setRedirect] = useState(false);
    const [data, setData] = useState({
        "username":'',
        "password":''
    });

    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    
    if(redirect) {
        setTimeout(() => {
            navigate("/")
        }, 2000);
    }
    const submitHandler = (e) => {
        e.preventDefault();
        makeRequest.post("/login", data)
        .then((response) => {
            login(response.data);
            toast.success('successfully login!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            
            setRedirect(true);
        })
        .catch((error) => {
            console.log(error.response.data);
            toast.error('Invalid Crediential?', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        })
        // login();
    }
    return (
        <div className="login-container">
            <div className="login-wrapper">
                <div className="login-left">
                    <h1>
                        Hello World!
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <p>
                        Don't you have accounts?
                    </p>
                    <Link to='/register'>
                        register
                    </Link>
                </div>
                <div className="login-right">
                    <h1>Login</h1>
                    <form action="#" className='login-form' onSubmit={submitHandler}>
                        <div className="login-box">
                            <input
                                type="text"
                                name="username"
                                id="username"
                                placeholder='Enter email here..'
                                onChange={changeHandler}
                                value={data.username}
                            />
                        </div>
                        <div className="login-box">
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder='Enter password here..'
                                onChange={changeHandler}
                                value={data.password}
                            />
                        </div>
                        <div className="login-box">
                            <button className="login-btn">
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default LoginPage