import React, { useEffect } from "react";
import { Button, SafeAreaView, Text } from "react-native";
import firestore from '@react-native-firebase/firestore';
import { FirebaseFirestoreTypes } from "@react-native-firebase/firestore";

export default firstoreExample = () => {

    function getData() {
        asynCollectionFetch()
    }

    useEffect(()=>{
        asynCollectionFetch()
    })

    const asynCollectionFetch = async () => {
        let snapshots = await firestore().collection('users').get()
        snapshots.forEach(element => {
            console.log("collection doc name is " + element._data.name)
        });
    }


    function saveData() {
        firs
    }

    return <SafeAreaView><Text>
        Hello world for firstore
    </Text>
        <Button title="Featch Data" onPress={() => {
            getData()
        }}></Button>
    </SafeAreaView>
}

