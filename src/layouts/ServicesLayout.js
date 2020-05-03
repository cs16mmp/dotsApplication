import * as React from 'react'
import { View, FlatList, Text } from 'react-native'

import * as Styles from '../styles/Styles'
import * as Components from '../components/Components'

import { store } from '../navigation/store'
import * as actions from '../actions/actions'



import ServicesLGBTCardComponent from '../components/cards/ServicesLGBTCardComponen'

import DATA from '../assets/data/OrganisationsData.json'

const _ItemSeparatorComponent = () => {
    return (
        <View style={{ height: 16 }}></View>
    )
}

export default function ServicesLayout() {


    return (
        <View style={{ flex: 1, alignItems: 'stretch', alignSelf: 'stretch' }}>
            <FlatList
                data={DATA}
                renderItem={({ item }) => ServicesLGBTCardComponent(item)}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={_ItemSeparatorComponent}
                ListHeaderComponent={_ItemSeparatorComponent}
                ListFooterComponent={_ItemSeparatorComponent}
                style={{ paddingHorizontal: 16 }}
            />
        </View>
    )
}