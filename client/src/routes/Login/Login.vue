<template>
    <main>
        <Callout title="Login">
            <form class="form">
                <input
                    v-model="email"
                    type="email"
                    name="email"
                    class="form__input"
                    placeholder="Email"
                    autocomplete="on"
                    onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Email'"
                >

                <input
                    v-model="password"
                    type="password"
                    name="password"
                    class="form__input"
                    placeholder="Password"
                    autocomplete="on"
                    onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Password'"
                >

                <div
                    class="error"
                    v-html="error"
                />

                <button
                    class="button"
                    @click.prevent="login"
                >
                    Login
                </button>

                <div class="form__link">
                    <span>
                        Don't have an account?
                    </span>
                    <router-link to="/register">
                        Register
                    </router-link>
                </div>
            </form>
        </Callout>
    </main>
</template>

<script src="./Login.js" />
