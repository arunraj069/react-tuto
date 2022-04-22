import { combineReducers } from 'redux';

const songReducer =()=>{
    return [
        { title : 'My day', duration : '10.5'},
        { title : 'wake up call', duration : '5.5'},
        { title : 'all along', duration : '4.2'},
        { title : 'every night', duration : '3.6'},
        { title : 'given sale', duration : '1.45'}
    ]
}
const selectedSongReducer = (selectedSong = null,action)=>{
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers({
    songs : songReducer,
    selectedSong : selectedSongReducer
});