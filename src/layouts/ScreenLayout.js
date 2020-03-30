import * as React from 'react'
import { View, ScrollView, Text } from 'react-native'

import * as Styles from '../styles/Styles'
import * as Components from '../components/Components'


export default function ScreenLayout(props) {
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <ScrollView>
                <View style={{ flex: 1, height: 50, paddingLeft: 16 }}>
                    <Text style={Styles.text.headline4}>{props.title}</Text>
                </View>
                <View style={{ flex: 1 }}>
                    {props.body}
                </View>
            </ScrollView>
        </View>
    )
}