import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from "./src/Home";
import { DetailScreen } from "./src/Detail";
import { ReducerHook } from "./src/reducer_hook/ReducerHook";
import CallbackHook from "./src/callback_hook/callback_hook";
import asyncexample from "./src/async_libary_usage/asyncexample_using_ref_and_set_state";
import asyncexampleUsingStorage from "./src/async_libary_usage/asyncexample_using_storage";

const Stack = createNativeStackNavigator()


function App(){
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="asyncExample_using_storage">
                <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'My Home Titl' }} initialParams={{ itemId: 42 }} />
                <Stack.Screen name="Details" component={DetailScreen} options={
                    ({ route }) => ({ title: route.params.name } )
                    } />
                <Stack.Screen name="ReducerExample" component={ReducerHook} />
                <Stack.Screen name="CallbackHooks" component={CallbackHook} />
                <Stack.Screen name="asyncExample" component={asyncexample} />
                <Stack.Screen name="asyncExample_using_storage" component={asyncexampleUsingStorage} />
            </Stack.Navigator>

        </NavigationContainer>
    )
}

export default App;
