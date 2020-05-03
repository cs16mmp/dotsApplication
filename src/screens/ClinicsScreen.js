import * as React from 'react'
import { View } from 'react-native'

import ClinicsLayout from '../layouts/ClinicsLayout'
import ScreenLayout from '../layouts/ScreenLayout'

import AppointmentsData from '../assets/data/AppointmentsData.json'
import ClinicsData from '../assets/data/ClinicsData.json'

import CalendarDataGenerator from '../api/CalendarDataGenerator'
import uuid from 'uuid-random';

import * as actions from '../actions/actions'

import { store } from '../navigation/store'

//store.dispatch(actions.fetchDataClinics()).then((store.getState().clinicsReducer.clinics))

//store.dispatch(actions.fetchDataClinics()).then(() => console.log('ClinicsScreen', store.getState().clinicsReducer))
//store.dispatch(actions.fetchDataAppointments()).then(() => console.log('ClinicsScreen', store.getState().appointmentsReducer))

//console.log('Clinics Screen', store.getState())

const TITLE = 'Clinics'

export const CLINICS_DATA = ClinicsData
export const AVAILABLE_APPOINTMENTS_DATA = AppointmentsData

export const DATE_DATA = CalendarDataGenerator()

export var SELECTED_BOOKING_ID = ""
export var SELECTED_CLINIC = ""
export var SELECTED_BAND = ""

export var INITIAL_BOOKING_DATA = {
    clinic_id: "",
    time: "",
    band: "",
}

export var APPOINTMENT_DATA = {
    id: "",
    clinic_id: "",
    name: "",
    description: "",
    phone: "",
    created_at: ""
}


export function addAppointment() {

    console.log('ADD APPOINTMENT')

    APPOINTMENT_DATA.id = uuid()
    actions.updateBookingTable(SELECTED_BOOKING_ID, APPOINTMENT_DATA)
    actions.addAppointment(APPOINTMENT_DATA)

}

export default function ClinicsScreen() {

    return (
        <ScreenLayout
            title={TITLE}
            body={ClinicsLayout()}>
        </ScreenLayout>
    )


}
