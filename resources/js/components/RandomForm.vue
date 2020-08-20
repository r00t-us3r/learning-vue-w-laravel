<template>
    <div>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">

            <b-form-group
                    id="input-group-1"
                    label="Email address:"
                    label-for="input-1"
                    description="We'll never share your email with anyone else."
            >
                <b-form-input
                        id="input-1"
                        v-model="form.username"
                        type="email"
                        required
                        placeholder="Enter username"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Your Password:" label-for="input-2">
                <b-form-input
                        id="input-2"
                        v-model="form.password"
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
                form: {
                    _csrf: Laravel.csrfToken,
                    username: '',
                    password: null,
                },
                show: true
            }
        },
        methods: {
            onSubmit(evt) {
                evt.preventDefault()
                alert(JSON.stringify(this.form))
                $.ajax({
                    method: "post",
                    url: "/api/login",
                    data: {
                        email: this.form.username,
                        password: this.form.password
                    },
                    success: function (data) {
                        console.log(data);
                    }
                });
            },
            onReset(evt) {
                evt.preventDefault()
                // Reset our form values
                this.form.username = ''
                this.form.password = ''
                // Trick to reset/clear native browser form validation state
                this.show = false
                this.$nextTick(() => {
                    this.show = true
                })
            }
        }
    }
</script>