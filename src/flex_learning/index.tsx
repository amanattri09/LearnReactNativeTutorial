import {PropsWithChildren, useState} from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

export default function FlexLearning() {
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <View style={styles.box}></View>
      </View>
      <View style={styles.box1}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'stretch',
  },
  label: {
    textAlign: 'center',
    fontSize: 24,
    marginBottom: 10,
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: 'oldlace',
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '48%',
    textAlign: 'center',
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: 'coral',
  },
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: 'blue',
    flexDirection: 'column',
  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
    margin: 2,
  },
  box1: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
    margin: 2,
  },
  selected: {
    backgroundColor: 'coral',
    borderWidth: 0,
  },
  selectedLabel: {
    color: 'white',
  },
});
