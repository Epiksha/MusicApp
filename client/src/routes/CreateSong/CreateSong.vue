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
                >
            </Callout>

            <div class="form__group form__group--last">
                <button
                    class="
                        button
                        button--form
                    "
                    @click="create"
                >
                    Create Song
                </button>
            </div>
        </form>
    </main>
</template>

<script src="./CreateSong.js" />
