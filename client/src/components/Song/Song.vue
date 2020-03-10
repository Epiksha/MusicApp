<template>
    <li class="song">
        <div class="song__group">
            <h3 v-text="`Song: ${info.title}`" />
            <h4 v-text="`Artist: ${info.artist}`" />
            <h5 v-text="`Album: ${info.album}`" />
            <h6 v-text="`Genre: ${info.genre}`" />
        </div>

        <div class="song__group">
            <img
                :src="info.albumImageUrl"
                alt="Album Cover"
            >
        </div>
    </li>
</template>

<script src="./Song.js" />
