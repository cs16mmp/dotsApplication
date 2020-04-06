import * as React from 'react'
import { View, Text, Button } from 'react-native'

import { connect } from 'react-redux'

import * as actions from '../actions/actions'

import { store } from '../navigation/store'

import reducer from '../reducers/reducer'

function onPress() {

    store.dispatch(actions.fetchData())

    //store.dispatch(actions.fetchData().then(() => console.log(store.getState())))
}


function ReduxTest() {


    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button title="GET DATA"
                    onPress={() => onPress()}></Button>
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>REDUX SCREEN</Text>
            </View>
            {store.getState().clinics.map((item, i) => <Text key={item.id}>{item.name} : {item.phone}</Text>)}
        </View>
    )
}

export default ReduxTest;
