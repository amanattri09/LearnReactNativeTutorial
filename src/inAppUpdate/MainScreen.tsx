import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import InAppUpdateModal from './InAppUpdateModal';
import {
  AppContextProvider,
  useAppContextSubscriber,
} from './context/AppUpdateContext';

const MainScreenComponent = () => {
  const appContext = useAppContextSubscriber();
  const LoadingComponent = <Text>My Splash Screen Loading </Text>;
  return (
    <SafeAreaView>
      <AppContextProvider value={appContext}>
        <InAppUpdateModal loadingComponent={LoadingComponent}>
          <Text>My Super App</Text>
        </InAppUpdateModal>
      </AppContextProvider>
    </SafeAreaView>
  );
};

export default MainScreenComponent;
