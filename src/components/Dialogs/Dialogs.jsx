import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';


const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return <div className={s.dialog + ' ' + s.active}>
    <NavLink to={path}>{props.name}</NavLink>
</div>
}

const Message = (props) => {
    return <div className={s.dialog}>{props.message}</div>
}


const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Vlad'},
        {id: 2, name: 'Max Payne'},
        {id: 3, name: 'Ronaldinho'},
        {id: 4, name: 'Darth Vader'},
        {id: 5, name: 'Mr. Putin'}
    ]
    
    let messages = [
        {id: 1, message: 'Hi Nigga!'},
        {id: 2, message: 'What is going on?'},
        {id: 3, message: 'Hey yo!'},
        {id: 4, message: 'Hey yo!'},
        {id: 5, message: 'Hey yo!'}
    ]

    let dialogsElements = dialogs.map ( d => <DialogItem name={d.name} id={d.id} /> );

    let messagesElements = messages.map( message => <Message message={message.message}/> );

        return (
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    { dialogsElements }
                    </div>                
            
            <div className={s.messages}>
                { messagesElements }
            </div>
            </div>
        )
}

export default Dialogs;