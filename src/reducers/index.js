import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        {
            title: 'No Scrups',
            duration: '4:20'
        },
        {
            title: 'Mercy',
            duration: '3:35'
        },
        {
            title: 'I want it that way',
            duration: '3:20'
        }
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
});
 