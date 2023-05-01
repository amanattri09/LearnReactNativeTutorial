import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from "./src/Home";
import { DetailScreen } from "./src/Detail";
import { ReducerHook } from "./src/reducer_hook/ReducerHook";

const Stack = createNativeStackNavigator()


function App(){
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="ReducerExample">
                <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'My Home Titl' }} initialParams={{ itemId: 42 }} />
                <Stack.Screen name="Details" component={DetailScreen} options={
                    ({ route }) => ({ title: route.params.name } )
                    } />
                <Stack.Screen name="ReducerExample" component={ReducerHook} />
            </Stack.Navigator>

        </NavigationContainer>
    )
}

export default App;
