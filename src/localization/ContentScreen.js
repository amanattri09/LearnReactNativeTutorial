import { useFocusEffect } from "@react-navigation/native"
import React, { useEffect } from "react"
import { SafeAreaView, StyleSheet, Text, View } from "react-native"
import { exp } from "react-native-reanimated"
import StringsOfLanguages from "./StringsOfLanguages"


const ContentScreen = ({ route, navigation }) => {
    useEffect(() => {
        let heading = ''
        if (route.params.selectedLanguage == 'hi') {
            heading = 'Selected Language Hindi'
        } else if (route.params.selectedLanguage == 'en') {
            heading = 'Selected Language English'
        } else {
            heading = 'Selected Language English'
        }
        navigation.setOptions({ title: heading })
    }, [])
    return (<SafeAreaView style={styles.container}>
        <View style={styles.container}>
            <Text style={styles.text}>
                {StringsOfLanguages.first}
            </Text>
            <Text style={styles.text}>
                {StringsOfLanguages.second}
            </Text>
        </View>
    </SafeAreaView>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        padding: 10
    },
    text: {
        color: '#191919',
        fontSize: 25,
        marginTop: 15
    }
})

export default ContentScreen