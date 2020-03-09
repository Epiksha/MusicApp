export default {
    name: 'Nav',

    data() {
        return {
            links: [
                {
                    url: '/',
                    text: 'Home',
                    exact: true,
                },
                {
                    url: '/login',
                    text: 'Sign In',
                },
                {
                    url: '/register',
                    text: 'Register',
                },
            ],
        };
    },
};
