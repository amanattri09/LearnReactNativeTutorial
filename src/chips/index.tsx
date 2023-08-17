import React from 'react';
import {Modal, StyleSheet, Text, View} from 'react-native';

export default function Chip() {
  return <ChipModal />;
}

function ChipModal() {
  const reasons = [{reason: 'first reason'}, {reason: 'second reason'}];
  return (
    <Modal>
      <View style={styles.chipContainer}>
        {reasons.map((item, index) => {
          return (
            <Text key={index} style={styles.chip}>
              {item.reason}
            </Text>
          );
        })}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  chip: {
    backgroundColor: 'blue',
  },
  chipContainer: {
    flex: 1,
    backgroundColor: 'Red',
    alignItems :"flex-start"
  },
});
