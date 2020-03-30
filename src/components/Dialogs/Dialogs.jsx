import React from 'react';
import s from './Dialogs.module.css';


const Dialogs = (props) => {
        return (
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <div className={s.dialog + ' ' + s.active}>
                        Vlad
                    </div>
                    <div className={s.dialog}>
                        Max Payne
                    </div>
                    <div className={s.dialog}>
                        Ronaldinho
                    </div>
                    <div className={s.dialog}>
                        Darth Vader
                    </div>
                    <div className={s.dialog}>
                        Mr. Putin
                    </div>
                    </div>                
            
            <div className={s.messages}>
                <div className={s.dialog}>Hi</div>
                <div className={s.dialog}>What's up nigga?</div>
                <div className={s.dialog}>Hey nigga!</div>
            </div>
            </div>
        )
}

export default Dialogs;