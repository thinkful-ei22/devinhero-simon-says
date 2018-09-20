import React from 'react';
import { StyleSheet, View } from 'react-native';
import {connect} from 'react-redux';

import {
  beginGame,
  setTurnSimon,
  setTurnPlayer,
  refreshSequenceBuffer,
  setLitItem,
  unsetLitItemDequeueBuffer
} from '../actions/game';

import Button from './button';
import SimonIndicator from './simon-indicator';

export class GameBoard extends React.Component {


  componentDidUpdate(prevProps){

    if(this.props.gameDidReset){
      this.props.beginGame();
    }else if(this.props.gameStart){

      //SIMON TURN
      if(!prevProps.isSimonReadingSequence && this.props.isSimonReadingSequence){
        setTimeout(()=> this.props.refreshSequenceBuffer(), 200);
      
      }else if(this.props.isSimonReadingSequence && this.props.nextBufferItem){
        if(!this.props.litItem){
          const nextItem = this.props.nextBufferItem;
          setTimeout(()=> this.props.setLitItem(nextItem.color), 100);
        }else{
          setTimeout(()=> this.props.unsetLitItemDequeueBuffer(), 550);
        }

      }else if(this.props.isSimonReadingSequence && !this.props.nextBufferItem){
        this.props.setTurnPlayer();
      }

      //USER TURN
      if(prevProps.isSimonReadingSequence && !this.props.isSimonReadingSequence){
        this.props.refreshSequenceBuffer();
      }
      else if(!this.props.isSimonReadingSequence && !this.props.nextBufferItem){
        this.props.setTurnSimon();
      }
    }
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
    borderWidth: 5,
    borderRadius: 150,
    backgroundColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center',
  }
});


const mapStateToProps = state => {
  return{
    isSimonReadingSequence: state.isSimonReadingSequence,
    nextBufferItem: state.sequenceBuffer.front(),
    litItem: state.litItem,
    gameStart: state.gameStart,
    gameLost: state.gameLost,
    gameDidReset: state.didReset
  };
};

const mapDispatchToProps = {
  beginGame,
  setTurnSimon,
  setTurnPlayer,
  refreshSequenceBuffer,
  setLitItem,
  unsetLitItemDequeueBuffer
  
};

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);
