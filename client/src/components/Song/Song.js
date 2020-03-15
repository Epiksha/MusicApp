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
        async updateSong() {
            try {
                await SongService.updateSong(this.newInfo);

                this.$router.go();
            } catch (err) {
                this.error = 'Please fill in all required fields.';
            }
        },
        
        async deleteSong() {
            try {
                await SongService.deleteSong(this.info);
                this.$router.go(-1);
            } catch (err) {
                this.error = 'Could not delete song.';
            }
        },
    },
    
    components: {
        YouTube,
    },
};
