import * as React from "react"
import { View, Text, StyleSheet, TouchableOpacity, FlatList, } from 'react-native';
import * as DATA from "../screens/ClinicsScreen"
import * as Styles from '../styles/Styles'

const _ItemSeparatorComponent = () => {
    return (
        <View style={{ width: 16 }}></View>
    )
}
function Item(item, index, select, onSelect, ItemInterface, ParentFunction) {

    //console.log('carousel props', ParentFunction)

    return (
        <ItemInterface
            item={item}
            index={index}
            selected={select}
            onSelect={onSelect}
            ParentFunction={ParentFunction}
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
                Item(item, index, selected.get(item.id), onSelect, props.Item, props.ParentFunction)}
            keyExtractor={item => item.id}
            extraData={selected}
            ItemSeparatorComponent={_ItemSeparatorComponent}
            ListHeaderComponent={_ItemSeparatorComponent}
            ListFooterComponent={_ItemSeparatorComponent}
            style={{ paddingVertical: 16 }}>
        </FlatList>
    );
}
