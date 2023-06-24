import React, { Component } from "react";
import { Text, View } from "react-native";

 function HOC (HocCompoenent){
   return class extends Component{

        render(){
            return (
                <View>
                    <HocCompoenent></HocCompoenent>
                    <Text>Decorator</Text>
                </View>
            )
        }
   }
}

function HocComponent(){
    return (
        <Text>Orignal Component</Text>
    )
}

var Hoc_componentScreen = HOC(HocComponent)
export default Hoc_componentScreen

