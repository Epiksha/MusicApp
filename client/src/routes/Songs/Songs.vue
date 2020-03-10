<template>
    <main class="songs">
        <Callout
            title="Song Info"
            :button="button"
        >
            <ul>
                <li
                    v-for="song in songs"
                    :key="song.id"
                    v-text="song.title"
                />
            </ul>
        </Callout>
    </main>
</template>

<script src="./Songs.js" />
