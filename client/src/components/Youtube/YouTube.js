import Vue from 'vue';
import VueYouTube from 'vue-youtube';

Vue.use(VueYouTube);

export default {
    name: 'YouTube',

    props: [
        'youtubeId',
    ],
};
