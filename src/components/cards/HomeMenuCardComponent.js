import * as React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import * as Styles from '../../styles/Styles'
import * as Components from '../Components'

export default function HomeMenuCardComponent(props) {
    return (
        <TouchableOpacity
            onPress={() => Components.navigateToComponent(props.screenID)}
            activeOpacity={0.5}>
            <View style={Styles.card("auto", 130, "row")}>
                <View style={{ flex: 1, alignSelf: "stretch" }}>
                    <View style={viewStyles.overlay}>
                        <Text style={Styles.text.overline}>{props.textOverlay}</Text>
                    </View>
                    <View style={viewStyles.title}>
                        <Text style={Styles.text.headline5}>{props.textTitle}</Text>
                    </View>
                    <View style={viewStyles.description}>
                        <Text style={Styles.text.body2}>{props.textDescription}</Text>
                    </View>
                </View>
                <View style={viewStyles.icon}>
                    <Components.IconComponent
                        name={props.iconName}
                        size={24}
                        color={Styles.colors.darkBlue}
                    />
                </View>
            </View>
        </TouchableOpacity>
    )
}
const viewStyles = StyleSheet.create({
    icon: {
        flex: 1,
        maxWidth: 30,
        justifyContent: 'flex-start',
        alignSelf: 'stretch',
        marginLeft: 16

    },
    overlay: {
        flex: 1,
        maxHeight: 15,
        alignSelf: 'stretch',
    },
    title: {
        flex: 1,
        maxHeight: 30,
        alignSelf: 'stretch',
        marginVertical: 8,
    },
    description: {
        flex: 1,
        minHeight: 28,
        alignSelf: 'stretch',
    },
})