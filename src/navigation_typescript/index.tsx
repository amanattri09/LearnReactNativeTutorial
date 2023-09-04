import React, {useEffect, useRef, useState} from 'react';
import {AppState, Button, Text, View} from 'react-native';
import {
  NavigationContainer,
  RouteProp,
  useIsFocused,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import usestate from '../usestate';

export type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
  Settings: {userId: number};
};

type ProfileProps = NativeStackNavigationProp<RootStackParamList, 'Profile'>;

type SettingsProps = NativeStackNavigationProp<RootStackParamList, 'Settings'>;

const MyStack = createNativeStackNavigator<RootStackParamList>();

export default function NavigationTypeScript() {
  return (
    <NavigationContainer>
      <MyStack.Navigator initialRouteName="Profile">
        <MyStack.Screen name="Home" component={HomeScreen} />
        <MyStack.Screen name="Profile" component={ProfileScreen} />
        <MyStack.Screen name="Settings" component={SettingScreen} />
      </MyStack.Navigator>
    </NavigationContainer>
  );
}

function ProfileScreen() {
  const appState = useRef(AppState.currentState);
  const navigation = useNavigation<ProfileProps>();
  const [appStateVisible, setAppStateVisible] = useState(appState.current);

  useEffect(() => {
    console.log('use effect worked ');

    const subscription = AppState.addEventListener('change', nextAppState => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        console.log('App has come to the foreground!');
      }

      appState.current = nextAppState;
      setAppStateVisible(appState.current);
      console.log('AppState', appState.current);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <View>
      <Text>Profile screen {appStateVisible}</Text>
      <Button
        title="Navigate To Setting screen "
        onPress={() => navigation.navigate('Settings', {userId: 123})}
      />
    </View>
  );
}

function HomeScreen() {
  return <Text>Home Screeen</Text>;
}

function SettingScreen() {
  const route = useRoute<RouteProp<RootStackParamList>>();
  return <Text>Setting Screen{route.params?.userId}</Text>;
}
