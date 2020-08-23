<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <ul>
                    <li><router-link to="/">Home</router-link></li>
                    <li><router-link to="/login">Login</router-link></li>
                    <li><router-link to="/user">USerInfo</router-link></li>
                    <li><router-link @click="logout">Logout</router-link></li>
                </ul>
            <hr>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapState } from 'vuex';

    export default {
        computed: mapState('alert', {
            'alertMessage': 'message',
            'alertType': 'type'
        }),
    methods: mapactions('auth', {
        'logout'
}),
}
</script>