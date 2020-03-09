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
                autocomplete="on"
            >
            <input
                v-model="password"
                type="password"
                name="password"
                placeholder="Password"
                autocomplete="on"
            >

            <button
                @click="register"
            >
                Register
            </button>
        </form>
    </main>
</template>

<script src="./Register.js" />
