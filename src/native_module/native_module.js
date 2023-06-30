import React from "react";
import { Alert, Button, SafeAreaView, Text , NativeModules} from "react-native";


export default NativeModuleScreen = () => {

    const {CalendarModule} = NativeModules;

    function onButtonPress() {
        CalendarModule.createCallenderEvent('testName', 'testLocation',(id)=>{
            Alert.alert("callender id is "+id)    
        });
    }

    return (
        <SafeAreaView>
            <Text>Native module example</Text>
            <Button title="Press Me" onPress={() => {
                onButtonPress()
            }}>
            </Button>
        </SafeAreaView>
    )
}