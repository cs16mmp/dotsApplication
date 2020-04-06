import React, { Component } from "react"
import { View, Image, Text, StyleSheet, FlatList, TouchableWithoutFeedback } from 'react-native';

import ClinicCardComponent from "./cards/ClinicCardComponent";

import * as DATA from "../screens/ClinicsScreen"

export default function ClinicsCarouselComponent() {

    return (
        <FlatList
            horizontal={true}
            data={DATA.CLINICS_DATA}
            renderItem={({ item }) => (

                <ClinicCardComponent
                    overlayString={item.overlay}
                    titleString={item.name}
                    phoneNumberString={item.phoneNumber}
                    addressString={item.address}
                    id={item.id}
                />
            )}
            keyExtractor={item => item.id}
        />
    );
}

