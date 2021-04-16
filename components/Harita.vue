<template>
        <GMap
          ref="gMap"
          language="tr"
          :cluster="{options: {styles: clusterStyle}}"
          :center="{lat: locations[0].lat, lng: locations[0].lng}"
          :options="{fullscreenControl: false, styles: mapStyle}"
          :zoom="15"
        >
          <GMapMarker
            v-for="location in locations"
            :key="location.id"
            :position="{lat: location.lat, lng: location.lng}"
            :options="{icon: location === currentLocation ? pins.selected : pins.notSelected}"
            @click="currentLocation = location"
          >
          </GMapMarker>
          <GMapCircle :options="circleOptions"/>
        </GMap>
</template>

<script>
export default {
    data(){
        return {
            currentLocation: {},
            circleOptions: {},
            locations: [ 
            {
                lat: 41.02360430603689,
                lng: 29.078303905523818
            },
            ],
            pins: {
            selected: require(`~/assets/img/marker.png`),
            notSelected: require(`~/assets/img/marker.png`)
            },
            mapStyle:
        [
            {
                "featureType": "water",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#b5cbe4"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "stylers": [
                    {
                        "color": "#efefef"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#83a5b0"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#bdcdd3"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e3eed3"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "lightness": 33
                    }
                ]
            },
            {
                "featureType": "road"
            },
            {
                "featureType": "poi.park",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {},
            {
                "featureType": "road",
                "stylers": [
                    {
                        "lightness": 20
                    }
                ]
            }
        ]
            ,
            clusterStyle: [
            {
                url: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m1.png",
                width: 56,
                height: 56,
                textColor: "#fff"
            }
            ]
      
        }
    }
}
</script>

<style>

</style>