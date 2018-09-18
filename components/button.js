import React from 'react';
import { StyleSheet, View,  ScrollView, Image, Text, TouchableOpacity  ,  Alert } from 'react-native';

export default class Button extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const color = this.props.color;
    const unlit = `${color}Unlit`;
    return (
          <View style={[styles.buttonContainer, styles[color]]}>
            <TouchableOpacity  
              style={[styles.touchable, styles[unlit]]}
              onPress={() =>{
                
              }}
            >
              <Text>{color}</Text>
            </TouchableOpacity >
          </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    height: 150,
    width: 150,
  },
  touchable:{
    height: 150,
    width: 150
  },
  green: {
    top: 10,
    left: 10,
    backgroundColor: '#55AA55'
  },
  greenUnlit:{
    backgroundColor: '#225522',
  },
  
  red: {
    top: 10,
    right: 10,
    backgroundColor: '#CC3333'
  },
  redUnlit:{
    backgroundColor: '#552222',
  },

  yellow: {
    bottom: 10,
    left: 10,
    backgroundColor: '#D9E21D'
  },
  yellowUnlit:{
    backgroundColor: '#6B752E'
  },

  blue:{
    bottom: 10,
    right: 10,
    backgroundColor: '#7777DD'
  },
  blueUnlit:{
    backgroundColor: '#333366'
  }

});
