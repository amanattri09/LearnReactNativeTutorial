import {useFocusEffect} from '@react-navigation/native';
import React, {useEffect, useRef} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

const FadeInView = props => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true,
      }).start();
    }, 5000);
  }, [fadeAnim]);
  return (
    <Animated.View style={{...props.style, opacity: fadeAnim}}>
      {props.children}
    </Animated.View>
  );
};

export default AnimDefaultScreen = () => {
  const offset = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateX: offset.value}],
    };
  });

  return (
    <>
      <Animated.View style={[styles.box, animatedStyles]} />
      <View style={{marginTop: 100}}>
        <Button
          onPress={() => (offset.value = Math.random() * 255)}
          title="Move"
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
});
