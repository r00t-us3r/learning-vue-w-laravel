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
        <b-card class="mt-3" header="Form Data Result">
            <pre class="m-0">{{ form }}</pre>
        </b-card>
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
                    .dispatch('login', {
                        email: this.email,
                        password: this.password
                    })
                    .then(() => {
                        this.$router.push({ name: 'About' })
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }
        }
    }
</script>