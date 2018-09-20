import React from 'react';
import { StyleSheet, View } from 'react-native';
import {connect} from 'react-redux';

import {
  setTurnSimon,
  setTurnPlayer,
  refreshSequenceBuffer,
  dequeueSequenceBuffer,
  setLitItem,
  unsetLitItemDequeueBuffer
} from '../actions/game';

import Button from './button';
import SimonIndicator from './simon-indicator';

export class GameBoard extends React.Component {


  componentDidUpdate(prevProps){
    if(this.props.gameStart){

      //SIMON TURN
      if(!prevProps.isSimonReadingSequence && this.props.isSimonReadingSequence){
        //swap from user turn to simon turn
        setTimeout(()=> this.props.refreshSequenceBuffer(), 200);
      }else if(this.props.isSimonReadingSequence && this.props.nextBufferItem){
        //simon is currently repeating the sequence
        if(!this.props.litItem){
          const nextItem = this.props.nextBufferItem;
          setTimeout(()=> this.props.setLitItem(nextItem.color), 100);
        }else{
          setTimeout(()=> this.props.unsetLitItemDequeueBuffer(), 550);
        }
      }else if(this.props.isSimonReadingSequence && !this.props.nextBufferItem){
        //simon set to repeat sequence, but has no more items. May need to wait for unlit to clear first
        if(!this.props.litItem){
          this.props.setTurnPlayer();
        }
      }

      //USER TURN
      if(prevProps.isSimonReadingSequence && !this.props.isSimonReadingSequence){
          this.props.refreshSequenceBuffer();
      }
      else if(!this.props.isSimonReadingSequence && !this.props.nextBufferItem){
        //currently set to user input, but user has repeated everything in buffer
        this.props.setTurnSimon();
      }

    }
  }

  render() {
    console.log('\n\n========================================\n');
    console.log('Hello squirrels');
    console.log(this.props);

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
    backgroundColor: '#222222',
    alignItems: 'center',
    justifyContent: 'center'
  }
});


const mapStateToProps = state => {
  return{
    isSimonReadingSequence: state.isSimonReadingSequence,
    sequence: state.sequence.viewQueue(),
    sequenceBuffer: state.sequenceBuffer.viewQueue(),
    nextBufferItem: state.sequenceBuffer.front(),
    litItem: state.litItem,
    gameStart: state.gameStart,
    gameLost: state.gameLost
  };
};

const mapDispatchToProps = {
  setTurnSimon,
  setTurnPlayer,
  refreshSequenceBuffer,
  dequeueSequenceBuffer,
  setLitItem,
  unsetLitItemDequeueBuffer
  
};

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);
