import React, { useEffect, useState } from "react";
import { PermissionsAndroid, Platform, SafeAreaView, Text } from "react-native";
import Geolocation from "@react-native-community/geolocation";
import { current } from "@reduxjs/toolkit";


export default featchLocation = () => {

    const [currentLongitude, setCurrentLongitue] = useState('')
    const [currentLatitude, setCurrentLatitude] = useState('')
    const [locationStatus, setLocationStatus] = useState('')

    useEffect(() => {
        const requestLocationPermission = async () => {
            if (Platform.OS == 'ios') {
                getOneTimeLocation();
                subscribeLocationLocation()
            } else {
                try {
                    const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                        {
                            title: 'Location Access Required',
                            message: 'This App needs to Access your location',
                        })
                    if (granted == PermissionsAndroid.RESULTS.GRANTED) {
                        //To check if permission is granted 
                        getOneTimeLocation()
                        subscribeLocationLocation()
                    }
                } catch (error) {
                    console.warn(error)
                }
            }
        }
        requestLocationPermission()
        return () => {
            // Geolocation.clearWatch(wa)
        }
    }, [])

    function getOneTimeLocation() {
        setLocationStatus('Getting location')
        Geolocation.getCurrentPosition((position) => {
            setLocationStatus('You are here')
            const currentLatitude = JSON.stringify(position.coords.latitude)
            const currentLongitude = JSON.stringify(position.coords.longitude)
            setCurrentLatitude(currentLatitude)
            setCurrentLongitue(currentLongitude)
        }, (error) => {
            setLocationStatus(error.message)
        }, {
            enableHighAccuracy: false,
            timeout: 10000,
            maximumAge: 1000
        })
    }

    function subscribeLocationLocation() {
        console.log("subscribe location location")
    }

    return (<SafeAreaView>
        <Text>
            {locationStatus}
        </Text>
        <Text>
            current Latitude :{currentLatitude} & longitude : {currentLongitude}
        </Text>
    </SafeAreaView>)
}
