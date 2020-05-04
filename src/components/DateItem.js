import * as React from "react"
import { View, Text, StyleSheet, TouchableOpacity, FlatList, } from 'react-native';

import * as Styles from '../styles/Styles'



const _changeColor = (selected) => {
    return (
        { color: selected ? Styles.colors.accentOrange : Styles.colors.darkBlue }
    )
}

function _storeItem(item, index) {

    global.SELECTED_DATE = index
    console.log(global.SELECTED_DATE)

}

export default function DateItem({ item, index, selected, onSelect, ParentFunction }) {

    return (
        <TouchableOpacity
            onPress={() => { onSelect(item.id); _storeItem(item, index); ParentFunction() }}
            activeOpacity={0.5}>
            <View style={{ height: 30, flexDirection: "column" }}>
                <View style={{ flex: 1 }}>
                    <Text style={[Styles.text.overline, _changeColor(selected)]}>{item.day}</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={[Styles.text.body2Heavy, _changeColor(selected)]}>{item.date}</Text>
                </View>
            </View>
        </TouchableOpacity >
    );
}