import React, { Component } from "react"
import { View, Image, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';

import * as DATA from "../../screens/ClinicsScreen"


const ClinicCardComponent = (props) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => console.warn(DATA.APPOINTMENT_DATA.clinic_id = props.id)}
                activeOpacity={0.4}>
                <View style={styles.card}>
                    <View style={styles.text}>
                        <View style={styles.overlay}>
                            <Text style={styles.overlayText}>{props.overlayString}</Text>
                        </View>
                        <View style={styles.title}>
                            <Text style={styles.titleText}>{props.titleString}</Text>
                        </View>
                        <View style={styles.description}>
                            <Text style={styles.descriptionText}>{props.addressString}</Text>
                        </View>
                    </View>
                    <View style={styles.icon}>

                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
}
export default ClinicCardComponent;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#FFFFFF',
        marginTop: 16,
        marginBottom: 16,
        paddingRight: 16,
        paddingLeft: 16,
    },
    card: {
        flex: 1,
        minWidth: 286,
        maxWidth: 286,
        minHeight: 127,
        maxHeight: 127,
        alignSelf: 'stretch',
        padding: 16,
        flexGrow: 1,
        flexShrink: 1,
        backgroundColor: '#FFFFFF',
        shadowColor: '#673939',
        shadowOpacity: .25,
        borderRadius: 12,

        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowRadius: 13,
        flexDirection: 'row',
    },
    text: {
        flex: 1,
        alignSelf: 'stretch',
        flexGrow: 1,
    },
    icon: {
        flex: 1,
        minWidth: 24,
        maxWidth: 24,
        justifyContent: 'flex-start',
        alignSelf: 'stretch',
        marginLeft: 16,
        flexGrow: 1,
    },
    overlay: {
        flex: 1,
        minHeight: 10,
        alignSelf: 'stretch',
        flexGrow: 1,
    },
    title: {
        flex: 1,
        minHeight: 24,
        alignSelf: 'stretch',
        marginVertical: 8,
        flexGrow: 1,
    },
    description: {
        flex: 1,
        minWidth: 0,
        minHeight: 40,
        alignSelf: 'stretch',
        flexGrow: 1,
    },
    overlayText: {
        fontSize: 10,
        fontFamily: 'Avenir-Book',
        color: '#2C4159'
    },
    titleText: {
        fontSize: 24,
        fontFamily: 'Avenir-Heavy',
        color: '#2C4159',
    },
    descriptionText: {
        fontSize: 14,
        fontFamily: 'Avenir-Book',
        color: '#2C4159',
        flexShrink: 1,
        flexWrap: 'wrap'
    }
})
