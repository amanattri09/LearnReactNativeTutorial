import {Modal, Pressable, StyleSheet, Text, View} from 'react-native';

export default function ModelExample() {
  return (
    <Modal>
      <View style={styles.centeredView}>
        <View style={styles.modalView}></View>
        <View style={styles.modalView}></View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  modalView: {
    width: '50%',
    height: '50%',
    backgroundColor: 'black',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
