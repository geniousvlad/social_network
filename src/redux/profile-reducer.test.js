import profileReducer, { addPostActionCreator } from './profile-reducer';
import ReactDOM from 'react-dom';
import App from '../App';
import React from 'react';


it('new post should be added', () => {
    let action = addPostActionCreator('testing new post');
    let state = {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 17},
            {id: 2, message: 'This is my first post.', likesCount: 7}
            ]
    };
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(3);
});
