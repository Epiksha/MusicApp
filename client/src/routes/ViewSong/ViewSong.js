import SongService from '../../services/SongService';

export default {
    name: 'ViewSong',

    data() {
        return {
            song: null,
        };
    },

    async mounted() {
        const { id } = this.$store.state.route.params;
        const song = await SongService.getSingleSong(id);

        this.song = song.data;
    },
};
