import SongService from '../../services/SongService';

import Callout from '../../components/Callout/Callout.vue';
import Song from '../../components/Song/Song.vue';

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
        Song,
    },
};
