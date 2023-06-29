import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";

export default formScreen = () => {

    const [currency, setCurrency] = useState('Us Doller')

    return (<SafeAreaView style={styles.container}>
        <Text>Demo Form</Text>
        <View>
            <TextInput placeholder="Email"/>
            <TextInput
                secureTextEntry={true}
                placeholder="Password"
            >
            </TextInput>
            <Picker selectedValue={currency} onValueChange={(currentCurrency=>setCurrency(currentCurrency))}>
                    <Picker.Item label="USD" value="Us Doller"/>
                    <Picker.Item label="EUR" value="Euro"/>
                    <Picker.Item label="NGN" value="Naira"/>
            </Picker>

            <Text>Selected {currency}</Text>

        </View>
    </SafeAreaView>)
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        padding : 24
    }
})

