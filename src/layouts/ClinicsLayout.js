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
import TYPE_DATA from "../assets/data/AppointmentType.json"

import { store } from '../navigation/store'
import * as actions from '../actions/actions'

store.dispatch(actions.fetchDataClinics(), actions.fetchDataAppointments())

export default function ClinicsLayout() {

    const [modalVisible, setModalVisible] = React.useState(false)

    //console.log('Clinics Layout', store.getState())

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
                />
            </Modal>

            <View style={{ flex: 1, minHeight: 175 }} >
                <CarouselPickerComponent
                    Item={ClinicCardComponent}
                    Data={[]}
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
                    Data={TYPE_DATA}
                />

            </View>
            <View style={{ flex: 1, minHeight: 300 }} >

                <AvailableAppointmentsComponent
                    parentHandlePress={() => setModalVisible(true)}
                    Data={[]}
                />

            </View>
        </View>
    )
}