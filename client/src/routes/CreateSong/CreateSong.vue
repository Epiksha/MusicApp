<template>
    <main class="songs">
        <form class="form form--create">
            <Callout
                title="Song Information"
                class="
                    form__group
                    form__group--1
                "
            >
                <input
                    v-model="song.title"
                    type="title"
                    name="title"
                    class="form__input"
                    placeholder="Title"
                    autocomplete="on"
                    onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Title'"
                    required
                >

                <input
                    v-model="song.artist"
                    type="artist"
                    name="artist"
                    class="form__input"
                    placeholder="Artist"
                    autocomplete="on"
                    onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Artist'"
                    required
                >

                <input
                    v-model="song.genre"
                    type="genre"
                    name="genre"
                    class="form__input"
                    placeholder="Genre"
                    autocomplete="on"
                    onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Genre'"
                    required
                >

                <input
                    v-model="song.album"
                    type="album"
                    name="album"
                    class="form__input"
                    placeholder="Album"
                    autocomplete="on"
                    onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Album'"
                    required
                >

                <input
                    v-model="song.albumImageUrl"
                    type="albumImageUrl"
                    name="albumImageUrl"
                    class="form__input"
                    placeholder="Album Image Url"
                    autocomplete="on"
                    onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Album Image Url'"
                    required
                >

                <input
                    v-model="song.youtubeId"
                    type="youtubeId"
                    name="youtubeId"
                    class="form__input"
                    placeholder="Youtube Id"
                    autocomplete="on"
                    onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Youtube Id'"
                    required
                >
            </Callout>

            <Callout
                title="Lyrics & Tab"
                class="form__group form__group--2"
            >
                <input
                    v-model="song.lyrics"
                    type="lyrics"
                    name="lyrics"
                    class="form__input"
                    placeholder="Lyrics"
                    autocomplete="on"
                    onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Lyrics'"
                    required
                >

                <input
                    v-model="song.tab"
                    type="tab"
                    name="tab"
                    class="form__input"
                    placeholder="Tab"
                    autocomplete="on"
                    onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Tab'"
                    required
                >
            </Callout>

            <div class="form__group form__group--last">
                <button
                    class="
                        button
                        button--form
                    "
                    @click.prevent="create"
                >
                    Create Song
                </button>
            </div>
        </form>

        <div
            v-if="error"
            class="error"
            v-text="error"
        />
    </main>
</template>

<script src="./CreateSong.js" />
