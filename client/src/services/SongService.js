import Api from './ApiService';

export default {
    retrieveSongs() {
        return Api().get('songs');
    },

    getSingleSong(id) {
        return Api().get(`songs/${id}`);
    },
    
    createSong(songData) {
        return Api().post('songs', songData);
    },

    updateSong(songData) {
        return Api().put(`songs/${songData.id}`, songData);
    },
    
    deleteSong(songData) {
        return Api().delete('songs', { data: songData });
    },
};
