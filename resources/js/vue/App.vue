<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/home" v-if="isLogged">About</router-link>
            <router-link to="/auth" v-else>Login</router-link>
            <button type="button" v-if="isLogged">
                {{ user.user }}
            </button>
        </div>
        <router-view/>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        computed: {
            ...mapGetters([
                'isLogged',
                'user'
            ])
        },
        data() {
            return {
                email: '',
                token: ''
            }
        },

        methods: {
            logout () {
                this.$store.dispatch('logout')
            }
        }
    }
</script>