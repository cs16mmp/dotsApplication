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
    //console.log('receive appointments', json)
    return {
        type: RECEIVE_DATA,
        appointments: json,
    }
}
function receiveDataOrganisations(json) {
    //console.log('actions', json.data.listOrganiationsDBs.items)
    return {
        type: RECEIVE_DATA,
        organisations: json.data.listOrganiationsDBs.items,
    }
}
function receiveDataInfections(json) {
    //console.log('actions', json.data.listOrganiationsDBs.items)
    return {
        type: RECEIVE_DATA,
        Infections: json.data.listInfectionsDBs.items,
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
export function fetchDataOrganisations() {

    return function (dispatch) {

        return API.graphql(graphqlOperation(queries.listOrganiationsDBs))
            .then(
                response => response,
                error => console.log('List Clinics Error,', error),
            )
            .then(
                json => dispatch(receiveDataOrganisations(json)))
    }
}
export function fetchDataInfections() {

    return function (dispatch) {

        return API.graphql(graphqlOperation(queries.listInfectionsDBs))
            .then(
                response => response,
                error => console.log('List Clinics Error,', error),
            )
            .then(
                json => dispatch(receiveDataOrganisations(json)))
    }
}
export function fetchDataAppointments() {

    //console.log('Fetching data', global.filter.filter)

    return function (dispatch) {

        return API.graphql(graphqlOperation(queries.listBookingSystemDBs, global.filter))
            .then(
                response => response,
                error => console.log('List Booking Error', error),
            )
            .then(
                json => dispatch(receiveDataAppointments(json.data.listBookingSystemDBs.items))

            )
    }
}
