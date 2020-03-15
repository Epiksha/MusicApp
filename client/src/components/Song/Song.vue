<template>
    <li class="song">
        <div class="song__group">
            <div class="song__group__info">
                <span class="song__group__info__label">Song:</span>

                <span
                    v-if="!editing"
                    v-text="info.title"
                />

                <input
                    v-else
                    v-model="newInfo.title"
                    type="text"
                >
            </div>

            <div class="song__group__info">
                <span class="song__group__info__label">Artist:</span>

                <span
                    v-if="!editing"
                    v-text="info.artist"
                />

                <input
                    v-else
                    v-model="newInfo.artist"
                    type="text"
                >
            </div>

            <div class="song__group__info">
                <span class="song__group__info__label">Album:</span>

                <span
                    v-if="!editing"
                    v-text="info.album"
                />

                <input
                    v-else
                    v-model="newInfo.album"
                    type="text"
                >
            </div>

            <div class="song__group__info">
                <span class="song__group__info__label">Genre:</span>

                <span
                    v-if="!editing"
                    v-text="info.genre"
                />

                <input
                    v-else
                    v-model="newInfo.genre"
                    type="text"
                >
            </div>
        </div>

        <div class="song__group">
            <img
                :src="info.albumImageUrl"
                alt="Album Cover"
            >

            <div
                v-if="editing"
                class="song__group__info"
                style="margin-top: 1rem;"
            >
                <span class="song__group__info__label">Album Image:</span>

                <input
                    v-model="newInfo.albumImageUrl"
                    type="text"
                >
            </div>
        </div>

        <YouTube
            v-if="viewing"
            class="song__video"
            :class="{'song__video--editing': editing}"
            :youtube-id="info.youtubeId"
        />

        <div
            v-if="editing"
            class="song__group__info"
            style="margin-top: 1rem"
        >
            <span class="song__group__info__label">YouTube Id:</span>

            <input
                v-if="editing"
                v-model="newInfo.youtubeId"
                type="text"
            >
        </div>

        <router-link
            v-if="!viewing"
            :to="{ path: `songs/${info.id}`, params: { id: info.id } }"
            type="button"
            class="button"
        >
            View Song Info
        </router-link>

        <div
            v-if="error"
            class="error"
            v-text="error"
        />

        <button
            v-if="viewing"
            class="button button--edit"
            @click="editing = !editing"
        >
            <span v-if="!editing">Edit</span>

            <span
                v-else
                @click="update"
            >
                Update
            </span>
        </button>
    </li>
</template>

<script src="./Song.js" />
