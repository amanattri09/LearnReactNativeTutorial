import React, { useEffect } from "react";
import { Text } from "react-native";
import RNBootSplash from 'react-native-bootsplash';

export default bootSplash = () => {

    useEffect(() => {
        setTimeout(() => {
            RNBootSplash.hide({ fade: true })
        }, 3000);
    }, [])

    return <Text>Boot splash screen</Text>
}