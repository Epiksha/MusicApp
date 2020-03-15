<template>
    <main class="viewSong">
        <Song
            v-if="song"
            :info="song"
            :viewing="true"
        />
    </main>
</template>

<script src="./ViewSong.js" />
