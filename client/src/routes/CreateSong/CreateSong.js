import Callout from '../../components/Callout/Callout.vue';
import SongService from '../../services/SongService';

export default {
    name: 'CreateSong',

    data() {
        return {
            song: {
                title: null,
                artist: null,
                genre: null,
                album: null,
                albumImageUrl: null,
                youtubeId: null,
                lyrics: null,
                tab: null,
            },
        };
    },

    methods: {
        async create() {
            try {
                if (this.required) {
                    await SongService.createSong(this.song);
                    this.$router.push('songs');
                }
            } catch (err) {
                console.log(err);
            }
        },
    },

    computed: {
        required() {
            const {
                title,
                artist,
                genre,
                album,
                albumImageUrl,
                youtubeId,
                lyrics,
                tab,
            } = this;

            if (title && artist && genre && album && albumImageUrl && youtubeId && lyrics && tab) {
                return true;
            }

            return false;
        },
    },

    components: {
        Callout,
    },
};
