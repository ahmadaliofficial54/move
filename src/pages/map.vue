<template>
<q-page class="move-app-color" style="min-height: 0px">
    <!-- <gmap-autocomplete @place_changed="setPlace" class="form-input"></gmap-autocomplete>
    <gmap-autocomplete @place_changed="setPlace" class="form-input"></gmap-autocomplete>
    <div>
      <GmapMap
  :center="{lat:10, lng:10}"
  :zoom="7"
  map-type-id="terrain"
  style="width: 500px; height: 300px"
>
  <GmapMarker
    :key="index"
    v-for="(m, index) in markers"
    :position="m.position"
    :clickable="true"
    :draggable="true"
    @click="center=m.position"
  />
</GmapMap>
    </div> -->
    <google-map />
</q-page>
</template>

<script>
// import notification from "../common/notificationsAndDialogues.js";
import {
    mapGetters,
    mapActions
} from "vuex";
import Vue from "vue";
import _ from "lodash";
import {
    mapState
} from "vuex";
import * as VueGoogleMaps from "vue2-google-maps";
import VueGoogleAutocomplete from "vue-google-autocomplete";
Vue.use(VueGoogleMaps, {
    load: {
        key: "AIzaSyCpvpN99dtV11spmU1VJrO2UPWtyY4XjXw",
        libraries: 'places',
    },
});
export default {
    // mixins: [notification],
    data() {
        return {
            from_address: {},
            to_address: {},
            map: null,
            originPlaceId: null,
            destinationPlaceId: null,
            directionsService: null,
            directionsRenderer: null,
        };
    },
    computed: {},
    components: {
        VueGoogleAutocomplete,
        "google-map": require("../components/GoogleMap.vue").default
    },
    mounted() {

    },
    methods: {
        // getFromAddress(from_address, placeResultData, id) {
        //   this.from_address = from_address;
        //   console.log(from_address);
        // },
        // getToAddress(to_address, placeResultData, id) {
        //   this.to_address = to_address;
        //   console.log(to_address);
        // },
        // handleError(error) {
        //   alert(error);
        // },
        // setPlace(event){
        //   console.log(event);
        // }
    }
};
</script>

<style scoped>

</style>
