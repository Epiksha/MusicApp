import SongService from '../../services/SongService';
import YouTube from '../Youtube/YouTube.vue';

export default {
    name: 'Song',

    props: [
        'info',
        'viewing',
    ],

    data() {
        return {
            editing: false,
            newInfo: {
                title: null,
                artist: null,
                genre: null,
                album: null,
                albumImageUrl: null,
                youtubeId: null,
                lyrics: null,
                tab: null,
            },
            error: null,
        };
    },

    mounted() {
        this.newInfo = this.info;
    },

    methods: {
        async update() {
            try {
                SongService.updateSong(this.newInfo);

                this.$router.go(this.$router.currentRoute);
            } catch (err) {
                this.error = 'Please fill in all required fields.';
            }
        },
    },
    
    components: {
        YouTube,
    },
};
