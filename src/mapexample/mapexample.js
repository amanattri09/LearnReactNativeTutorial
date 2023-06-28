import React from "react";
import MapView from "react-native-maps";
import { StyleSheet, View } from "react-native";


export default MapScreen = () => {
    return (<View style={styles.container}>
        <MapView
            style={styles.map}
            //specify   our cordinates 
            initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            }}
        >
        </MapView>
    </View>)
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    map: {
        ...StyleSheet.absoluteFillObject
    }
})