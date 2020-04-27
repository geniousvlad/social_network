import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../Common/Preloader/Preloader';


const ProfileInfo = (props) => {

  if (!props.profile) {
    return <Preloader />
  }

    return (
        <div>
        <div>
        <img src="https://images.pexels.com/photos/3625709/pexels-photo-3625709.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
        </div>
        <div className={s.descriptionBlock}>
          <img src={ props.profile.photos.large } />
          ava + description
        </div>
      </div>
    )
}

export default ProfileInfo;
