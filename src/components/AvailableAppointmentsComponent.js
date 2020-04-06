import React, { Component } from "react"
import { View, Image, Text, StyleSheet, FlatList, TouchableHighlight } from 'react-native';

import AppointmentCardComponent from "../components/cards/AppointmentCardComponent";

import * as DATA from "../screens/ClinicsScreen"

function toHumanTime(time) {

    let date = new Date(time);

    return date.getDate() + " | " + (date.getHours() + ":" + date.getMinutes())

}

function _sortData(DATA) {
    DATA.AVAILABLE_APPOINTMENTS_DATA.sort(function (a, b) {
        return a.time - b.time
    })
}

export default function AvailableAppointmentsComponent(props) {

    return (
        <FlatList
            data={props.appointments}
            renderItem={({ item }) => (
                <TouchableHighlight
                    onPress={() => { props.parentHandlePress() }}>
                    <AppointmentCardComponent
                        timeString={toHumanTime(item.time)}
                    />
                </TouchableHighlight>)}
            keyExtractor={item => item.id}
        />
    );

}


