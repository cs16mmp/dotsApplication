import * as React from 'react'
import { View, Text } from 'react-native'

import * as styles from '../styles/Styles'

import Icon from 'react-native-vector-icons/MaterialIcons'
Icon.loadFont()

export function ListHeaderComponent(text) {
    return (
        <Text style={styles.text.headline4}>{text}</Text>
    )
}
export function ItemSeparatorComponent() {
    return (
        <View style={{ marginTop: 24 }} />
    )
}
export function ListFooterComponentHome() {
    return (
        <View style={{ flex: 1, height: 30, justifyContent: 'flex-end', flexDirection: 'row' }}>
            <View style={{ height: 30, width: 30, justifyContent: 'center', alignItems: 'center' }}>
                <Icon
                    name='settings'
                    size={24}
                    color={styles.colors.accentOrange}
                />
            </View>
        </View>
    )
}