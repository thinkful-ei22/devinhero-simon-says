import React from 'react';
import { StyleSheet, View, Text,} from 'react-native';
import Main from './components/main';

//create store
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {gameReducer} from './reducers/game';

const store = createStore(gameReducer);

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <Main/>
      </Provider>
    );
  }
}
