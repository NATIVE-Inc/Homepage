import { FETCH_POSTS, NEW_POST, INCREMENT, DECREMENT, AUTH } from '../actions/types';

const initialState = {
    items: [],
    item: {},
    count: 0,
    auth: "false"
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_POSTS: 
            return {
                ...state, 
                items: action.payload
            }
        case INCREMENT:
            return {
                ...state,
                count: state.count + action.payload
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - action.payload
            }
        case AUTH:
            return {
                ...state,
                auth: action.payload
            }
       default:
           return state
            
    }
}
