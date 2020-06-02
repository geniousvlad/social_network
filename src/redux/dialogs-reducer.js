const SEND_MESSAGE = 'SEND-MESSAGE';


let initialState = {
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


const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: 
                let body = action.newMessageBody;
                return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            };
        default:
            return state;

    }    
}

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })    

export default dialogsReducer;