<template>
    <div v-if="!isLogged">
        <router-link to="/auth">Login</router-link>
    </div>
    <div v-else>
        <button type="button" @click="logout()">Logout</button>
        <button type="button">
            Welcome back, {{ user.user.email }}
        </button>
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