import React, {useEffect} from 'react';
import {Text} from 'react-native';

const fetchUsers = async () => {
  setTimeout(() => {
    console.warn('hello how are you aman attri ');
  }, 10000);
};

export default function AsyncAwaitExample() {
  useEffect(() => {
    (async () => {
      const user = await fetchUsers();
      console.warn(user);
    })();
  }, []);

  return <Text>Async Await example</Text>;
}
