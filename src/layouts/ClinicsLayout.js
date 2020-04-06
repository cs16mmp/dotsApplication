import * as React from 'react'
import { View, FlatList, Text, ScrollView, Modal } from 'react-native'

import ClinicsCarouselComponent from '../components/ClinicsCarouselComponent'
import CarouselPickerComponent from '../components/CarouselPickerComponent'
import AvailableAppointmentsComponent from '../components/AvailableAppointmentsComponent'
import AppointmentTypeComponent from '../components/AppointmentTypeComponent'
import ConfirmAppointmentCard from '../components/cards/ConfirmAppointmentCard'

import * as DATA from "../screens/ClinicsScreen"

import TYPE_DATA from "../assets/data/AppointmentType.json"

import DateItem from '../components/DateItem'
import TypeAppointmentItem from '../components/TypeAppointmentItem'

export default function ClinicsLayout() {

    const [modalVisible, setModalVisible] = React.useState(false)

    console.log(TYPE_DATA)

    return (
        <View style={{ flex: 1 }}>
            <Modal
                animationType='fade'
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}>
                <ConfirmAppointmentCard
                    parentHandlePress={() => setModalVisible(!modalVisible)}
                />
            </Modal>
            <View style={{ flex: 1, minHeight: 170 }} >

                <ClinicsCarouselComponent />

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
            <View style={{ flex: 1, minHeight: 400 }} >

                <AvailableAppointmentsComponent
                    parentHandlePress={() => setModalVisible(true)}
                />

            </View>
        </View>
    )
}