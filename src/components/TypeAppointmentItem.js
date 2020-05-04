import * as React from "react"
import { View, Text, TouchableOpacity } from 'react-native'

import * as Styles from '../styles/Styles'
import * as ACTION from '../components/AvailableAppointmentsComponent'


const _changeColor = (selected) => {
    return (
        { color: selected ? Styles.colors.accentOrange : Styles.colors.darkBlue }
    )
}
function _storeItem(item) {

    global.SELECTED_TYPE_APPOINTMENT = item.band
    console.log(global.SELECTED_TYPE_APPOINTMENT)

    //ACTION.filterData()

}

export default function TypeAppointmentItem({ item, selected, onSelect, ParentFunction }) {
    return (
        <TouchableOpacity
            onPress={() => { onSelect(item.id); _storeItem(item); ParentFunction() }}
            activeOpacity={0.2}>
            <View style={{ flex: 1 }}>
                <Text style={[Styles.text.body2, _changeColor(selected)]}>{item.title}</Text>
            </View>
        </TouchableOpacity>
    )
}