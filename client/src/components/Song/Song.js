import YouTube from '../Youtube/YouTube.vue';

export default {
    name: 'Song',

    props: [
        'info',
        'viewing',
    ],
    
    components: {
        YouTube,
    },
};
