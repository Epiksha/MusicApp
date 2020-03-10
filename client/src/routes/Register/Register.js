import Auth from '../../services/AuthService';
import Callout from '../../components/Callout/Callout.vue';

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
                const response = await Auth.register({
                    email: this.email,
                    password: this.password,
                });

                const { token, user } = response.data;
                
                this.$store.dispatch('setToken', token);
                this.$store.dispatch('setUser', user);
            } catch (error) {
                this.error = error.response.data.error;
            }
        },
    },

    components: {
        Callout,
    },
};
