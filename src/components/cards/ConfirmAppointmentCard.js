import * as React from 'react'
import { View, TouchableWithoutFeedback, Text, StyleSheet, ScrollView, Button, TextInput } from 'react-native'

import * as systemStyles from '../../styles/Styles'

import * as ClinicsScreen from '../../screens/ClinicsScreen'

function _dateToTime(date) {
    DATE = new Date(date)
    hours = DATE.getHours();
    minutes = DATE.getMinutes();
    return hours + ":" + minutes;
}

export default function ConfirmAppointmentCard(props) {

    const [value, onChangeText] = React.useState({
        id: "",
        clinic_id: "",
        name: "",
        description: "",
        phone: "",
        created_at: ""
    });

    return (
        <View style={styles.centeredView}>
            <ScrollView style={{ flex: 1, alignSelf: 'stretch', }}>
                <View style={styles.card}>
                    <View style={styles.buttons}>
                        <Button
                            color={systemStyles.colors.darkBlue}
                            title="Cancel"
                            onPress={() => { props.parentHandlePress() }}
                        />
                        <TouchableWithoutFeedback
                            onPress={() => { ClinicsScreen.addAppointment() }}>
                            <View style={systemStyles.button(80, 40)}>
                                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={systemStyles.text.headline6}>Done</Text>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                    <View style={styles.appointment}>
                        <Text style={styles.appointmentText}>{props.clinic}</Text>
                        <Text style={styles.appointmentText}>{_dateToTime(props.date)}</Text>
                    </View>
                    <View style={styles.small}>
                        <Text style={styles.text}>Name</Text>
                        <TextInput
                            style={styles.input}
                            autoCompleteType="name"
                            onChangeText={(text) => onChangeText({ ...value, name: text })}></TextInput>
                    </View>
                    <View style={styles.small}>
                        <Text style={styles.text}>Phone Number</Text>
                        <TextInput
                            style={styles.input}
                            autoCompleteType="tel"
                            onChangeText={(text) => onChangeText({ ...value, phone: text })}></TextInput>
                    </View>
                    <View style={styles.large}>
                        <Text style={styles.text}>Description</Text>
                        <TextInput
                            style={styles.input}
                            multiline
                            onChangeText={(text) => onChangeText({ ...value, description: text })}></TextInput>
                    </View>
                </View>
            </ScrollView>
        </View>
    )

}
const styles = StyleSheet.create({
    card: {
        flex: 1,
        alignSelf: 'stretch',
        maxHeight: 500,
        minHeight: 500,
        backgroundColor: '#FFFFFF',
        shadowColor: '#673939',
        shadowOpacity: .25,
        borderRadius: 12,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowRadius: 13,
        paddingBottom: 16,
        marginTop: 200,
        marginHorizontal: 24
    },
    centeredView: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: 'rgba(52, 52, 52, 0.8)'
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }, small: {
        flex: 1,
        maxHeight: 60,
        flexGrow: 1,
        marginTop: 16,
        marginHorizontal: 16,
    }, large: {
        flex: 1,
        flexGrow: 1,
        marginTop: 16,
        marginHorizontal: 16,
    }, input: {
        flex: 1,
        borderRadius: 12,
        borderColor: '#2C4159',
        borderWidth: 1,
        paddingLeft: 16
    }, text: {
        fontFamily: 'Avenir-Book',
        color: '#2C4159',
        paddingLeft: 12,
    }, buttons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 16,
        marginHorizontal: 16,
        minHeight: 40,
        maxHeight: 40,
    }, appointment: {
        flex: 1,
        backgroundColor: "#2C4159",
        minHeight: 60,
        maxHeight: 60,
        marginTop: 16,
        marginHorizontal: 16,
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        alignItems: 'center'
    }, appointmentText: {
        fontSize: 20,
        fontFamily: 'Avenir-Heavy',
        color: '#FFFFFF',
    }
});