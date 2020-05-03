import * as React from 'react'
import { View } from 'react-native'

import ScreenLayout from '../layouts/ScreenLayout'
import ServicesLayout from '../layouts/ServicesLayout'


TITLE = "LGBT websites"

export default function ServicesScreen() {
    return (
        <ScreenLayout
            body={ServicesLayout()}
            title={TITLE}>
        </ScreenLayout>
    )
}