import React, { useDeferredValue, useReducer } from "react";
import { Button, Text, View } from "react-native";

const intialTodos = [
    {
        id: 1,
        title: 'Todo 1',
        complete: false
    },
    {
        id: 2,
        title: 'Todo 2',
        complete: false
    }
]

const reducer = (state, action) => {
    switch (action.type) {
        case 'COMPLETE':
            return state.map((todo) => {
                if (todo.id == action.id) {
                    return { ...todo, complete: !todo.complete , title : "Button got pressed"};
                } else {
                    return todo;
                }
            });
        default:
            return state

    }
}

function Todos() {
    const [todos, dispatch] = useReducer(reducer, intialTodos)

    const handleComplete = (todo) => {
        dispatch({ type: "COMPLETE", id: todo.id });
    };

    return (
        <>
            {todos.map((todo) => (
                <View>
                    <Text>{todo.title}</Text>
                    <Button title="click here" onPress={() => handleComplete(todo)}></Button>
                </View>
            ))}
        </>
    );

}

export const ReducerHook = () => {
    return (<Todos></Todos>)
}




