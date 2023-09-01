import {useState} from 'react';

export interface UseGetMinimumSupportVersionInterface {
  handleGetMinimalAvailableVersion: () => Promise<string>;
  loading: boolean;
}

export function useGetMinimumAvailableVersion(): UseGetMinimumSupportVersionInterface {
  const [loading, setLoading] = useState<boolean>(true);
  const handleGetMinimalAvailableVersion = (): Promise<string> => {
    return new Promise(res => {
      setTimeout(() => {
        setLoading(false);
        res('2.0.0');
      }, 2000);
    });
  };
  return {handleGetMinimalAvailableVersion, loading};
}
