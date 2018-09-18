import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class SimonIndicator extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const litStatus = styles.simonUnlit;
    // const litStatus = styles.simonLit;

    let simonText = 'Simon\nSays...';
    simonText = 'Your\nTurn!';


    return(
      <View style={[styles.simonIndicator, litStatus]}>
        <Text style={styles.simonText}>{simonText}</Text>
      </View>
    );
  }

}


const styles = StyleSheet.create({
  simonIndicator: {
    height: 100,
    width: 100,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  simonUnlit:{
    backgroundColor: '#88570D',
  },
  simonLit: {
    backgroundColor: '#DDAF38'
  },
  simonText:{
    textAlign: 'center'
  }
});
