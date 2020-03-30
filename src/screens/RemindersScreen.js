import * as React from 'react'
import { View } from 'react-native'

import RemindersLayout from '../layouts/RemindersLayout'
import ScreenLayout from '../layouts/ScreenLayout'

export default class RemindersScreen extends React.Component {

    render() {
        return (
            <ScreenLayout
                body={RemindersLayout()}
                title="Reminders">
            </ScreenLayout>
        )
    }
}