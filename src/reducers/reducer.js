import * as React from 'react'
import { combineReducers } from 'redux';


function clinicsReducer(state = { clinics: [] }, action) {
    console.log('reducer', state)
    switch (action.type) {
        case 'QUERY':
            return { ...state, clinics: action.clinics }
        default:
            return state
    }
}
function appointmentsReducer(state = { appointments: [] }, action) {
    console.log('reducer', state)
    switch (action.type) {
        case 'QUERY':
            return { ...state, appointments: action.appointments }
        case 'SUBSCRIPTION':
            return { ...state, appointments: [...state.appointments, action.appointments] }
        default:
            return state
    }
}
function organisationsReducer(state = { organisations: [] }, action) {

    console.log('reducer', state)

    switch (action.type) {
        case 'QUERY':
            return { ...state, organisations: action.organisations }
        default:
            return state
    }
}
const rootReducer = combineReducers({
    clinicsReducer,
    appointmentsReducer,
    organisationsReducer
})
export default rootReducer