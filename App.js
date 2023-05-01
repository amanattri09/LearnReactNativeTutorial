import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from "./src/Home";
import { DetailScreen } from "./src/Detail";
import { ReducerHook } from "./src/reducer_hook/ReducerHook";
import CallbackHook from "./src/callback_hook/callback_hook";

const Stack = createNativeStackNavigator()


function App(){
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="CallbackHooks">
                <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'My Home Titl' }} initialParams={{ itemId: 42 }} />
                <Stack.Screen name="Details" component={DetailScreen} options={
                    ({ route }) => ({ title: route.params.name } )
                    } />
                <Stack.Screen name="ReducerExample" component={ReducerHook} />
                <Stack.Screen name="CallbackHooks" component={CallbackHook} />
            </Stack.Navigator>

        </NavigationContainer>
    )
}

export default App;
