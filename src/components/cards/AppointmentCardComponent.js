import * as React from "react"
import { View, Image, Text, StyleSheet } from 'react-native';


export default function AppointmentCardComponent(props) {

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.timeText}>{props.timeString}</Text>
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
    },
    timeText: {
        fontSize: 24,
        fontFamily: 'Avenir-Heavy',
        color: '#2C4159',
    },
})