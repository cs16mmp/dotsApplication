import * as React from 'react'
import { View } from 'react-native'

import ScreenLayout from '../layouts/ScreenLayout'
import InfectionsLayout from '../layouts/InfectionsLayout'

const TITLE = "STIs"

export default function InfectionsScreen() {
    return (
        <ScreenLayout
            body={InfectionsLayout()}
            title={TITLE}>
        </ScreenLayout>
    )
}