import React, { Component } from "react"
import { View, Image, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';

import SkeletonContent from "react-native-skeleton-content-nonexpo";

import * as Styles from '../../styles/Styles'

import { store } from '../../navigation/store'
import * as actions from '../../actions/actions'

const _changeColor = (selected) => {
    return (
        { color: selected ? Styles.colors.accentOrange : Styles.colors.darkBlue }
    )
}

function storeItem(item) {

    global.SELECTED_CLINIC = item

    // global.filter.filter.clinic_id = { contains: item.id }

    console.log(global.SELECTED_CLINIC)

}

export default function ClinicCardComponent({ item, selected, onSelect, ParentFunction }) {

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => { onSelect(item.id); storeItem(item); ParentFunction() }}
                activeOpacity={0.5}>
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
