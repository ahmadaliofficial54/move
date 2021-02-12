<template>
<q-page class="move-app-color">
    <div class="flex flex-center">
        <q-img alt="School care logo" width="200px" height="68px" class="logo" src="../statics/logos/logo.png" />
    </div>
    <div class="column q-mt-xl q-pa-md">
        <span class="q-pb-sm text-tag">Login to your Account</span>
        <q-input dense outlined color="green-9" v-model="userName" placeholder="User Name" lazy-rules :rules="[ val => val && val.length > 0 || 'Please enter contact number']">
            <template v-slot:prepend>
                <q-icon name="las la-user" />
            </template>
        </q-input>

        <q-input dense outlined color="green-9" v-model="password" type="password" placeholder="Password" lazy-rules :rules="[ val => val && val.length > 0 || 'Please enter password']">
            <template v-slot:prepend>
                <q-icon name="las la-lock" />
            </template>
        </q-input>
        <span @click="forgotPassword" class="text-tag forgot-text">Forgot Password?</span>
        <q-btn @click="validateUser" class="q-mt-sm" label="Login" color="move-brand-blue" />

    </div>

    <q-footer style="background-color: white">
        <div class=" q-mb-md flex flex-center text-black">
            Don't have an Account?
            <span @click="signup" class="text-tag q-ml-sm signup-text">Signup</span>
        </div>
    </q-footer>
</q-page>
</template>

<script>
import notification from "../common/notificationsAndDialogues.js";
import {
    mapGetters,
    mapActions
} from "vuex";
export default {
    mixins: [notification],
    data() {
        return {
            userName: null,
            password: null
        };
    },
    computed: {
        ...mapGetters("authentication", ["getLoginResponse"])
    },
    methods: {
        ...mapActions("authentication", ["loginUser"]),
        signup() {
            this.$router.push("signup");
        },
        forgotPassword() {
            this.$router.push("forgotPassword");
        },
        validateUser() {
            this.loginUser({
                    username: this.userName,
                    password: this.password
                })
                .then(() => {
                    console.log(this.getLoginResponse);
                    if (this.getLoginResponse == true) {
                        this.$router.push("category");
                    } else {
                        this.alertMessage("Login Failed", "Incorrect Username or Password!");
                    }
                })
                .catch(value => {
                    console.log(value);
                });
        }
    }
};
</script>

<style scoped>
.logo {
    margin-top: 65px;
}

.powered-by-img {
    height: 40px;
    width: 40px;
    margin-left: 5px;
}

.text-tag {
    font-size: 15px;
}

.forgot-text {
    margin-top: -10px;
    align-self: flex-end;
}

.signup-text {
    color: blue;
}
</style>
