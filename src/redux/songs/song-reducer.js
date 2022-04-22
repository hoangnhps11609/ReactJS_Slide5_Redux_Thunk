


const initialState = {
    songs : [
        {id: 1, title: 'Song 1', duration: '4:00'},
        {id: 2, title: 'Song 2', duration: '4:00'},
        {id: 3, title: 'Song 3', duration: '4:00'},
        {id: 4, title: 'Song 4', duration: '4:00'},
        {id: 5, title: 'Song 5', duration: '4:00'}
    ],
}


const songReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SELECT_SONG':
            const songs = state.songs.filter(item =>item.id === action.payload)
            if (songs && songs.length > 0) {
                return {...state, selectedSong: songs[0]}
            }
            return state;
        
        case "ADD_SONG":
            return {...state, songs: [...state.songs, action.payload]};

        default:
            return state;
    }
};

export default songReducer