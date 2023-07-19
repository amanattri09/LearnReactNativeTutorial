import React, { useEffect } from "react";
import { Text } from "react-native";
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

    const { data, isLoading, isSuccess } = usePosts()
    if (isSuccess) {
        data.map((item) => {
            console.warn(item.title)
        })
    }
    return (
        <Text>
            Child component is
        </Text>
    )
}



export default ReactQuery