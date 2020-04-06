import * as React from 'react'
import { combineReducers } from 'redux';

//const state = { appointments: [], clinics: [] };

export default function reducer(state = { appointments: [], clinics: [] }, action) {

    switch (action.type) {
        case 'QUERY':
            return { ...state, appointments: action.appointments, clinics: action.clinics }
        case 'SUBSCRIPTION':
            return { ...state, appointments: [...state.appointments, action.appointments] }
        default:
            return state
    }
}
