import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './RegisterPage.css'


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { makeRequest } from '../../axios';

const Loader = () => {
    return (
        <div className="loader">
            <div className="loader-wrapper">
                <p className='loader-message'>Loading...</p>
            </div>
        </div>
    );
}

// register page components 
function RegisterPage() {

    const [data, setData] = useState({
        'userFirstName': '',
        'userLastName': '',
        'userContact': '',
        'userBirthDate': '',
        'userEmail': '',
        'userPassword': ''
    });

    const [loader, setLoader] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const formHandler = e => {
        e.preventDefault();
        setSubmitted(true);
        setLoader(true);
        makeRequest.post("/user", data)
            .then((response) => {
                console.log(response.data);
                setLoader(false);
                toast.success(response.data.messageDesc, {
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
            .catch((error) => {
                console.log(error.response); 
                setLoader(false);   
                toast.error(error.response.data.messageDesc, {
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
    }
    return (
        <div className="register-container">
            <div className="register-wrapper">
                <div className="register-left">
                    {loader && <Loader />}
                    <h1>
                        register
                    </h1>
                    <form action="#" className='register-form' onSubmit={formHandler}>
                        <div className={submitted && data.userFirstName === '' ? 'empty register-box' : 'register-box'}>
                            <label htmlFor="userFirstName">First Name</label>
                            <input
                                type="text"
                                name="userFirstName"
                                id="userFirstName"
                                placeholder='Enter first name here..'
                                onChange={changeHandler}
                                
                            />
                        </div>
                        <div className={submitted && data.userLastName === '' ? 'empty register-box' : 'register-box'}>
                            <label htmlFor="userLastName">Last name</label>
                            <input
                                type="text"
                                name="userLastName"
                                id="userLastName"
                                placeholder='Enter last name here..'
                                onChange={changeHandler}
                            />
                        </div>
                        <div className={submitted && data.userContact === '' ? 'empty register-box' : 'register-box'}>
                            <label htmlFor="userContact">Contact No</label>
                            <input
                                type="number"
                                name="userContact"
                                id="userContact"
                                placeholder='Enter phone number..'
                                onChange={changeHandler}
                            />
                        </div>
                        <div className={submitted && data.userBirthDate === '' ? 'empty register-box' : 'register-box'}>
                            <label htmlFor="userBirthDate">Birth Date</label>
                            <input
                                type="date"
                                name="userBirthDate"
                                id="userBirthDate"
                                placeholder='birth date'
                                onChange={changeHandler}

                            />
                        </div>
                        <div className={submitted && data.userEmail === '' ? 'empty register-box' : 'register-box'}>
                            <label htmlFor="userEmail">Email</label>
                            <input
                                type="text"
                                name="userEmail"
                                id="userEmail"
                                placeholder='Enter email here..'
                                onChange={changeHandler}

                            />
                        </div>
                        <div className={submitted && data.userPassword === '' ? 'empty register-box' : 'register-box'}>
                            <label htmlFor="userPassword">Password</label>
                            <input
                                type="password"
                                name="userPassword"
                                id="userPassword"
                                placeholder='Enter password here..'
                                onChange={changeHandler}
                            />
                        </div>
                        <div className="register-box">
                            <button className="register-btn">
                                register
                            </button>
                        </div>
                    </form>
                </div>
                <div className="register-right">
                    <h1>
                        Hello World!
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <p>
                        Do you have accounts?
                    </p>
                    <Link to='/login'>
                        login
                    </Link>
                </div>
            </div>

            <ToastContainer />
        </div>
    )
}

export default RegisterPage