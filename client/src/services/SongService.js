import Api from './ApiService';

export default {
    retrieveSongs() {
        return Api().get('songs');
    },
};
