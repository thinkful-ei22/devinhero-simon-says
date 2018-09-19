import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {connect} from 'react-redux';

export class SimonIndicator extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const litStatus = this.props.gameStart
      ? styles.simonLit
      : styles.simonUnlit;

    let simonText = '';
    if(this.props.gameLost){
      simonText = 'Game Over!';
    }else if(!this.props.gameStart){
      simonText = 'Press\nNew\nGame';
    }else if(this.props.isSimonReading){
      simonText = 'Simon\nSays...';
    }else{
      simonText = 'Your\nTurn!';
    }

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
    backgroundColor: '#EEA62B'
  },
  simonText:{
    textAlign: 'center'
  }
});

const mapStateToProps = state => {
  return{
    gameStart: state.gameStart,
    gameLost: state.gameLost,
    isSimonReading: state.isSimonReadingSequence,
    sequenceBuffer: state.sequenceBuffer
  };
};

export default connect(mapStateToProps)(SimonIndicator);