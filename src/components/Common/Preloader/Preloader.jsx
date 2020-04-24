import preloader from '../../../assets/images/spinner_rgb.gif';
import s from '../Preloader/Preloader.module.css';
import React from 'react';


let Preloader = (props) => {
    return <div> 
    <img src={ preloader } className={s.preloaderPic} />
    </div>
}

export default Preloader;