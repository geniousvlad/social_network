import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';


const Profile = () => {
    return (
        <div>
        <div>
        <img src="https://images.pexels.com/photos/3625709/pexels-photo-3625709.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
        </div>
        <div>
          ava + description
        </div>
        <MyPosts />
      </div>
    )
}

export default Profile;
