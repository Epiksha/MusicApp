<template>
    <main class="songs">
        <Callout
            title="Song Info"
            :button="button"
        >
            <ul>
                <Song
                    v-for="song in songs"
                    :key="song.id"
                    :info="song"
                />
            </ul>
        </Callout>
    </main>
</template>

<script src="./Songs.js" />
