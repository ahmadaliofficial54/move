<template>
<q-page class="move-app-color">
    <div class="flex flex-center">
        <q-img alt="School care logo" class="logo" width="200px" height="68px" src="../statics/logos/logo.png" />
    </div>
    <div class="column q-pa-md q-mt-lg">
        <span class="q-pb-sm text-tag">Create your Account</span>
        <q-input dense outlined color="green-9" v-model="name" placeholder="Full Name" lazy-rules :rules="[(val) => (val && val.length > 0) || 'Please enter your name']">
            <template v-slot:prepend>
                <q-icon name="las la-user" />
            </template>
        </q-input>

        <q-input dense outlined color="green-9" v-model="userName" placeholder="User Name" lazy-rules :rules="[(val) => (val && val.length > 0) || 'Please enter user name']">
            <template v-slot:prepend>
                <q-icon name="las la-user" />
            </template>
        </q-input>

        <q-input dense outlined color="green-9" v-model="contactNumber" placeholder="Contact Number" lazy-rules :rules="[
          (val) => (val && val.length > 0) || 'Please enter contact number',
        ]">
            <template v-slot:prepend>
                <q-icon name="las la-id-card" />
            </template>
        </q-input>

        <q-input dense outlined type="email" color="green-9" v-model="email" placeholder="Email Address" lazy-rules :rules="[(val) => (val && val.length > 0) || 'Please enter your email']">
            <template v-slot:prepend>
                <q-icon name="las la-id-card" />
            </template>
        </q-input>

        <q-input dense outlined color="green-9" v-model="password" type="password" placeholder="Password" lazy-rules :rules="[(val) => (val && val.length > 0) || 'Please enter password']">
            <template v-slot:prepend>
                <q-icon name="las la-lock" />
            </template>
        </q-input>
        <q-btn class="q-mt-xs" label="Signup" @click="signUpUser" color="move-brand-blue" />
    </div>
    <q-footer style="background-color: white">
        <div class="q-mb-md flex flex-center text-black">
            Do you have an Account?
            <span @click="login" class="text-tag q-ml-sm signup-text">Login</span>
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
            name: null,
            userName: null,
            password: null,
            email: null,
            contactNumber: null,
        };
    },
    computed: {},
    methods: {
        ...mapActions("authentication", ["signUp"]),
        login() {
            this.$router.push({
                path: "/",
            });
        },
        signUpUser() {
            // this.$router.push("verification");

            this.signUp({
                    name: this.name,
                    userName: this.userName,
                    password: this.password,
                    phoneNo: parseInt(this.contactNumber),
                    emailAddress: this.email
                })
                .then((response) => {
                    if (response.name != null) {
                        this.alertMessage("Successfully!", "User has been registered");
                        this.$router.push("/");
                    } else this.alertMessage("Error!", "This username already exist");
                    this.name = "";
                    this.email = "";
                    this.password = "";
                    this.password = "";
                    this.phoneNo = "";
                })
                .catch((value) => {
                    console.log(value);
                });
        },
    },
};
</script>

<style scoped>
.logo {
    margin-top: 45px;
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
