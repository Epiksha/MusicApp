import Auth from '../../services/AuthService';
import Callout from '../../components/Callout/Callout.vue';

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
                const response = await Auth.login({
                    email: this.email,
                    password: this.password,
                });

                const { token, user } = response.data;

                this.$store.dispatch('setToken', token);
                this.$store.dispatch('setUser', user);

                this.$router.push('/');
            } catch (error) {
                this.error = error.response.data.error;
            }
        },
    },

    components: {
        Callout,
    },
};
