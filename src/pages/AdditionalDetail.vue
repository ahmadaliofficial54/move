<template>
<q-page class="move-app-color">

    <q-card class="q-ma-sm q-mt-md q-pa-xs text-center heading">Additional Detail:</q-card>
    <div class="column q-pa-md">
        <span class="q-pb-sm text-tag">Pickup Location</span>
        <q-input dense outlined color="green-9" v-model="name" placeholder="Location" lazy-rules :rules="[(val) => (val && val.length > 0) || 'Please enter your name']">
            <template v-slot:prepend>
                <q-icon name="las la-map-marker" />
            </template>
        </q-input>

        <q-input dense outlined color="green-9" v-model="userName" placeholder="Pickup Person Name" lazy-rules :rules="[(val) => (val && val.length > 0) || 'Please enter user name']">
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
    </div>
    <div class="column q-pa-md">
        <span class="q-pb-sm text-tag">Drop off Location</span>
        <q-input dense outlined color="green-9" v-model="name" placeholder="Location" lazy-rules :rules="[(val) => (val && val.length > 0) || 'Please enter your name']">
            <template v-slot:prepend>
                <q-icon name="las la-map-marker" />
            </template>
        </q-input>

        <q-input dense outlined color="green-9" v-model="userName" placeholder="Drop off Person Name" lazy-rules :rules="[(val) => (val && val.length > 0) || 'Please enter user name']">
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
    </div>
    <q-footer style="background-color: white" class="q-pa-sm">
        <div class="column">
            <q-btn label="Continue" @click="bookVehicle" color="move-brand-blue" />
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
        bookVehicle() {
            this.alertMessage("Success!", "You booked this vehicle successfully.");
            this.$router.push({
                path: "/myBookings",
            });
        },

    },
};
</script>

<style scoped>
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
