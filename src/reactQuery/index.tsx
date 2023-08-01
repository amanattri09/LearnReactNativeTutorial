import React, { useEffect } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import RNBootSplash from 'react-native-bootsplash';
import { QueryClientProvider } from "react-query";
import { QueryClient } from "react-query";
import usePosts from "./usePosts";

const queryClient = new QueryClient()

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
    )
}

function ChildComponent() {
    const { data, isLoading, isSuccess, error } = usePosts()
    const dummyArray = ["aaman", "attri"]
    return (
        <View>
            {
                dummyArray.map((item) => {
                    return <Text>item</Text>
                })
            }
        </View>
    )
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
        flexWrap: "wrap"
    }
})


export default ReactQuery
