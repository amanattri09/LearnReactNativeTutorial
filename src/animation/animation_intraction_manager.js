import React, { useEffect, useState } from "react";
import { Animated, InteractionManager, Text, View , Alert , StyleSheet} from "react-native";

const useFadeIn = (duration = 10000) => {
    const [opacity] = useState(new Animated.Value(0))
    useEffect(()=>{
        Animated.timing(opacity,{
            toValue : 1,
            duration,
            useNativeDriver : true
        }).start()
    },[duration,opacity])
}

const Ball = ({onShown}) => {
    const opacity = useFadeIn()
    useEffect(()=>{
        
        const interactionPromise = InteractionManager.runAfterInteractions(()=>{
            onShown()
        })
        return ()=> interactionPromise.cancel()
    },[onShown])
   return <Animated.View style={[styles.ball , {opacity}]}></Animated.View>
}

const animationIntractionManager=()=>{
    return (
        <View style={styles.container}>
            <Ball onShown={()=>Alert.alert('Animation is done')}></Ball>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    ball: {
      width: 100,  
      height: 100,
      backgroundColor: 'salmon',
      borderRadius: 100,
    },
  });

  export default animationIntractionManager