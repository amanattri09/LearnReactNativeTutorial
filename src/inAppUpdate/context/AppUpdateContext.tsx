import {createContext, useContext} from 'react';
import {
  UseGetMinimumSupportVersionInterface,
  useGetMinimumAvailableVersion,
} from './useGetMinimumSupportVersion';

export type AppContextLoaded = UseGetMinimumSupportVersionInterface;

// create context
const AppContext = createContext<UseGetMinimumSupportVersionInterface | null>(
  null,
);
// create provider
export const AppContextProvider = AppContext.Provider;

export function useAppContext(): AppContextLoaded {
  return useContext(AppContext)!;
}

// Export app intializer
export function useAppContextSubscriber(): AppContextLoaded {
  const {handleGetMinimalAvailableVersion, loading} =
    useGetMinimumAvailableVersion();
  return {handleGetMinimalAvailableVersion, loading};
}
