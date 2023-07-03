import { createContext } from "react";
import React from "react";
import { useState } from "react";
import { Alert, Button, SafeAreaView, Text, TouchableHighlight, View , StyleSheet} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";


const userContext = createContext()


export default CompoundComponentScreen = () => {

    const [name, setName] = useState('')

    function onButtonPress() {
        Alert.alert("hey how are you")
    }

    return (<SafeAreaView>
        <Text style={{ marginTop: 20 }}>Copound component</Text>
        <TouchableHighlight style={{ marginTop: 20 }} onPress={onButtonPress}>
            <View style={styles.button}>
            <Text>Press me</Text>
            </View>
        </TouchableHighlight>
    </SafeAreaView>)

}




const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 10,
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10,
    },
    countContainer: {
      alignItems: 'center',
      padding: 10,
    },
    countText: {
      color: '#FF00FF',
    },
  });
  