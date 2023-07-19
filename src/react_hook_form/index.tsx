import { useEffect } from "react";
import React from "react"
import { useForm } from "react-hook-form";
import { SafeAreaView, ScrollView, Text, View } from "react-native"
import RNBootSplash from 'react-native-bootsplash';

interface TemporaryUserId {
    UserId: string
}

const  HookForm = () => {

    const { control, handleSubmit } = useForm<TemporaryUserId>({
        defaultValues: {
            UserId: "123456"
        }
    })

    useEffect(() => {
        setTimeout(() => {
            RNBootSplash.hide({ fade: true })
        }, 3000);
    }, [])

    return (<SafeAreaView>
        <ScrollView>
        </ScrollView>
    </SafeAreaView>)
}

export default HookForm