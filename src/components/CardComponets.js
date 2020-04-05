import * as React from 'react'
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native'

import * as styles from '../styles/Styles'

import * as RootNavigation from '../navigation/RootNavigator'

export function HomeMenu(props) {
    return (
        <TouchableHighlight onPress={() => RootNavigation.navigate(props.screenID)}>
            <View style={Styles.card("auto", 127, "row")}>
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
        </TouchableHighlight>
    )
}

export function Clinic(props) {

}

export function Appointment(props) {

}