import React from 'react';
import { StyleSheet, View, Text, Button} from 'react-native';
import GameBoard from './game-board';

import {
  resetGame,
  addSequenceItem,
  refreshSequenceBuffer,
  dequeueSequenceBuffer
} from '../actions/game';
import {gameReducer} from '../reducers/game';
import {connect} from 'react-redux';

export class Main extends React.Component {
  constructor(props){
    super(props);
    this.state={
    };
  }

  render() {
    console.log('Hello squirrels');
    console.log(this.props);
    return (
      <View style={styles.container}> 
        <View>
          <Text>Simon Says</Text>
        </View>
        <Button 
          title='Reset'
          onPress={()=>{
            this.props.resetGame();
          }}
        />
        <GameBoard/>
        <Button 
          title='Add Item'
          onPress={()=>{
            this.props.addSequenceItem();
            this.props.refreshSequenceBuffer();
          }}
        />

        <Button 
          title='Refresh Buffer'
          onPress={()=>{
            this.props.refreshSequenceBuffer();
          }}
        />

        <Button 
          title='Dequeue Buffer'
          onPress={()=>{
            this.props.dequeueSequenceBuffer();
          }}
        />


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
  }
});

const mapStateToProps = state => {
  return{
    sequence: state.sequence.viewQueue(),
    buffer: state.sequenceBuffer.viewQueue()
  };
};

const mapDispatchToProps = {
  resetGame,
  addSequenceItem,
  refreshSequenceBuffer,
  dequeueSequenceBuffer
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);