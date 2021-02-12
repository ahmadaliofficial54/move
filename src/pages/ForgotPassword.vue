<template>
<q-page class="page-style move-app-color">
    <div class="parent-div column">
        <div class="logo-div q-pt-md flex flex-center col-3">
            <q-img alt="School care logo" width="200px" height="68px" class="logo" src="../statics/logos/logo.png" />
        </div>
        <div class="column q-pa-md q-mt-xl col-7">
            <span class="q-pb-sm text-tag">Forgot Password</span>
            <q-input dense outlined color="green-9" v-model="userName" placeholder="User Name" lazy-rules :rules="[ val => val && val.length > 0 || 'Please enter contact number']">
                <template v-slot:prepend>
                    <q-icon name="las la-id-card" />
                </template>
            </q-input>
            <q-btn @click="resetPassword" label="Continue" color="move-brand-blue" />
        </div>
    </div>
</q-page>
</template>

<script>
import router from '../router';
import notification from "../common/notificationsAndDialogues.js";
import {
    mapGetters,
    mapActions
} from "vuex";
export default {
    mixins: [notification],
    data() {
        return {
            userName: null
        };
    },
    methods: {
        ...mapActions("authentication", ["forgotPassword"]),
        resetPassword() {
            this.forgotPassword(this.userName).then(response => {
                console.log(response)
                if (response != "Username not found") {
                    //parsedResponse = JSON.parse(response);
                    this.alertMessage("OTP!", response.OTP);
                    this.$router.push('verification');
                    localStorage.setItem("userName", this.userName);
                } else {
                    this.alertMessage("Error!", "User does not exist");

                }
            })
            //this.$router.push('verification');
        }
    }
};
</script>

<style scoped>
.page-style {
    height: 0px;
}

.logo {
    margin-top: 40px;
}

.parent-div {
    height: 100%;
}

.powered-by-img {
    height: 40px;
    width: 40px;
    margin-left: 5px;
}

.text-tag {
    font-size: 15px;
}
</style>
