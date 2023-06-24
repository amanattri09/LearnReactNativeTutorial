import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default iffeScreen = () => {


    const values = [3,3,4,4,6]
    function add(a,b){
        console.log("add the numbers"+(a+b))
    }

    add(...values)


    const [posts, setPosts] = useState([]);
    useEffect(() => {
        (async () => {
            console.log("came for api")
            const response = await fetch("https://jsonplaceholder.typicode.com/posts")
            const json = await response.json()
            console.log("got the json" + json)
            setPosts(json)
        })()
    }, [])

    return (
        <View>
            <Text>iffe example is here{posts.length}</Text>
        </View>
    )
}