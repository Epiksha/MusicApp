<template>
    <article class="callout">
        <header
            v-if="title"
            class="callout__header"
        >
            <h2 v-text="title" />
        </header>

        <div class="callout__body">
            <slot />
        </div>
    </article>
</template>

<script src="./Callout.js" />
