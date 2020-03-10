import Callout from '../../components/Callout/Callout.vue';
import SongService from '../../services/SongService';

export default {
    name: 'Songs',

    data() {
        return {
            songs: null,
            button: {
                label: '+',
                link: '/create',
            },
        };
    },

    async mounted() {
        const songs = await SongService.retrieveSongs();
        this.songs = songs.data;
    },

    components: {
        Callout,
    },
};
