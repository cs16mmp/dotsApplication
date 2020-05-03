import * as React from 'react'
import { View, FlatList, Text } from 'react-native'

import InfectionsCardComponent from '../components/cards/InfectionsCardComponent'

import DATA from '../assets/data/InfectionsData.json'

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
                renderItem={({ item }) => InfectionsCardComponent(item)}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={_ItemSeparatorComponent}
                ListHeaderComponent={_ItemSeparatorComponent}
                ListFooterComponent={_ItemSeparatorComponent}
                style={{ paddingHorizontal: 16 }}
            />
        </View>
    )
}