import React from "react";
import { Button, Text, View } from "react-native";


export default Todos = ({ todos, addToDo }) => {
    console.log('child reder')
    return (
        <>
            {todos.map((todo, index) => {
                return <View key={index}>
                    <Text>{todo}</Text>
                </View>
            })}
            <Button title="Add Todo" onPress={() => addToDo()}></Button>
        </>
    )
}