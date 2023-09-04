import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function MainContent() {
  return (
    <SafeAreaView style={styles.viewContainer}>
      <Text style={styles.text}>Main Content Screen</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  text: {
    textAlign: 'center',
    fontSize: 25,
    fontStyle: 'normal',
    fontWeight: 'bold',
  },
});
