import 'react-native-gesture-handler';
import * as React from 'react'
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from './../screens/HomeScreen'

const Stack = createStackNavigator();

const header = {
    title: '',
    headerStyle: {
        backgroundColor: 'transparent',
    },
}

export default function NavigationStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} options={header} />
            </Stack.Navigator>
        </NavigationContainer>
    );


}
