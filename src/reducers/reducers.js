import { combineReducers } from "redux";
const songsReducer = () => {
    return [
        { title: 'All Star', duration: '2.35' },
        { title: 'Believer', duration: '3.15' },
        { title: 'No Scrubs', duration: '1.35' },
        { title: 'I Want it that way', duration: '3.35' },
    ]
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})