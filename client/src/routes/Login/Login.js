import Auth from '../../services/AuthService';

export default {
    name: 'Login',

    data() {
        return {
            email: '',
            password: '',
            error: null,
        };
    },

    methods: {
        async login() {
            try {
                await Auth.login({
                    email: this.email,
                    password: this.password,
                });
            } catch (error) {
                this.error = error.response.data.error;
            }
        },
    },
};
