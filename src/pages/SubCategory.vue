<template>
<q-page class="move-app-color" style="min-height: 0px">

    <q-input class="q-mx-sm q-mt-md search-field shadow-3 q-pl-sm" dense borderless label="Search Vehicle" />

    <q-card class="q-ma-sm q-mt-md q-pa-xs text-center heading">Select Vehicle:</q-card>
    <div class="q-mt-md row">
        <div v-for="(data, index) in dashboardList" :key="index" class="col-12 q-pl-sm q-pr-sm" @click="changesState(data.link)">
            <div class="row q-mb-md q-pa-sm menu-div ">
                <img class="img" :src="data.src">
                <div class="q-px-md">
                    <div class="text-grey heading"> {{data.value}}</div>
                    <div class=" heading">PKR 24,000</div>
                    <div class="text-grey weight-div">
                        Weight 600kg | PKR 1,000/KM
                    </div>
                </div>
            </div>
        </div>
    </div>
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
        return {
            dashboardList: [{
                    src: require('../statics/logos/car.png'),
                    value: "Suzuki",
                    link: "/vehicleDetail"
                },
                {
                    src: require('../statics/logos/car.png'),
                    value: "Suzuki",
                    link: "/vehicleDetail"
                },
                {
                    src: require('../statics/logos/car.png'),
                    value: "Suzuki",
                    link: "/vehicleDetail"
                },
                {
                    src: require('../statics/logos/car.png'),
                    value: "Toyota",
                    link: "/vehicleDetail"
                },
                {
                    src: require('../statics/logos/car.png'),
                    value: "Toyota",
                    link: "/vehicleDetail"
                },
                {
                    src: require('../statics/logos/car.png'),
                    value: "Mazda",
                    link: "/vehicleDetail"
                },
                {
                    src: require('../statics/logos/car.png'),
                    value: "Mazda",
                    link: "/vehicleDetail"
                }
            ],

        };
    },
    computed: {
        ...mapGetters("authentication", ["getLoginResponse"])
    },
    methods: {
        ...mapActions("authentication", ["loginUser"]),
        changesState(link) {
            this.$router.push(link);
        }
    }
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

.menu-div {
    border-radius: 6px;
    border: 1px solid grey;
}

.img {
    height: 70px;
    width: 80px;
}

.weight-div {
    font-size: 13px;
}
</style>
