import * as React from 'react'
import { View, FlatList, Text, ScrollView, Modal } from 'react-native'

import { connect } from 'react-redux';

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
const clinics_data = CLINICS_DATA
const appointments_data = APPOINTMENTS_DATA

import { store } from '../navigation/store'

const type_data = TYPE_DATA

// const clinics_data = store.getState().clinicsReducer()
// const appointments_data = store.getState().appointmentsReducer()

export default function ClinicsLayout() {
    const [modalVisible, setModalVisible] = React.useState(false)
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
                    Data={clinics_data}
                />
            </View>
            <View style={{ flex: 1, minHeight: 50 }} >
                <CarouselPickerComponent
                    Item={DateItem}
                    Data={DATA.DATE_DATA}
                />
            </View>
            <View style={{ flex: 1, minHeight: 50, alignItems: 'center' }} >
                <CarouselPickerComponent
                    Item={TypeAppointmentItem}
                    Data={type_data}
                />
            </View>
            <View style={{ flex: 1, minHeight: 300 }} >
                <AvailableAppointmentsComponent
                    parentHandlePress={() => setModalVisible(true)}
                    Data={appointments_data}
                />
            </View>
        </View>
    )
}