import { useDrawerStatus } from "@react-navigation/drawer";
import React, { useState } from "react";
import { View ,Text, Button } from "react-native";
import Todos from "./Todos";


const CallbackHook = () => {

    const [count , setCount] = useState(0)
    const [todos , setTodos] = useState([])

    const increment  = () => {
        setCount((c)=> c+1)
    }

    const addToDo = () =>{ 
        setTodos((t)=>[...t,"New Todo"])
    }

    return (
        <>
        <Todos todos={todos} addToDo={addToDo}/>
        {/* <Text>{count}</Text>
        <Button title="Click Me" onPress={()=>increment()}></Button> */}
        </>
    )   
}

export default CallbackHook;