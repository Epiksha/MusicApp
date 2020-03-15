<template>
    <article class="callout">
        <header
            v-if="title"
            class="callout__header"
            :class="{'ut-relative': button}"
        >
            <h2 v-text="title" />

            <router-link
                v-if="button"
                :to="button.link"
                class="
                    button
                    button--callout
                "
            >
                <span v-text="button.label" />
            </router-link>
        </header>

        <div class="callout__body">
            <slot />
        </div>
    </article>
</template>

<script src="./Callout.js" />
