import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import NavigationStack from './src/navigation/NavigationStack'

import { store } from './src/navigation/store'

import { Provider } from 'react-redux'
import * as actions from './src/actions/actions';

function fetchDATA() {
  store.dispatch(actions.fetchDataAppointments())
  store.dispatch(actions.fetchDataOrganisations())
  store.dispatch(actions.fetchDataClinics())
  store.dispatch(actions.fetchDataInfections())
}

const App: () => React$Node = () => {
  fetchDATA()
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationStack></NavigationStack>
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({

});

export default App;
