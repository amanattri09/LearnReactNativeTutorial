import React from 'react';
import InAppUpdateModal from './InAppUpdateModal';
import {
  AppContextProvider,
  useAppContextSubscriber,
} from './context/AppUpdateContext';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AppMainContent} from '.';

const MainScreenComponent = () => {
  const appContext = useAppContextSubscriber();
  return (
    <AppContextProvider value={appContext}>
      <InAppUpdateModal>
        <SafeAreaProvider>
          <AppMainContent />
        </SafeAreaProvider>
      </InAppUpdateModal>
    </AppContextProvider>
  );
};

export default MainScreenComponent;
