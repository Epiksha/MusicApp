<template>
    <nav class="nav">
        <router-link
            v-for="link in links"
            :key="link.text"
            :to="link.url"
            :exact="link.exact"
            class="nav__link"
        >
            {{ link.text }}
        </router-link>

        <router-link
            v-if="!$store.state.isUserLoggedIn"
            to="/login"
            class="nav__link"
        >
            Sign In
        </router-link>
        
        <button
            v-if="$store.state.isUserLoggedIn"
            class="nav__link"
            @click="logout"
        >
            Logout
        </button>
    </nav>
</template>

<script src="./Nav.js" />
