import React, { useEffect } from "react";
import { Linking, Text, View } from "react-native";

const Router = () => {

  useEffect(() => {
    console.log("use effect got called")
    Linking.getInitialURL().then((url) => {
      console.log('AppLink=>>>', url);
    }).catch(err => console.error('An error occurred', err));
  })


  return (
    <View><Text>
      router screen
    </Text></View>
  );
}
export default Router