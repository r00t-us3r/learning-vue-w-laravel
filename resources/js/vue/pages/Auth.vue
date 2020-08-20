<template>
    <div>
        <b-form @submit.prevent="login">

            <b-form-group
                    id="input-group-1"
                    label="Email address:"
                    label-for="input-1"
            >
                <b-form-input
                        id="input-1"
                        v-model="email"
                        type="email"
                        required
                        placeholder="Enter email"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Your Password:" label-for="input-2">
                <b-form-input
                        id="input-2"
                        v-model="password"
                        required
                        type="password"
                        placeholder="Enter password"
                ></b-form-input>
            </b-form-group>

            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
    </div>
</template>

<script>


    export default {
        data() {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            login () {
                this.$store
                    // trigger login event which will fire login api call
                    .dispatch('login', {
                        email: this.email,
                        password: this.password
                    })
                    // afterwards push the user to said page
                    .then(() => {
                        this.$router.push({ name: 'home' })
                    })
                    // catch any errors
                    .catch(err => {
                        console.log(err)
                    })
            }
        }
    }
</script>