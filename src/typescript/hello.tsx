
import React from "react";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";


export type Props = {
    name: string;
    baseEnthusiasmLevel?: number;
  };

const Hello: React.FC<Props> = ({
    name = 'aman attri',
    baseEnthusiasmLevel = 0
}) => {

    const [enthusiasmLevel, setEnthusiasmLevel] = React.useState(
        baseEnthusiasmLevel,
      );

    const getExclamationMarks = (numChars: number) =>
    numChars > 0 ? Array(numChars + 1).join('!') : '';

    const onIncrement = () => setEnthusiasmLevel(enthusiasmLevel + 1)

    const onDecrement = () => setEnthusiasmLevel(enthusiasmLevel > 0 ? enthusiasmLevel - 1 : 0)

    return (<SafeAreaView>
        <View >
            <Text style={styles.greeting}>Hello {name} {getExclamationMarks(enthusiasmLevel)}</Text>
        </View>

        <View>
            <Button title="Increase Enthusiasm" accessibilityLabel="Increment" onPress={onIncrement} color='blue' />
            <Button title="Decrease Enthusiasm" accessibilityLabel="Decrement" onPress={onDecrement} color='red' />
        </View>
    </SafeAreaView>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    greeting: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 16
    }
})

export default Hello    