import * as React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { WebView } from 'react-native-webview';

import * as Styles from '../styles/Styles'
import * as Components from '../components/Components'

const title = ""

const buttonStyle = {
    flex: 1, maxWidth: 40, alignItems: 'center', justifyContent: 'center'
}
function ArrowIcon(props) {
    return (
        <Components.IconComponent
            name={props.name}
            size={30}
            color={Styles.colors.darkBlue}
        />
    )
}

function ActivityIndicationComponent() {
    return (
        <ActivityIndicator
            color={Styles.colors.darkBlue}
            size='large'
            style={{ flex: 1 }}
        />
    )
}

export default class TestingKitScreen extends React.Component {

    render() {


        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{ flex: 1 }}>
                    <WebView
                        source={{ uri: 'https://www.shl.uk/' }}
                        startInLoadingState={true}
                        renderLoading={() => (ActivityIndicationComponent())}
                    />
                </View>
                <View style={{ flex: 1, maxHeight: 40, flexDirection: 'row', paddingHorizontal: 16 }}>
                    <View style={buttonStyle} >
                        <ArrowIcon
                            name='arrow-back'
                        />
                    </View>
                    <View style={buttonStyle}>
                        <ArrowIcon
                            name='arrow-forward' />
                    </View>
                </View>
            </View>
        )
    }
}