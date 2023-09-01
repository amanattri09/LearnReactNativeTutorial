import React, {useEffect} from 'react';
import {Button, Modal, StyleSheet, Text, View} from 'react-native';
import {useAppContext} from './context/AppUpdateContext';

interface InAppModalProps {
  loadingComponent: JSX.Element;
}

export default function InAppUpdateModal(
  props: React.PropsWithChildren<InAppModalProps>,
) {
  const {handleGetMinimalAvailableVersion, loading} = useAppContext();

  useEffect(() => {
    const init = async () => {
      const version = await handleGetMinimalAvailableVersion();
      // setMinimumAvailableVersion(version);
    };
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (loading) {
    return (
      <Modal animationType="fade" transparent={true}>
        <View style={styles.container}>
          <Text>Bro !! you need to update your app</Text>
          <Button title="Ok Lets do this" />
        </View>
      </Modal>
    );
  } else {
    return props.children;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-end',
    padding: 16,
    rowGap: 16,
  },
});
