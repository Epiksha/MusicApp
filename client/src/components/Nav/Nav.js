export default {
    name: 'Nav',

    data() {
        return {
            links: [
                {
                    url: '/songs',
                    text: 'Browse',
                    exact: true,
                },
            ],
        };
    },

    methods: {
        logout() {
            this.$store.dispatch('setToken', null);
            this.$store.dispatch('setUser', null);

            this.$router.push('/');
        },
    },
};
