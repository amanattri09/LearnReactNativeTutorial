import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { useDispatch, useSelector, Provider } from "react-redux";
import { myStore } from "./store/user/Store";
import { getPosts } from "./store/user/user_action";


export default ReduxMainScreen = () => {

    return <Provider store={myStore}>
        <ChildComponent></ChildComponent>
    </Provider>
}

const ChildComponent = () => {
    const posts = useSelector((state) => state.posts)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getPosts())
    },[])
    console.log("posts are :"+posts.entities.length)
    return (<SafeAreaView><Text>Loading status is </Text></SafeAreaView>)
}           

