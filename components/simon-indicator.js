import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {connect} from 'react-redux';

export class SimonIndicator extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    let litStatus;
    const lit = styles.simonLit;
    const unlit = styles.simonUnlit;

    let simonText = '';
    if(this.props.gameLost){
      simonText = 'Game\nOver!';
      litStatus = unlit;
    }else if(!this.props.gameStart){
      simonText = 'Press\nNew\nGame';
      litStatus = unlit;
    }else if(this.props.isSimonReading){
      simonText = 'Simon\nSays...';
      litStatus = this.props.litItem && this.props.sequenceBuffer.front().simonSaid 
        ? lit : unlit;
    }else{
      simonText = 'Your\nTurn!';
      litStatus = lit;
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
    borderColor: '#442C06',
    borderWidth: 3,
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
    color: '#442C06',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16
  }
});

const mapStateToProps = state => {
  return{
    gameStart: state.gameStart,
    gameLost: state.gameLost,
    litItem: state.litItem,
    isSimonReading: state.isSimonReadingSequence,
    sequenceBuffer: state.sequenceBuffer
  };
};

export default connect(mapStateToProps)(SimonIndicator);