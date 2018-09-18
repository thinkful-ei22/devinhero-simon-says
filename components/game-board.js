import React from 'react';
import { StyleSheet, View } from 'react-native';
import Button from './button';
import SimonIndicator from './simon-indicator';

export default class GameBoard extends React.Component {
  constructor(props){
    super(props);
    this.state={
      whatToKnow: 'if this is Battletoads',
      green: 0,
      red: 0,
    };
  }

  render() {
    return (
      <View style={styles.gameBoard}>
        <Button color='green'/>
        <Button color='red'/>
        <Button color='yellow'/>
        <Button color='blue'/>
        <SimonIndicator/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  gameBoard: {
    height: 350,
    width: 350,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center'
  }
});


