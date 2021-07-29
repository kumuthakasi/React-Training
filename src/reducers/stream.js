import {
    CREATE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM,
    DELETE_STREAM,
    EDIT_STREAM
} from '../actions/types';


export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_STREAM:
            return action.payload
        default:
            return state;
    }

}