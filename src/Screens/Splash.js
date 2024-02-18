import { View,Text } from "react-native"; 
import React, { useEffect } from "react";

const Splash = ({navigation}) => {
 
    useEffect( () =>{
        setTimeout(() => {
            navigation.navigate('Home')
        },2000);
    },[]);

    return (
        <View>
            <Text>Splash Screen</Text>
        </View>
    );
};

export default Splash;