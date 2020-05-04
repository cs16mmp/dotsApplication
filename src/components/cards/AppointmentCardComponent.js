import * as React from "react"
import { View, Image, Text, StyleSheet } from 'react-native';

import * as style from '../../styles/Styles'

function toHours(time) {

    let date = new Date(time);

    return (date.getHours() + ":" + date.getMinutes())

}
function toDay(time) {

    let date = new Date(time);

    return (date.getDate())
}

export default function AppointmentCardComponent(props) {

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.timeText}>{toHours(props.item.time)}</Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <Text style={style.actionable.body2}>Book</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#FFFFFF',
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 16,
        paddingLeft: 16,
    },
    card: {
        flex: 1,
        minHeight: 60,
        maxHeight: 60,
        alignSelf: 'stretch',
        padding: 16,
        flexGrow: 1,
        flexShrink: 1,
        backgroundColor: '#FFFFFF',
        shadowColor: '#673939',
        shadowOpacity: .25,
        borderRadius: 12,

        shadowOffset: {
            height: 3,
        },
        shadowRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    timeText: {
        fontSize: 24,
        fontFamily: 'Avenir-Heavy',
        color: '#2C4159',
    },
})