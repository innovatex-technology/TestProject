import { View,Text } from "react-native"; 
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Dashboard from "./Screens/Dashboard";

const Drawer = createDrawerNavigator();

const BottomNavigator = () => {

    return (
       <Drawer.Navigator>
            <Drawer.Screen
                name="Dashboard"
                component={Dashboard}
                options={{headerShown: true}}
            />
       </Drawer.Navigator>
    );
};

export default BottomNavigator;