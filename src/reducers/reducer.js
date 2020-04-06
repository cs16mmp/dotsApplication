import * as React from 'react'
import { combineReducers } from 'redux';

//const state = { appointments: [], clinics: [] };

function clinicsReducer(state = { clinics: [] }, action) {

    switch (action.type) {
        case 'QUERY':
            return { ...state, clinics: action.clinics }
        default:
            return state
    }
}
function appointmentsReducer(state = { appointments: [] }, action) {

    switch (action.type) {
        case 'QUERY':
            return { ...state, appointments: action.appointments }
        case 'SUBSCRIPTION':
            return { ...state, appointments: [...state.appointments, action.appointments] }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    clinicsReducer,
    appointmentsReducer
})

export default rootReducer