import * as React from 'react'
import { View, ScrollView, Text, Switch } from 'react-native'

import * as Styles from '../styles/Styles'
import * as Components from '../components/Components'

function PillboxComponent() {
    return (
        <View style={Styles.card('auto', 200, "column")}>
            <View style={{ flex: 1, maxHeight: 30, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 }}>
                <Text style={Styles.text.headline5}>Pillbox</Text>
                <Switch></Switch>
            </View>
            <View style={{ flex: 1, backgroundColor: 'blue' }}>
            </View>
        </View>
    )
}

export default function RemindersLayout() {
    return (
        <View style={{ flex: 1, backgroundColor: 'gray' }}>
            <ScrollView style={{ paddingHorizontal: 16 }}>
                <PillboxComponent></PillboxComponent>
            </ScrollView>
        </View>
    )
}