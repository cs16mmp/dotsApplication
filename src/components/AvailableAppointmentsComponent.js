import React, { Component } from "react"
import { View, Image, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

import AppointmentCardComponent from "../components/cards/AppointmentCardComponent";

import * as DATA from "../screens/ClinicsScreen"

function toHumanTime(time) {

    let date = new Date(time);

    return date.getDate() + " | " + (date.getHours() + ":" + date.getMinutes())

}

function _sortData(DATA) {
    DATA.sort(function (a, b) {
        return a.time - b.time
    })
}

function _storeItem(item) {

    global.SELECTED_BOOKING = item
    console.log(global.SELECTED_BOOKING)

}

export default function AvailableAppointmentsComponent(props) {

    props.Data = _sortData(props.Data)

    return (
        <FlatList
            data={props.Data}
            renderItem={({ item }) => (
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => { props.parentHandlePress(); _storeItem(item) }}>
                    <AppointmentCardComponent
                        timeString={toHumanTime(item.time)}
                    />
                </TouchableOpacity>)}
            keyExtractor={item => item.id}
        />
    );

}


