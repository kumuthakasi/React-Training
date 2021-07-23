import { combineReducers } from "redux";

const dataList = (state = [], action) => {
    if (action.type === 'FETCH_POSTS') {
        return action.payload;
    }
    return state
}

export default combineReducers({
    postsData: dataList
})