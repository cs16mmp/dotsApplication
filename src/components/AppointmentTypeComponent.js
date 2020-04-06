import * as React from "react"
import { View, Text, FlatList } from 'react-native'

import * as styles from '../styles/Styles'

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'STI testing - no symptoms',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'STI testing - symptoms',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Emergency',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d34',
        title: 'Support',
    },
]

function Item({ title }) {
    return (
        <View style={{ flex: 1 }}>
            <Text style={styles.text.body2}>{title}</Text>
        </View>
    )
}
export function ItemSeparatorComponent() {
    return (
        <View style={{ width: 1, backgroundColor: styles.colors.darkBlue, marginHorizontal: 10 }} />
    )
}

export default function AppointmentTypeComponent() {

    return (
        <FlatList
            data={DATA}
            renderItem={({ item }) => <Item title={item.title} />}
            keyExtractor={item => item.id}
            horizontal={true}
            contentContainerStyle={{ margin: 16 }}
            ItemSeparatorComponent={ItemSeparatorComponent}
        >
        </FlatList>

    )
} 