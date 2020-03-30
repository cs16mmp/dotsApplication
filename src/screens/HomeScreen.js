import * as React from 'react'

import HomeItemLayout from '../layouts/HomeItemLayout'
import ScreenLayout from '../layouts/ScreenLayout'

import * as Components from '../components/Components'

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
function List(DATA) {
    return (
        <Components.FlatListComponent
            DATA={DATA.Items}
            itemLayout={({ item }) => Item(item)}
            title="Home"
        />
    )
}
export default class HomeScreen extends React.Component {

    render() {
        return (
            <ScreenLayout
                body={List(DATA)}
                title="Döts">
            </ScreenLayout>
        )
    }

}