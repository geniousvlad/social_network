import {rerenderEntireTree} from '../render';

    let state = {
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
        
    }

    window.state = state;

    export let addPost = () => {
        let newPost = {
            id: 6,
            message: state.profilePage.newPostText,
            likesCount: 0
        };
        state.profilePage.posts.push(newPost);
        state.profilePage.newPostText = '';
        rerenderEntireTree(state);
    }
    export let updateNewPostText = (newText) => {
        state.profilePage.newPostText = newText;
        rerenderEntireTree(state);
    }

    export default state;