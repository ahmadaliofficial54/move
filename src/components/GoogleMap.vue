<template>
<div>
    <div class="fields column">
        <gmap-autocomplete placeholder="Enter Location" @place_changed="setCurrent"></gmap-autocomplete>
        <gmap-autocomplete placeholder="Enter Destination" class="q-mt-md" @place_changed="setDestination"></gmap-autocomplete>
        <q-btn dense class="q-mt-md" label="Continue" to="/additionalDetail" color="move-brand-blue" />
    </div>

    <gmap-map ref="map" :center="center" :zoom="12" class="map">
        <gmap-marker :position="this.coords"></gmap-marker>
        <gmap-marker :position="this.destination"></gmap-marker>
    </gmap-map>
</div>
</template>

<script>
export default {
    name: "GoogleMap",
    data() {
        return {
            // default to Montreal to keep it simple
            // change this to whatever makes sense
            center: {
                lat: 45.508,
                lng: -73.587
            },
            markers: [],
            places: [],
            currentPlace: null,
            coords: {
                lat: -7.824374,
                lng: 110.262371,
            },
            destination: {
                lat: -7.925665,
                lng: 110.298115,
            },
        };
    },

    created() {
        this.geolocate();
    },

    methods: {
        // receives a place object via the autocomplete component
        setCurrent(place) {
            this.coords = this.addMarker(place);
        },
        setDestination(place) {
            this.destination = this.addMarker(place);
            this.getDirection();
        },
        addMarker(place) {
            const marker = {
                lat: place.geometry.location.lat(),
                lng: place.geometry.location.lng(),
            };
            // this.markers.push({ position: marker });
            // this.places.push(this.currentPlace);
            // this.center = marker;
            // this.currentPlace = null;
            return marker;
        },
        geolocate() {
            navigator.geolocation.getCurrentPosition((position) => {
                this.center = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };
                // this.markers.push({ position: this.center });
                this.coords = this.center;
            });
        },
        getDirection: function () {
            var directionsService = new google.maps.DirectionsService();
            var directionsDisplay = new google.maps.DirectionsRenderer();
            directionsDisplay.setMap(this.$refs.map.$mapObject);

            //google maps API's direction service
            function calculateAndDisplayRoute(
                directionsService,
                directionsDisplay,
                start,
                destination
            ) {
                directionsService.route({
                        origin: start,
                        destination: destination,
                        travelMode: "DRIVING",
                    },
                    function (response, status) {
                        if (status === "OK") {
                            directionsDisplay.setDirections(response);
                        } else {
                            window.alert("Directions request failed due to " + status);
                        }
                    }
                );
            }
            calculateAndDisplayRoute(
                directionsService,
                directionsDisplay,
                this.coords,
                this.destination
            );
        },
    },
};
</script>

<style scoped>
.map {
    width: 100wh;
    height: 92vh;
}

.fields {
    position: absolute;
    left: 10px;
    top: 60px;
    z-index: 1;
    padding: 10px;
    border-radius: 7px;
    background-color: black;
}
</style>
