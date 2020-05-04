import React, { Component } from "react"
import { View, Image, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

import AppointmentCardComponent from "../components/cards/AppointmentCardComponent";

//import * as DATA from "../screens/ClinicsScreen"

import APPOINTMENTS_DATA from "../assets/data/AppointmentsData.json"
var DATA = [];

import { store } from '../navigation/store'

function toHumanTime(time) {

    let date = new Date(time);

    return date.getDate() + " | " + (date.getHours() + ":" + date.getMinutes())

}

function _sortData(DATA) {

    if (typeof DATA !== 'undefined' && DATA !== '') {
        DATA.sort(function (a, b) {
            return a.time - b.time
        })
    }
}

function _storeItem(item) {

    global.SELECTED_BOOKING = item
    console.log(global.SELECTED_BOOKING)

}

export function filterData() {

    var result = [];

    const data = APPOINTMENTS_DATA

    clinic_id = global.SELECTED_CLINIC
    time = global.SELECTED_DATE
    band = global.SELECTED_TYPE_APPOINTMENT

    console.log('filter clinic', clinic_id)
    console.log('filter time', time)
    console.log('filter band', band)

    var count = 0;

    console.log('length', data.length)

    for (let index = 0; index < data.length; index++) {

        if (data[index].clinic_id == clinic_id && data[index].band == band && data[index].time >= time) {

            result.push({ ...data[index] })

            console.log("count", count++)

        }
    }
    console.log(result)
    DATA = result
}


export default function AvailableAppointmentsComponent(props) {

    props.Data = _sortData(props.Data)

    //console.log("Available Appointment", props.Data)

    return (
        <FlatList
            data={props.Data}
            extraData={props.Data}
            refreshing='true'
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


