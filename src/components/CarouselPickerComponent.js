import * as React from "react"
import { View, Text, StyleSheet, TouchableOpacity, FlatList, } from 'react-native';

import * as Styles from '../styles/Styles'

const _ItemSeparatorComponent = () => {
    return (
        <View style={{ width: 16 }}></View>
    )
}

function Item(item, select, onSelect, ItemInterface) {

    return (
        <ItemInterface
            item={item}
            selected={select}
            onSelect={onSelect}
        />
    )
}

export default CarouselPickerComponent = (props) => {

    const [selected, setSelected] = React.useState(new Map());

    const onSelect = React.useCallback(
        id => {
            const newSelected = new Map(selected);
            newSelected.set(id, !selected.get(id));
            setSelected(newSelected);
        },
        [selected],
    );

    return (
        <FlatList
            horizontal={true}
            data={props.Data}
            renderItem={({ item }) => Item(item, !!selected.get(item.id), onSelect, props.Item)}
            keyExtractor={item => item.id}
            extraData={selected}
            ItemSeparatorComponent={_ItemSeparatorComponent}
            ListHeaderComponent={_ItemSeparatorComponent}
            ListFooterComponent={_ItemSeparatorComponent}
        >
        </FlatList>
    );
}
