import * as React from 'react'
import { View, FlatList, Text, ScrollView, Modal } from 'react-native'

import ClinicsCarouselComponent from '../components/ClinicsCarouselComponent'
import CarouselPickerComponent from '../components/CarouselPickerComponent'
import AvailableAppointmentsComponent from '../components/AvailableAppointmentsComponent'
import AppointmentTypeComponent from '../components/AppointmentTypeComponent'
import ConfirmAppointmentCard from '../components/cards/ConfirmAppointmentCard'

import ClinicCardComponent from '../components/cards/ClinicCardComponent'

import DateItem from '../components/DateItem'
import TypeAppointmentItem from '../components/TypeAppointmentItem'

import * as DATA from "../screens/ClinicsScreen"

//In case the Server does not work
import TYPE_DATA from "../assets/data/AppointmentType.json"
import CLINICS_DATA from "../assets/data/ClinicsData.json"
import APPOINTMENTS_DATA from "../assets/data/AppointmentsData.json"

// const clinics_data = store.getState().clinicsReducer()
// const appointments_data = store.getState().appointmentsReducer()

const clinics_data = CLINICS_DATA
//var appointments_data = APPOINTMENTS_DATA


import { store } from '../navigation/store'

const type_data = TYPE_DATA

global.SELECTED_CLINIC = ""
global.SELECTED_BOOKING = ""

//var appointments_data = filterData()

export default function ClinicsLayout(props) {

    const [modalVisible, setModalVisible] = React.useState(false)
    const [state, setState] = React.useState(["HI"])


    function filterData() {

        console.warn("Filtering DATA")

        var result = [];

        const data = APPOINTMENTS_DATA

        clinic_id = global.SELECTED_CLINIC.id
        band = global.SELECTED_TYPE_APPOINTMENT

        calendar_index = global.SELECTED_DATE
        calendar_data = global.CALENDAR_DATA

        console.log('calendar data', calendar_data[1])

        console.log('filter clinic', clinic_id)
        console.log('filter time', time)
        console.log('filter band', band)

        var count = 0;

        console.log('length', data.length)

        for (let index = 0; index < data.length; index++) {

            if (data[index].clinic_id == clinic_id && data[index].band == band) {
                if (data[index].time > calendar_data[calendar_index].time
                    && data[index].time < calendar_data[calendar_index + 1].time) {
                    result.push({ ...data[index] })
                    console.log("count", count++)
                }
            }
        }

        setState(result)

    }

    return (
        <View style={{ flex: 1 }}>
            <Modal
                animationType='fade'
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    console.alert("Modal has been closed.");
                }}>
                <ConfirmAppointmentCard
                    parentHandlePress={() => setModalVisible(!modalVisible)}
                    clinic={global.SELECTED_CLINIC.name}
                    date={global.SELECTED_BOOKING.time}
                />
            </Modal>
            <View style={{ flex: 1, minHeight: 175 }} >
                <CarouselPickerComponent
                    Item={ClinicCardComponent}
                    Data={DATA.CLINICS_DATA}
                    ParentFunction={() => filterData()}
                />
            </View>
            <View style={{ flex: 1, minHeight: 50 }} >
                <CarouselPickerComponent
                    Item={DateItem}
                    Data={DATA.DATE_DATA}
                    ParentFunction={() => filterData()}
                />
            </View>
            <View style={{ flex: 1, minHeight: 50, alignItems: 'center' }} >
                <CarouselPickerComponent
                    Item={TypeAppointmentItem}
                    Data={type_data}
                    ParentFunction={() => filterData()}
                />
            </View>
            <View style={{ flex: 1, minHeight: 300 }} >
                <AvailableAppointmentsComponent
                    parentHandlePress={() => setModalVisible(true)}
                    Data={state}
                />
            </View>
        </View>
    )
}
