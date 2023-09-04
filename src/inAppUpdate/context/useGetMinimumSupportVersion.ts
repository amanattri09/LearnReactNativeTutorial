import {useState} from 'react';

export type typeUpdate = {
  hasNewUpdate: boolean;
  isForceUpate: boolean;
};

export interface UseGetMinimumSupportVersionInterface {
  handleGetMinimalAvailableVersion: () => Promise<typeUpdate>;
  loading: boolean;
}

export function useGetMinimumAvailableVersion(): UseGetMinimumSupportVersionInterface {
  const [loading, setLoading] = useState<boolean>(true);
  const handleGetMinimalAvailableVersion = async (): Promise<typeUpdate> => {
    return new Promise(res => {
      setTimeout(() => {
        setLoading(false);
        //check the version code from server here and return the required values
        res({hasNewUpdate: false, isForceUpate: false});
      }, 3000);
    });
  };
  return {handleGetMinimalAvailableVersion, loading};
}
