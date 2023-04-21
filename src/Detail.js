import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Styles = StyleSheet.create(
    {
        title: {
            textAlign: 'center'
        },
        container : {
            flex : 1,
            alignItems :  'center',
            justifyContent : 'center'
        }
    }
)

export const DetailScreen =  ({route,navigation}) => {
    const {itemId,otherParam} = route.params
    return (
        <View style = {Styles.container}>
            <Text style={Styles.title}>Detail Screen</Text>
            <Text> Item id : {JSON.stringify(itemId)}</Text>
            <Text> OtherParam : {JSON.stringify(otherParam)}</Text>
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    )
} 