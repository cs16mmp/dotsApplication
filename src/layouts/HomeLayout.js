import * as React from 'react'
import { View, FlatList, Text } from 'react-native'

import * as styles from '../styles/Styles'
import * as components from '../components/Components'

import { DATA } from '../screens/HomeScreen'


function Item({ title }) {
    return (
        <View style={styles.card.card}>

        </View>
    );
}
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

                data={DATA}
                renderItem={({ item }) => <Item title={item.title} />}
                keyExtractor={item => item.id}>
            </FlatList>
        </View>

    )
}