import * as React from 'react'
import { View, FlatList, Text } from 'react-native'

import * as Styles from '../styles/Styles'
import * as Components from '../components/Components'

import HomeItemLayout from './HomeItemLayout'

import DATA from '../assets/data/MenuData.json'

function Item(item) {
    return (
        <HomeItemLayout
            textTitle={item.title}
            textOverlay={item.overlay}
            textDescription={item.description}
            iconName={item.iconName}
            screenID={item.id}
        />
    )
}

export default function HomeLayout() {
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <Components.FlatListComponent
                DATA={DATA.Items}
                itemLayout={({ item }) => Item(item)}
                title="Home"
            />
        </View>

    )
}