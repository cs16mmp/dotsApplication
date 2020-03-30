import * as React from 'react'
import { View, ScrollView, Text } from 'react-native'

import * as Styles from '../styles/Styles'
import * as Components from '../components/Components'




export default function RemindersLayout() {
    return (

        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <ScrollView style={{ paddingHorizontal: 16 }}>
                <View style={{ flex: 1, height: 60, justifyContent: 'flex-end' }}>
                    <Text style={Styles.text.headline4}>Reminders</Text>
                </View>
                <View style={{ flex: 1, height: 24 }} />
                <View style={Styles.card('auto', 300)}>

                </View>
                <View style={{ flex: 1, height: 60, justifyContent: 'flex-end' }}>
                    <Text style={Styles.text.headline4}>Notifications</Text>
                </View>
                <View style={{ flex: 1, height: 24 }} />
                <View style={Styles.card('auto', 300)}>

                </View>
            </ScrollView>
        </View>
    )
}