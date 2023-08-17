import { StyleSheet, Text, TextInput, TextProps } from "react-native"

import { TextInputProps as BaseTextProps} from "react-native"

interface MyTextProps<T> {
    dummyText : string,
    dummy2 : T
}

function CustomInputText<T>({dummyText,dummy2,...restProps}:MyTextProps<T>) {
    console.warn("custom text is "+dummy2)
    return <TextInput {...restProps} />
}


export default function GenricExample() {
    return (<CustomInputText   dummyText="just testing" style={styles.input} customText={"hello"} dummy2={"Aman Attri"} />)
}

const styles = StyleSheet.create({
    input: {
        height: 100,
        backgroundColor: 'red',
        alignSelf: "flex-start"
    },
    text: {
        backgroundColor: "red",
        alignSelf: "flex-start",
        textAlign: 'center'

    }
})