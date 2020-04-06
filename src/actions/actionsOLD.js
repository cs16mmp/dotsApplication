import React, { Component, useEffect, useReducer } from "react"
import { View, Text, Button } from 'react-native'


import { API, graphqlOperation } from 'aws-amplify';

import * as queries from '../graphql/queries';
import * as subscriptions from '../graphql/subscriptions';

import PubSub from '@aws-amplify/pubsub';

import config from '../features/aws-exports'

API.configure(config)
PubSub.configure(config)

import reducer from '../reducers/reducer'

export function action() {


    useEffect(() => {

        getData()

        const subscription = API.graphql(graphqlOperation(subscriptions.onCreateBookingSystemDb)).subscribe({
            next: (eventData) => {
                const appointment = eventData.value.data.subscriptions.onCreateBookingSystemDb;
                reducer({ type: 'SUBSCRIPTION' }, appointment)
            }
        })
        return () => subscription.unsubscribe()

    }, [])

    async function getData() {

        const appointmentData = await API.graphql(graphqlOperation(queries.listBookingSystemDBs, {
            filter: {
                appointment_id: { contains: "EMPTY" }
            }
        }))

        const clinicsData = await API.graphql(graphqlOperation(queries.listClinicsDBs))

        const data = {
            appointments: appointmentData.data.listBookingSystemDBs.items,
            clinics: clinicsData.data.listClinicsDBs.items
        }

        reducer({ type: 'QUERY' }, data);

    }
}

export async function listAllClinics() {

    try {
        //const appointmentData = await API.graphql(graphqlOperation(queries.listBookingSystemDBs))
        const clinicsData = await API.graphql(graphqlOperation(queries.listClinicsDBs))
        return ({ clinics: clinicsData.data.listClinicsDBs.items, type: 'QUERY' });

    } catch (error) {
        console.warn(error)
    }
}






