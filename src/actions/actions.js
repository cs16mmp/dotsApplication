import React from "react"

import { API, graphqlOperation } from 'aws-amplify';

import * as queries from '../graphql/queries';
import * as subscriptions from '../graphql/subscriptions';

import PubSub from '@aws-amplify/pubsub';

import config from '../features/aws-exports'

API.configure(config)
PubSub.configure(config)

export const RECEIVE_DATA = 'QUERY'

function receiveDataClinics(json) {
    return {
        type: RECEIVE_DATA,
        clinics: json.data.listClinicsDBs.items,
    }
}

function receiveDataAppointments(json) {
    return {
        type: RECEIVE_DATA,
        appointments: json.data.listBookingSystemDBs.items,
    }
}

export function updateBookingTable(booking_id, appointmentData) {

    return function (dispatch) {

        return API.graphql(graphqlOperation(mutations.updateBookingSystemDb, {
            input: {
                id: booking_id,
                appointment_id: appointmentData.appointment_id,
                clinic_id: appointmentData.clinic_id,
                band: appointmentData.band
            }
        })).then(
            response => response,
            error => console.log('Update Booking Error,', error),
        )
    }
}

export function addAppointment(appointmentData) {

    return function (dispatch) {

        return API.graphql(graphqlOperation(mutations.createAppointmentDb, { input: appointment }))
            .then(
                response => response,
                error => console.log('Add Appointment Error,', error),
                console.warn('Add Appointment Error')
            )
        console.warn("Appointment Added", appointmentData)
    }
}
export function fetchDataClinics() {

    return function (dispatch) {

        return API.graphql(graphqlOperation(queries.listClinicsDBs))
            .then(
                response => response,
                error => console.log('List Clinics Error,', error),
            )
            .then(
                json => dispatch(receiveDataClinics(json)))
    }
}

export function fetchDataAppointments() {

    const filter = {
        filter: {
            appointment_id: { contains: "EMPTY" },
            // clinic_id: { contains: clinic_id },
            // time: { contains: time },
            // band: { contains: band },
        }
    }

    return function (dispatch) {

        return API.graphql(graphqlOperation(queries.listBookingSystemDBs, filter))
            .then(
                response => response,
                error => console.log('List Booking Error', error),
            )
            .then(
                json => dispatch(receiveDataAppointments(json)))
    }
}
