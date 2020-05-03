import 'react-native-gesture-handler';
import * as React from 'react'
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack'
import { navigationRef } from './RootNavigator'

import HomeScreen from '../screens/HomeScreen'
import ClinicsScreen from '../screens/ClinicsScreen'
import TestingKitScreen from '../screens/TestingKitScreen'
import RemindersScreen from '../screens/RemindersScreen'
import ServicesScreen from '../screens/ServicesScreen'
import InfectionsScreen from '../screens/InfectionsScreen'

import * as Styles from '../styles/Styles'

const Stack = createStackNavigator();

const header = {
    title: '',
    headerStyle: {
        backgroundColor: 'transparent',
    },
    headerTintColor: Styles.colors.darkBlue,
}

export default function NavigationStack() {
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} options={header} />
                <Stack.Screen name="9a2bfb83-a2e5-4614-bb31-c1544f52550b" component={TestingKitScreen} options={header} />
                <Stack.Screen name="d9853ff8-07b3-4be4-9830-63f78fae87a6" component={RemindersScreen} options={header} />
                <Stack.Screen name="912a8e64-7bf5-456b-a8c1-f6ac9c07d5a9" component={ClinicsScreen} options={header} />
                <Stack.Screen name="85d1747a-2569-41b1-8abf-9f34fd75a2b8" component={ServicesScreen} options={header} />
                <Stack.Screen name="07659c47-5569-4c42-bedc-3e2aeec9cc71" component={InfectionsScreen} options={header} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
