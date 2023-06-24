import React, { useEffect, useRef } from "react";
import { Text, View , Animated } from "react-native";

const FadeInView = (props) => {
    const fadeAnim = useRef(new Animated.Value(0)).current
    useEffect(()=>{
        setTimeout(() => {
            Animated.timing(fadeAnim,{
                toValue : 1,
                duration : 10000,
                useNativeDriver:true
            }).start();
        }, 5000);
    },[fadeAnim])
    console.log("fade in view is being animated")
    return(
        <Animated.View style={{...props.style,opacity:fadeAnim}}>
            {props.children}
        </Animated.View>
    )

}

export default animDefault = () => {    
    return (
        <View style ={{
            flex : 1,
            alignItems : 'center',
            justifyContent : 'center'
        }}>
            <FadeInView style={{width : 250, height:50 , backgroundColor : "powderblue"}}>
                <Text style={{fontSize:28 , textAlign : 'center' , margin : 10}}>
                    Fading In 
                </Text>
            </FadeInView>

        </View>
    )
}