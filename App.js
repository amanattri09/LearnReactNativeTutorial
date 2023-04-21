import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from "./src/Home";
import { DetailScreen } from "./src/Detail";


const Stack = createNativeStackNavigator()


function App(){
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Overview' }} initialParams={{ itemId: 42 }} />
                <Stack.Screen name="Details" component={DetailScreen}/>
            </Stack.Navigator>

        </NavigationContainer>
    )
}

export default App;
