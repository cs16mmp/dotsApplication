import * as React from "react"
import { View, Text, StyleSheet, TouchableOpacity, FlatList, } from 'react-native';
import * as DATA from "../screens/ClinicsScreen"
import * as Styles from '../styles/Styles'

const _ItemSeparatorComponent = () => {
    return (
        <View style={{ width: 16 }}></View>
    )
}

function _storeInitialValue(item) {

    console.log('STORE INITIAL VALUE')

    if (typeof item.time !== 'undefined') {
        DATA.INITIAL_BOOKING_DATA.time = item.time
        console.log(DATA.INITIAL_BOOKING_DATA.time)
    }
    if (typeof item.band !== 'undefined') {
        DATA.INITIAL_BOOKING_DATA.band = item.band
        console.log(DATA.INITIAL_BOOKING_DATA.band)
    }
    if (typeof item.address !== 'undefined') {
        DATA.INITIAL_BOOKING_DATA.clinic_id = item.id
        console.log(DATA.INITIAL_BOOKING_DATA.clinic_id)
    }
}

function Item(item, index, select, onSelect, ItemInterface) {

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
            [...newSelected.keys()].forEach((key) => {
                newSelected.set(key, false)
            })
            newSelected.set(id, !selected.get(id));
            setSelected(newSelected);
        },
        [selected],
    );
    return (
        <FlatList
            horizontal={true}
            data={props.Data}
            renderItem={({ item, index }) =>
                Item(item, index, selected.get(item.id), onSelect, props.Item)}
            keyExtractor={item => item.id}
            extraData={selected}
            ItemSeparatorComponent={_ItemSeparatorComponent}
            ListHeaderComponent={_ItemSeparatorComponent}
            ListFooterComponent={_ItemSeparatorComponent}
            style={{ paddingVertical: 16 }}>
        </FlatList>
    );
}
