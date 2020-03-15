<template>
    <li class="song">
        <div class="song__group">
            <span v-html="`<span class='song__group__label'>Song:</span> ${info.title}`" />
            <span v-html="`<span class='song__group__label'>Artist:</span> ${info.artist}`" />
            <span v-html="`<span class='song__group__label'>Album:</span> ${info.album}`" />
            <span v-html="`<span class='song__group__label'>Genre:</span> ${info.genre}`" />
        </div>

        <div class="song__group">
            <img
                :src="info.albumImageUrl"
                alt="Album Cover"
            >
        </div>

        <YouTube
            v-if="viewing"
            class="song__video"
            :youtube-id="info.youtubeId"
        />

        <router-link
            v-if="!viewing"
            :to="{ path: `songs/${info.id}`, params: { id: info.id } }"
            type="button"
            class="button"
        >
            View Song Info
        </router-link>
    </li>
</template>

<script src="./Song.js" />
