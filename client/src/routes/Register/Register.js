import Auth from '../../services/AuthService';

export default {
    name: 'Register',

    data() {
        return {
            email: '',
            password: '',
        };
    },

    methods: {
        async register() {
            const response = await Auth.register({ email: this.email, password: this.password });

            console.log(response.data);
        },
    },
};
