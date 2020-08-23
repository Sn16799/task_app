<template>
    <h1>
        <form @submit.prevent="login">
            <h1>Log In</h1>
        email: <input type="email" v-model="email">
        password: <input type="password" v-model="password">
        <button type="submit" class="btn btn-primary">Login</button>
        </form>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        data() {
            return {
                email: 'damin@exzample.com',
                password: '123456',
            }
        },
        methods: {
            login() {
                this.$store.dispatch('auth/login', {
                    email: this.email,
                    password: this.password
                });
            }
        }
    }
</script>