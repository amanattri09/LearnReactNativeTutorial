import React, {useEffect} from 'react';
import {
  Alert,
  Button,
  PermissionsAndroid,
  SafeAreaView,
  Text,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import messaging from '@react-native-firebase/messaging';

const FireStoreExample = () => {
  const checkToken = async () => {
    const fcmToken = await messaging().getToken();
    if (fcmToken) {
      console.log('fcm token is ' + fcmToken);
    }
  };

  function getData() {
    // asynCollectionFetch();
    requestPermission();
  }

  useEffect(() => {
    checkToken();
    //asynCollectionFetch();
    // requestPermission();
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });
    return unsubscribe;
  });

  const asynCollectionFetch = async () => {
    let snapshots = await firestore().collection('users').get();
    snapshots.forEach(element => {
      console.log('collection doc name is ' + element._data.name);
    });
  };

  const requestPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
        {
          title: 'FCM notification permission',
          message: 'We need notification permission ot',
          buttonNeutral: 'Ask  Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'Ok',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the notification permission now');
      } else {
        console.log('Notification permission permission denied');
      }
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <SafeAreaView>
      <Text>Hello world for firstore</Text>
      <Button
        title="Featch Data"
        onPress={() => {
          getData();
        }}
      />
    </SafeAreaView>
  );
};

export default FireStoreExample;
