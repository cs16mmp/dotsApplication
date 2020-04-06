import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import NavigationStack from './src/navigation/NavigationStack'

import { store } from './src/navigation/store'

import { Provider } from 'react-redux'

//console.log(store.getState())

const App: () => React$Node = () => {
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
