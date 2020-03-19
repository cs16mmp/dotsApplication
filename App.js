import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
} from 'react-native';
import NavigationStack from './src/navigation/NavigationStack'

const App: () => React$Node = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationStack></NavigationStack>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

});

export default App;
