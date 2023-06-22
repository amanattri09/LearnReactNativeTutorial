import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useRef , useState} from "react";
import { Button, SafeAreaViewComponent, StyleSheet, Text, TextInput, View  } from "react-native";

const styles = StyleSheet.create({
    container: {
        margin: 16,
        flex : 1
    },
    displayText: {
        marginTop: 20,
        textAlign : 'center'
    },
    title : {
        textAlign : 'center',
        fontWeight : "bold",
        fontSize : 25
    },
    textInput: {
        marginTop : 20
    }
})


export default AsyncScreenUsingStorage = () => {

    const [text ,setText] = useState("")
    const typedText = useRef('')

    function onTextChange(value){
        typedText.current=value
    }
    const onSubmit = async () => {
        try{
            await AsyncStorage.setItem("value",JSON.stringify(typedText.current))
            var value = await AsyncStorage.getItem("value")
            console.log("Got the value : "+value)
            setText(value)
        }catch(error){
            console.log(error)
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Async Example Using Storage</Text>
            <TextInput style={styles.textInput} placeholder="enter value" onChangeText={onTextChange}></TextInput>
            <Button title="Save value" onPress={onSubmit}></Button>
            <Text style={styles.displayText}>saved value is : {text}</Text>
        </View>
    )
}