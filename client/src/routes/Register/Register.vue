<template>
    <main class="register">
        <Callout title="Register">
            <form
                class="register__form"
            >
                <input
                    v-model="email"
                    type="email"
                    name="email"
                    class="form__input"
                    placeholder="Email"
                    autocomplete="on"
                >

                <input
                    v-model="password"
                    type="password"
                    name="password"
                    class="form__input"
                    placeholder="Password"
                    autocomplete="new-password"
                >

                <div
                    class="error ut-marginBottom"
                    v-html="error"
                />

                <button
                    class="button"
                    @click.prevent="register"
                >
                    Register
                </button>

                <div class="form__link">
                    <span>
                        Already have an account?
                    </span>
                    
                    <router-link to="/login">
                        Login
                    </router-link>
                </div>
            </form>
        </Callout>
    </main>
</template>

<script src="./Register.js" />
