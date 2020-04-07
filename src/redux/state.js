const ADD_POST = 'ADD-POST';
const UPDAE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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
            ]
        }        
        
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
        if (action.type === ADD_POST) {
            let newPost = {
                id: 6,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);            
        } else if (action.type === UPDAE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}


  export const addPostActionCreator = () => ({ type: ADD_POST })    
  export const updateNewPostTextActionCreator = (text) => 
                ({ type: UPDAE_NEW_POST_TEXT, newText: text })      


export default store;
window.store = store;