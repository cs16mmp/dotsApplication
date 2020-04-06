import React, { Component } from "react"
import { View, Image, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';

import SkeletonContent from "react-native-skeleton-content-nonexpo";

import * as Styles from '../../styles/Styles'

const _changeColor = (selected) => {
    return (
        { color: selected ? Styles.colors.accentOrange : Styles.colors.darkBlue }
    )
}

export default function ClinicCardComponent({ item, selected, onSelect }) {

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => onSelect(item.id)}
                activeOpacity={0.2}>
                <View style={Styles.card(286, 127, 'row')}>
                    <View style={styles.text}>
                        <View style={styles.overlay}>
                            <Text style={Styles.text.overline}>{item.postcode}</Text>
                        </View>
                        <View style={styles.title}>
                            <Text style={[Styles.text.headline5, _changeColor(selected)]}>{item.name}</Text>
                        </View>
                        <View style={styles.description}>
                            <Text style={Styles.text.body2}>{item.address}</Text>
                        </View>
                    </View>
                    <View style={styles.icon}>

                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignSelf: 'stretch',
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

})
