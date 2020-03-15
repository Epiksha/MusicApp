<template>
    <header class="header">
        <router-link
            to="/"
            class="header__title"
        >
            The Note Corner
        </router-link>

        <nav>
            <ul>
                <li v-if="!$store.state.isUserLoggedIn">
                    <router-link
                       
                        to="/login"
                        class="header__link"
                    >
                        Login
                    </router-link>
                </li>

                <li v-if="$store.state.isUserLoggedIn">
                    <button
                        class="header__link"
                        @click="logout"
                    >
                        Logout
                    </button>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script src="./Header.js" />
