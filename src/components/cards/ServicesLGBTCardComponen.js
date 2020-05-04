import * as React from 'react'
import { View, Text, TouchableOpacity, Linking } from 'react-native'

import * as Styles from '../../styles/Styles'
import * as Components from '../../components/Components'


export default function Item(item) {

    return (
        <TouchableOpacity
            onPress={() => {
                console.warn('PRESSED!'); Linking.openURL(item.website)
            }}
            activeOpacity={0.5}>
            <View style={Styles.card('auto', 200, 'row')}>
                <View style={{ flex: 1, flexDirection: 'column' }}>
                    <View style={{ flex: 1, maxHeight: 50, marginBottom: 16 }}>
                        <Text style={Styles.text.headline5}>{item.name}</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={Styles.text.body2}>{item.description}</Text>
                    </View>
                </View>
                <View style={{ flex: 1, maxWidth: 30, marginLeft: 16, alignItems: 'center' }}>
                    <Components.IconComponent
                        name={"launch"}
                        size={24}
                        color={Styles.colors.accentOrange}
                    />
                </View>
            </View>
        </TouchableOpacity>
    );
}