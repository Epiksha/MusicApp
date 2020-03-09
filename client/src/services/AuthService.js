import Api from './ApiService';

export default {
    register(credentials) {
        return Api().post('register', credentials);
    },
    
    login(credentials) {
        return Api().post('login', credentials);
    },
};
