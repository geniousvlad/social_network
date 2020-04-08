import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 17},
                {id: 2, message: 'This is my first post.', likesCount: 7}
                ],
            newPostText: 'fuck.com'
                        
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Vlad'},
                {id: 2, name: 'Max Payne'},
                {id: 3, name: 'Ronaldinho'},
                {id: 4, name: 'Darth Vader'},
                {id: 5, name: 'Mr. Putin'}
            ],
            messages: [
                {id: 1, message: 'Hi Nigga!'},
                {id: 2, message: 'What is going on?'},
                {id: 3, message: 'Hey yo!'},
                {id: 4, message: 'Hey yo!'},
                {id: 5, message: 'Hey yo!'}
            ],
            newMessageBody: ''
        },
        sidebar: {}        
        
    },
    _callSubscriber () {
        console.log('State is changed');
    },

    getState(){
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },

    dispatch (action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}             


export default store;
window.store = store;