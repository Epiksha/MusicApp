export default {
    name: 'Header',

    methods: {
        logout() {
            this.$store.dispatch('setToken', null);
            this.$store.dispatch('setUser', null);

            this.$router.push('/');
        },
    },
};
