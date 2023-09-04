import React, {useEffect, useRef, useState} from 'react';
import {
  AppState,
  AppStateStatus,
  Button,
  Modal,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useAppContext} from './context/AppUpdateContext';
import {typeUpdate} from './context/useGetMinimumSupportVersion';

interface InAppModalProps {
  loadingComponent?: React.FC;
}

export default function InAppUpdateModal(
  props: React.PropsWithChildren<InAppModalProps>,
) {
  const {handleGetMinimalAvailableVersion} = useAppContext();
  const [hasNewUpdateAvailable, setHasNewUpdateAvailable] =
    useState<typeUpdate>({hasNewUpdate: true, isForceUpate: true});
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);

  useEffect(() => {
    console.log('use effect ran for app update check');
    const init = async () => {
      const result = await handleGetMinimalAvailableVersion();
      setHasNewUpdateAvailable(result);
    };
    init();
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appStateVisible]);
  return (
    <>
      {props.children}
      <Modal
        visible={hasNewUpdateAvailable.hasNewUpdate}
        animationType="fade"
        transparent={true}>
        <View style={styles.container}>
          <Text>Bro !! you need to update your app</Text>
          <Button title="Ok Lets do this" />
        </View>
      </Modal>
    </>
  );
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
