<template>
    <main class="login">
        <h1>Login</h1>

        <form
            class="login__form"
        >
            <input
                v-model="email"
                type="email"
                name="email"
                placeholder="Email"
                autocomplete="on"
            >

            <input
                v-model="password"
                type="password"
                name="password"
                placeholder="Password"
                autocomplete="on"
            >

            <div
                class="error ut-marginBottom"
                v-html="error"
            />

            <button
                @click.prevent="login"
            >
                Login
            </button>
        </form>
    </main>
</template>

<script src="./Login.js" />
