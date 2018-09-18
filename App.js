import React from 'react';
import { StyleSheet, View,  ScrollView, Image, Text, TouchableOpacity  ,  Alert } from 'react-native';
import Button from './components/button';

export default class App extends React.Component {
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
      <View style={styles.container}> 
        <View>
          <Text>Simon Sez</Text>
        </View>
        <View style={styles.gameBoard}>

          <Button color='green'/>
          <Button color='red'/>
          <Button color='yellow'/>
          <Button color='blue'/>

          

          
          {/* <Button title='RED'/>
          <Button title='YELLOW'/>
          <Button title='BLUE'/> */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gameBoard: {
    height: 350,
    width: 350,
    padding: 10,
    backgroundColor: '#222',
  },
  buttonContainer: {
    height: 150,
    width: 150,
  },
  greenLit: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#5A5'
  },
  greenUnlit:{
    height: 150,
    width: 150,
    backgroundColor: '#252',
  },
  
  redLit: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#C33'
  },
  redUnlit:{
    height: 150,
    width: 150,
    backgroundColor: '#522',
  },
  


});
