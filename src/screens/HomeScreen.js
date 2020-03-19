import * as React from 'react'
import * as RootNavigation from '../navigation/RootNavigator'

import HomeLayout from '../layouts/HomeLayout'


export function navigateToScreen(screenId) {
    RootNavigation.navigate(screenId)
}

export default class HomeScreen extends React.Component {

    render() {
        return (
            <HomeLayout></HomeLayout>
        )
    }

}