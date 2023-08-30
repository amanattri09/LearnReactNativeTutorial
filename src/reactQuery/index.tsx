import React, {useEffect} from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import {QueryClientProvider} from 'react-query';
import {QueryClient} from 'react-query';
import {useAddPost, usePosts} from './usePosts';

const queryClient = new QueryClient();

const ReactQuery = () => {
  // useEffect(() => {
  //     setTimeout(() => {
  //         RNBootSplash.hide({ fade: true })
  //     }, 3000);
  // }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <ChildComponent />
    </QueryClientProvider>
  );
};

function ChildComponent() {
  //const {data, isLoading, isSuccess, error} = usePosts();
  const {isLoading, error, isError, data, mutate, mutateAsync} = useAddPost();
  const dummyArray = ['aaman', 'attri'];

  function addPost1() {
    mutate({post: 'test post'});
  }

  console.log('is loading is ' + JSON.stringify(data));

  return (
    <View>
      <Button
        onPress={() => {
          addPost1();
        }}
        title="Click me"
      />
      {dummyArray.map(item => {
        return <Text>item</Text>;
      })}
    </View>
  );
  // return (
  //     <SafeAreaView>
  //         {isLoading && <Text>Loading ......</Text>}
  //         {isSuccess && (data.map((item, index) => {
  //                   return <Text key={index} style={styles.item}>{item.title}</Text>
  //         }))}
  //         {error && <Text>Something went wrong</Text>}
  //     </SafeAreaView>
  // )
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    flexWrap: 'wrap',
  },
});

export default ReactQuery;
