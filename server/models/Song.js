module.exports = (sequelize, DataTypes) => {
    const Song = sequelize.define('Song', {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        artist: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        genre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        album: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        albumImageUrl: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        youtubeId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lyrics: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        tab: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    });
    
    return Song;
};
