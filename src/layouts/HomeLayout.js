import * as React from 'react'
import { View, FlatList, Text } from 'react-native'

import * as Styles from '../styles/Styles'
import * as components from '../components/Components'

import HomeItemLayout from './HomeItemLayout'

import DATA from '../assets/data/MenuData.json'

export default function HomeLayout() {
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <FlatList
                ListHeaderComponentStyle={{ marginVertical: 24 }}
                ListHeaderComponent={components.ListHeaderComponent("Home")}

                ListFooterComponentStyle={{ marginVertical: 24 }}
                ListFooterComponent={components.ListFooterComponentHome()}

                contentContainerStyle={{ margin: 16 }}

                ItemSeparatorComponent={components.ItemSeparatorComponent}

                data={DATA.Items}
                renderItem={({ item }) =>
                    <HomeItemLayout
                        textTitle={item.title}
                        textOverlay={item.overlay}
                        textDescription={item.description}
                        iconName={item.iconName}
                    />}
                keyExtractor={item => item.id}>
            </FlatList>
        </View>

    )
}