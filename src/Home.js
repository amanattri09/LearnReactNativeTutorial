import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import 'react-native-gesture-handler';

import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();


const Styles = StyleSheet.create(
    {
        title: {
            textAlign: 'center'
        },
        container : {
            flex : 1,
            alignItems :  'center',
            justifyContent : 'center'
        }
    }
)

export const HomeScreen = ({route,navigation}) => {
   const {itemId}=route.params
    return (<View style={Styles.container}>
        <Text style={Styles.title}>
            Home Screen Item id : {JSON.stringify(itemId)}
        </Text>
        <Button title="Go to Details" onPress={()=> navigation.navigate('Details',{
            itemId:86,
            otherParam:'anything you want here',
            name : 'Custom profile Header'
        })}>
            
        </Button>
    </View>
    )

    // return (
    //     <Drawer.Navigator>
    //         <Drawer.Screen name="Feed" component={Feed}/>
    //         <Drawer.Screen name="Article" component={Article}/>
    //     </Drawer.Navigator>
    // )

}

export const Feed = () => (<Text>Feed Screen</Text>)

const Article = () => (<Text>Article Screen</Text>)



