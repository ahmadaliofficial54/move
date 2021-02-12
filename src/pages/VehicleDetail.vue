<template>
<q-page class="move-app-color" style="min-height: 0px">
    <q-card class="q-ma-sm q-mt-md q-pa-xs text-center heading">Vehicle Detail:</q-card>
    <div class="text-center">
        <img class="img" src="../statics/logos/car.png" />
    </div>
    <div class="row q-pb-sm">
        <div class="q-px-md">
            <div class="text-grey heading">Suzuki - Pickup</div>
            <div class="heading">PKR 24,000</div>
            <div class="text-grey weight-div">Weight 600kg | PKR 1,000/KM</div>
        </div>
    </div>
    <div class="q-px-md">
        <q-separator />
    </div>
    <div class="q-pt-sm q-px-md">
        <div class="heading">Details:</div>
        <div class="text-grey weight-div">
            Sample text Sample text Sample text Sample text Sample text
            Sample text Sample text
            Sample text Sample text Sample text Sample text Sample text Sample text
            Sample text Sample text Sample text Sample text Sample text Sample text
            Sample text Sample text Sample text
            Sample text Sample text Sample text
        </div>
    </div>
    <q-card class="q-ma-sm q-mt-md q-pa-xs heading">Vehicle Information:</q-card>
    <div>
        <div class="row justify-between q-pa-sm">
            <div class="row">
                <q-icon size="20px" name="las la-calendar" class="q-pr-xs" />
                <div>Model-Year
                    <div class="model-div text-grey">2017</div>
                </div>
            </div>
            <div class="row q-pr-xs">
                <q-icon size="20px" name="las la-weight" class="q-pr-xs" />
                <div>Max. Load Capacity
                    <div class="model-div text-grey">600 KG</div>
                </div>
            </div>
        </div>
    </div>
    <q-footer class="move-app-color text-center q-px-sm q-pb-md">
        <div class="row">
            <q-btn to="/map" dense class="q-mt-sm col-12" label="Book It" color="move-brand-blue" />
        </div>
    </q-footer>
</q-page>
</template>

<script>
// import notification from "../common/notificationsAndDialogues.js";
import {
    mapGetters,
    mapActions
} from "vuex";
export default {
    // mixins: [notification],
    data() {
        return {};
    },
    computed: {
        ...mapGetters("authentication", ["getLoginResponse"]),
    },
    methods: {
        ...mapActions("authentication", ["loginUser"]),
        changesState(link) {
            this.$router.push(link);
        },
    },
};
</script>

<style scoped>
.search-field {
    border-radius: 6px;
}

.heading {
    font-weight: 500;
    font-size: 15px;
}

.img {
    height: 130px;
    width: 200px;
}

.weight-div {
    font-size: 12px;
}

.model-div {
    font-size: 12px;
}
</style>
