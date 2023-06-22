import React, { useRef , useState} from "react";
import { Button, StyleSheet, Text, TextInput, View  } from "react-native";

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


export default AsyncScreen = () => {

    const [text ,setText] = useState("")
    const typedText = useRef('')

    function onTextChange(value){
        typedText.current=value
    }
    function onSubmit(value){
        setText(typedText.current)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Async Example</Text>
            <TextInput style={styles.textInput} placeholder="enter value" onChangeText={onTextChange}></TextInput>
            <Button title="Save value" onPress={onSubmit}></Button>
            <Text style={styles.displayText}>saved value is : {text}</Text>
        </View>
    )
}