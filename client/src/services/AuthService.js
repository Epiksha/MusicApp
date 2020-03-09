import Api from './ApiService';

export default {
    register(credentials) {
        return Api().post('register', credentials);
    },
};
