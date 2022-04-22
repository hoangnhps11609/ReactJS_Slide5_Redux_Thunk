
export const selectSong = (id) => ({type:'SELECT_SONG', payload: id});

export const addSong = (song) => ({type: 'ADD_SONG', payload: song});