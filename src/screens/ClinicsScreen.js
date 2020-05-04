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

/////////
import { API, graphqlOperation } from 'aws-amplify';

import * as queries from '../graphql/queries';
import * as subscriptions from '../graphql/subscriptions';

import PubSub from '@aws-amplify/pubsub';

import config from '../features/aws-exports'

API.configure(config)
PubSub.configure(config)
////////////

//store.dispatch(actions.fetchDataClinics()).then((store.getState().clinicsReducer.clinics))

//store.dispatch(actions.fetchDataClinics()).then(() => console.log('ClinicsScreen', store.getState().clinicsReducer))
//store.dispatch(actions.fetchDataAppointments()).then(() => console.log('ClinicsScreen', store.getState().appointmentsReducer))

//console.log('Clinics Screen', store.getState())

const TITLE = 'Clinics'

export const CLINICS_DATA = ClinicsData
// export const AVAILABLE_APPOINTMENTS_DATA = AppointmentsData

export const DATE_DATA = CalendarDataGenerator()
global.CALENDAR_DATA = DATE_DATA;

global.filter = {
    filter: {
        appointment_id: { contains: "EMPTY" },
        //clinic_id: "",
        // time: { contains: time },
        // band: { contains: band },
    }
}
global.SELECTED_DATE = ""
global.SELECTED_TYPE_APPOINTMENT = ""
global.SELECTED_CLINIC = ""


export function addAppointment() {

    console.log('ADD APPOINTMENT')

    APPOINTMENT_DATA.id = uuid()
    actions.updateBookingTable(SELECTED_BOOKING_ID, APPOINTMENT_DATA)
    actions.addAppointment(APPOINTMENT_DATA)

}
function fetchDATA() {

    console.warn("data fetched")

    return API.graphql(graphqlOperation(queries.listBookingSystemDBs, global.filter))
        .then(
            response => response,
            error => console.log('List Booking Error', error),
        )
        .then(JSON => {
            if (typeof JSON !== 'undefined') {
                newDATA.BOOKING_DATA = JSON.data.listBookingSystemDBs.items
                console.log('JSON', newDATA)
            }
        })
}
export default function ClinicsScreen() {

    //const [formState, setFormState] = React.useState({ BOOKINGS_DATA: [], CLINICS_DATA: [] })
    //const [data, setData] = React.useState({ BOOKINGS_DATA: [], CLINICS_DATA: [] })

    // React.useEffect(() => {
    //     fetchBookings()
    //     fetchClinics()

    // }, [])
    // async function fetchBookings() {
    //     try {
    //         const bookingsData = await API.graphql(graphqlOperation(queries.listBookingSystemDBs, global.filter))
    //         const JSON = bookingsData.data.listBookingSystemDBs.items
    //         if (typeof JSON !== 'undefined') {
    //             setData({ ...data, BOOKINGS_DATA: JSON })
    //             console.log('Bookings', data)
    //         }
    //     } catch (err) { console.log('error fetching bookings') }
    // }
    // async function fetchClinics() {
    //     try {
    //         const clinicsData = await API.graphql(graphqlOperation(queries.listClinicsDBs))
    //         const JSON = clinicsData.data.listClinicsDBs.items
    //         if (typeof JSON !== 'undefined') {
    //             setData({ ...data, CLINICS_DATA: JSON })
    //             console.log('Clinics', data)
    //         }
    //     } catch (err) { console.log('error fetching clinics') }
    // }

    //console.log('Store Dispatch')
    //store.dispatch(actions.fetchDataAppointments())
    //DATA = store.getState().appointmentsReducer

    return (
        <ScreenLayout
            title={TITLE}
            body={ClinicsLayout(AppointmentsData)}>
        </ScreenLayout>
    )

}
