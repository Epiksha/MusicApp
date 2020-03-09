import Auth from '../../services/AuthService';

export default {
    name: 'Register',

    data() {
        return {
            email: '',
            password: '',
            error: null,
        };
    },

    methods: {
        async register() {
            try {
                await Auth.register({
                    email: this.email,
                    password: this.password,
                });
            } catch (error) {
                this.error = error.response.data.error;
            }
        },
    },
};
