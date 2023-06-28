import React from "react";
import { Image, SafeAreaView, Text } from "react-native";

export default showImage = () => {
    return <SafeAreaView><Text>
        hello world
    </Text>
    <Image source={require('../assets/images/ic_launcher.png')}>

    </Image>
    </SafeAreaView>
}