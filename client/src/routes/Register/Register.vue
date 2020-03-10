<template>
    <main class="register">
        <h1>Register</h1>

        <form
            class="register__form"
        >
            <input
                v-model="email"
                type="email"
                name="email"
                placeholder="Email"
            >

            <input
                v-model="password"
                type="password"
                name="password"
                placeholder="Password"
                autocomplete="new-password"
            >

            <div
                class="error ut-marginBottom"
                v-html="error"
            />

            <button
                @click.prevent="register"
            >
                Register
            </button>
        </form>
    </main>
</template>

<script src="./Register.js" />
