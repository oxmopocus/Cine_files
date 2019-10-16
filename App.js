import React from 'react';
import { StyleSheet, AsyncStorage, Text, View, FlatList } from 'react-native';
import { init } from '@rematch/core';
import { Provider } from 'react-redux';
import { app } from './models/appModel';
import AppNavigator from './navigation/AppNavigator';
import { API_KEY } from './utils/requestApi';

const store = init({
  models: { app },
});

export default function App() {
  return (
    <Provider store={store}>  
      <AppNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b7dbff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
