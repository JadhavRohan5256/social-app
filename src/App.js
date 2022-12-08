import React, { useContext, useState } from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import './App.css';
import { AuthContext } from './components/context/AuthContextProvider';
import Layout from './components/layout/Layout';
import HomePage from './pages/home/HomePage';
import LoginPage from './pages/login/LoginPage';
import ProfilePage from './pages/profile/ProfilePage';
import RegisterPage from './pages/register/RegisterPage';

export const PostContext = React.createContext();
function App() {
  const {user} = useContext(AuthContext);

  const CheckLogged = ({children}) => {
    if(user === null) return <Navigate to={'/login'} />
    return children;
  }

  const router = createBrowserRouter([
    {
      path: '/login',
      element: <LoginPage />
    },
    {
      path: '/register',
      element: <RegisterPage />
    },
    {
      path: '/',
      element: <CheckLogged>
                  <Layout />
               </CheckLogged>,
      children:[
        {
          path: '/',
          element: <HomePage />
        },
        {
          path: '/profile/:id',
          element: <ProfilePage />
        }
      ]
    }
  ]);


  const postApi = [
    {
      postId: 1,
      postDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam optio sequi vel officiis. Consectetur sed fugiat veritatis quia dignissimos molestiae?",
      postedFile: "../img/post/2.jpeg",
      postedTime: "1 min ago",
      userId: 2,
      userName: "tushar jadhav",
      userProfile: "../img/person/2.jpeg",
      postCommets: [
        {
          commetsId: 1,
          commetsDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci aliquam saepe esse sed rem dolores mollitia molestiae, perspiciatis beatae rerum.",
          commetedTime: "1 min ago",
          userId: 2,
          userName: "John Doe",
          userProfile: "../img/person/1.jpeg"
        },
        {
          commetsId: 2,
          commetsDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci aliquam saepe esse sed rem dolores mollitia molestiae, perspiciatis beatae rerum.",
          commetedTime: "2 min ago",
          userId: 5,
          userName: "vishar Doe",
          userProfile: "../img/person/3.jpeg"
        },
        {
          commetsId: 3,
          commetsDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci aliquam saepe esse sed rem dolores mollitia molestiae, perspiciatis beatae rerum.",
          commetedTime: "1 min ago",
          userId: 3,
          userName: "sagar Doe",
          userProfile: "../img/person/4.jpeg"
        }
      ],

    },
    {
      postId: 2,
      postDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam optio sequi vel officiis. Consectetur sed fugiat veritatis quia dignissimos molestiae?",
      postedFile: "../img/post/3.jpeg",
      postedTime: "2 min ago",
      userId: 1,
      userName: "sagar jadhav",
      userProfile: "../img/person/1.jpeg",
      postCommets: [
        {
          commetsId: 4,
          commetsDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci aliquam saepe esse sed rem dolores mollitia molestiae, perspiciatis beatae rerum.",
          commetedTime: "1 min ago",
          userId: 2,
          userName: "poonam chopade",
          userProfile: "../img/person/3.jpeg"
        },
        {
          commetsId: 5,
          commetsDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci aliquam saepe esse sed rem dolores mollitia molestiae, perspiciatis beatae rerum.",
          commetedTime: "2 min ago",
          userId: 3,
          userName: "varsha chopade",
          userProfile: "../img/person/4.jpeg"
        },
        {
          commetsId: 6,
          commetsDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci aliquam saepe esse sed rem dolores mollitia molestiae, perspiciatis beatae rerum.",
          commetedTime: "1 min ago",
          userId: 4,
          userName: "rohan jadhav",
          userProfile: "../img/person/8.jpeg"
        }
      ],
      
    }
  ];
  return (
    <PostContext.Provider value={postApi} >
      <RouterProvider router={router} />
    </PostContext.Provider>
  );
}

export default App;
