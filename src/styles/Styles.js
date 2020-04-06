import * as React from 'react'
import { StyleSheet } from 'react-native';

export const colors = {
    accentOrange: '#FA8F68',
    accentTurquoise: '#34DCCA',
    darkBlue: '#1D325F',
    lightBlue: '#43A0FF'
}
export const text = StyleSheet.create({

    headline4: {
        fontFamily: 'Avenir-Heavy',
        color: colors.darkBlue,
        fontSize: 34,
    },
    headline5: {
        fontFamily: 'Avenir-Heavy',
        color: colors.darkBlue,
        fontSize: 24,
    },
    body2: {
        fontFamily: 'Avenir-Book',
        color: colors.darkBlue,
        fontSize: 14,
    },
    body2Heavy: {
        fontFamily: 'Avenir-Heavy',
        color: colors.darkBlue,
        fontSize: 14,
    },
    overline: {
        fontFamily: 'Avenir-Book',
        color: colors.darkBlue,
        fontSize: 10,
    },
    headline6: {
        fontFamily: 'Avenir-Heavy',
        color: 'white',
        fontSize: 20,
    }
})
export const actionable = StyleSheet.create({
    body2: {
        fontFamily: 'Avenir-Heavy',
        color: colors.accentOrange,
        fontSize: 14,
    },
    overline: {
        fontFamily: 'Avenir-Heavy',
        color: colors.accentOrange,
        fontSize: 10,
    }
})
export function button(width, height) {
    return {
        backgroundColor: colors.accentOrange,
        borderRadius: 12,
        height: height,
        width: width,
    }
}
export function card(width, height, flexDirection) {
    return {
        flex: 1,
        minWidth: width,
        minHeight: height,
        alignSelf: 'stretch',
        backgroundColor: '#FFFFFF',
        shadowColor: '#000',
        shadowOpacity: .25,
        borderRadius: 12,
        shadowRadius: 13,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        flexDirection: flexDirection,
        padding: 16
    }
}



