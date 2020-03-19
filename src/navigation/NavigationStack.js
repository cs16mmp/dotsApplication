import 'react-native-gesture-handler';
import * as React from 'react'
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { navigationRef } from './RootNavigator'

import HomeScreen from '../screens/HomeScreen'
import TestingKitScreen from '../screens/TestingKitScreen'

const Stack = createStackNavigator();

const header = {
    title: '',
    headerStyle: {
        backgroundColor: 'transparent',
    },
}

export default function NavigationStack() {
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} options={header} />
                <Stack.Screen name="9a2bfb83-a2e5-4614-bb31-c1544f52550b" component={TestingKitScreen} options={header} />
            </Stack.Navigator>
        </NavigationContainer>
    );


}
