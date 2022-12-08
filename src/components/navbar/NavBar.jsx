import React, { useContext, useState } from 'react'
import './NavBar.css'

//material icons
import HomeIcon from '@mui/icons-material/Home';
import DarkModeIcon from '@mui/icons-material/NightsStay';
import LightModeIcon from '@mui/icons-material/LightMode';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useEffect } from 'react';
import { AuthContext } from '../context/AuthContextProvider';
import AppsIcon from '@mui/icons-material/Apps';


const storage = JSON.parse(localStorage.getItem("darkMode"));
const stateValue = (storage === null) ? true : storage;

// theme icon compoents for changing theme icons 
const rootSelector = document.documentElement.style;
const ThemeIcon = () => {
    const [darkMode, setDarkMode] = useState(stateValue);
    useEffect(() => {
        localStorage.setItem("darkMode", darkMode);
        if (darkMode) {
            rootSelector.setProperty('--font-color', '#808080');
            rootSelector.setProperty('--bg-surface', '#121212');
            rootSelector.setProperty('--bg', '#000000');
        }
        else {
            rootSelector.setProperty('--font-color', '#121212');
            rootSelector.setProperty('--bg-surface', '#ffffff');
            rootSelector.setProperty('--bg', '#E0E0E0');
        }
    },[darkMode])
     
    function clickHandler() {
        setDarkMode(!darkMode);
    }

    if (darkMode) {
        return (
            <DarkModeIcon className='darkness nav-icons' onClick={clickHandler} />
        )
    } else {
        return (
            <LightModeIcon className='brightness nav-icons' onClick={clickHandler} />
        )
    }
}

const MenuBar = () => {
    const [isLeftBar, setIsLeftBar] = useState(false);
    const [isRightBar, setIsRightBar] = useState(false);
    const leftBarHandler = () => {
        const leftBar = document.querySelector('.left-bar');
        const rightBar = document.querySelector('.right-bar');
        if(!isLeftBar) {
            leftBar.style.display='block'
            rightBar.style.display='none'
        } 
        else {
            leftBar.style.display='none';
        }
        setIsLeftBar(!isLeftBar);
    }
    const rightBarHandler = () => {
        const rightBar = document.querySelector('.right-bar');
        !isRightBar ? rightBar.style.display='block' 
        : rightBar.style.display='none';
        setIsRightBar(!isRightBar);
    }


    return (
        <div className="menu-bar-box">
            <label htmlFor="isCheck" >
                 <AppsIcon className="menu-bar-icon" />
            </label>
            <input type="checkbox" name="checkbox" id="isCheck" />
            <div className="menu-bar-wrapper">
                <p className="left-bar-menu" onClick={leftBarHandler}>Sidebar</p>
                <p className="right-bar-menu" onClick={rightBarHandler}>Online friends</p>
            </div>
        </div>
    );
}
function NavBar() {
    const {user} = useContext(AuthContext);
    console.log(user);
    return (
        <div className="nav-wrapper">
            <div className="nav-bar container">
                <div className="nav-bar-left">
                    <h2>Compony logo</h2>
                    <HomeIcon className='nav-icons' />
                    <ThemeIcon />
                    <MenuBar />
                </div>
                <div className="nav-bar-middle">
                    <div className="middle-box">
                        <SearchIcon className='nav-icons' />
                        <input
                            type="text"
                            name="search"
                            id="search"
                        />
                    </div>
                </div>
                <div className="nav-bar-right">
                    <PersonIcon className='nav-icons' />
                    <EmailIcon className='nav-icons' />
                    <NotificationsIcon className='nav-icons' />
                    <img src={user.userProfile} alt="profile pic" />
                    <h3>{user.userName}</h3>
                </div>
            </div>
        </div>
    )
}

export default NavBar