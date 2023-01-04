import React from 'react';
import {StatusBar, View} from 'react-native';
import {Layout} from './src/Layout';
import {Provider} from 'react-redux';
import {store} from './src/redux';

const App = () => {
  return (
    <Provider store={store}>
      <View>
        <Layout />
        <StatusBar theme="auto" />
      </View>
    </Provider>
  );
};

export default App;
