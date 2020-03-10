import Api from './ApiService';

export default {
    retrieveSongs() {
        return Api().get('songs');
    },
    
    createSong(songData) {
        return Api().post('songs', songData);
    },
};
