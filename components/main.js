import React from 'react';
import { StyleSheet, View, Text, Button} from 'react-native';
import GameBoard from './game-board';

import {
  endGame,
  resetGame,
  addSequenceItem,
  refreshSequenceBuffer,
  dequeueSequenceBuffer
} from '../actions/game';
import {connect} from 'react-redux';

export class Main extends React.Component {
  constructor(props){
    super(props);
    
  }

  render() {
    console.log('\n\n========================================\n');
    console.log('Hello squirrels');
    console.log(this.props);

    return (
      <View style={styles.container}> 
        <View>
          <Text>Simon Says</Text>
        </View>
        <Button 
          title='New Game'
          onPress={()=>{
            this.props.resetGame();
          }}
        />
        <GameBoard/>
        <Text>Current Score: {this.props.curScore}</Text>
        <Text>Max Score: {this.props.maxScore}</Text>
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
    curScore: state.curScore,
    maxScore: state.maxScore,

    everything: state
  };
};

const mapDispatchToProps = {
  endGame,
  resetGame,
  addSequenceItem,
  refreshSequenceBuffer,
  dequeueSequenceBuffer
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);