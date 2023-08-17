import React from 'react';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {Button, Text, View} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';

export type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
  Settings: {userId: number};
};

type ProfileProps = NativeStackScreenProps<RootStackParamList, 'Profile'>;

type SettingsProps = NativeStackScreenProps<RootStackParamList, 'Settings'>;

const MyStack = createNativeStackNavigator<RootStackParamList>();

export default function NavigationTypeScript() {
  return (
    <NavigationContainer>
      <MyStack.Navigator initialRouteName="Profile">
        <MyStack.Screen name="Home" component={() => <HomeScreen />} />
        <MyStack.Screen name="Profile" component={() => <ProfileScreen />} />
        <MyStack.Screen name="Settings" component={() => <SettingScreen />} />
      </MyStack.Navigator>
    </NavigationContainer>
  );
}

function ProfileScreen() {
  const navigation = useNavigation<ProfileProps>();
  if (navigation === undefined) {
    console.warn('navigation is undefined');
  } else {
    console.warn('navigation is not undefined');
  }
  return (
    <View>
      <Text>Profile screen </Text>
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

function SettingScreen({route, navigation}: SettingsProps) {
  return <Text>Setting Screen</Text>;
}
