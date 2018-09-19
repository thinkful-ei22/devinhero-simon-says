import React from 'react';
import { StyleSheet, View,  Text, TouchableOpacity  ,  Alert } from 'react-native';

export default class Button extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const color = this.props.color;
    const unlit = styles[`${color}Unlit`];
    
    return (
          <View style={[styles.buttonContainer, styles[color]]}>
            <TouchableOpacity  
              style={[styles.touchable, unlit]}
              onPress={() =>{
                
              }}
            >
              <Text style={{textAlign: 'center'}}>{color}</Text>
            </TouchableOpacity >
          </View>
    );
  }
}

const buttonAbsPosDist = 15;
const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
    overflow: 'hidden',
    height: 150,
    width: 150,
  },
  touchable:{
    height: '100%',
    width: '100%',
  },
  green: {
    top: buttonAbsPosDist,
    left: buttonAbsPosDist,
    backgroundColor: '#55AA55'
  },
  greenUnlit:{
    backgroundColor: '#225522',
  },
  
  red: {
    top: buttonAbsPosDist,
    right: buttonAbsPosDist,
    backgroundColor: '#CC3333'
  },
  redUnlit:{
    backgroundColor: '#552222',
  },

  yellow: {
    bottom: buttonAbsPosDist,
    left: buttonAbsPosDist,
    backgroundColor: '#D9E21D'
  },
  yellowUnlit:{
    backgroundColor: '#6B752E'
  },

  blue:{
    bottom: buttonAbsPosDist,
    right: buttonAbsPosDist,
    backgroundColor: '#7777DD'
  },
  blueUnlit:{
    backgroundColor: '#333366'
  }

});
