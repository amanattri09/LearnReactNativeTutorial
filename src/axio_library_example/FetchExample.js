import React, { useEffect } from "react";
import { useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import axios from "axios";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 16
    },
    item: {
        padding: 10
    }
})

export default FetchExampleScreen = () => {

    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(false)

    function waitforme(millisec) {
        return new Promise(resolve => {
            setTimeout(() => { resolve('') }, millisec);
        })
    }


    const getPostsAsync = async () => {
        console.log('on post async is working ....')
        try {
            setLoading(true)
            await waitforme(5000)
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const json = await response.json()
            console.log('response' + json)
            return json
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    const getPostsUsingFetch = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json =>
                setData(json)
            )
    }

    

    const getPostUsingAxios= async()=>{
        axios({
            method: 'get',
            url: `https://jsonplaceholder.typicode.com/posts`,
        }).then((response) => {
            setData(response.data)
        })
    }


    useEffect(() => {
        // getPostsUsingFetch()
        // getPostsAsync().then(json => {
        //     setData(json)
        // })
         getPostUsingAxios()
    }, [])

    return (
        <View style={styles.container}>
            {
                isLoading ? (<ActivityIndicator />) : (<FlatList data={data} keyExtractor={({ id }) => id} renderItem={({ item }) => (
                    <View>
                        <Text style={styles.item}>Id : {JSON.stringify(item.id)}</Text>
                        <Text style={styles.item}>Body : {JSON.stringify(item.body)}</Text>
                    </View>
                )} />)
            }
        </View>
    )
}