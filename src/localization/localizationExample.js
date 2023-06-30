import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from "react-navigation";
import { Text } from "react-native";
import { Screen } from "react-native-screens";
import ContentScreen from "./ContentScreen";
import LanguageSelection from "./LanguageSelection";

const Stack = createNativeStackNavigator();

export default App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="LanguageSelectionScreen">
                <Stack.Screen name="LanguageSelectionScreen" component={LanguageSelection} options={{headerShown : false}}></Stack.Screen>
                <Stack.Screen name="ContentScreen" component={ContentScreen} options={{title : 'Content Screen'}}>
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}