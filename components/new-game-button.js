import React from 'react';
import { StyleSheet, View, Text, Button} from 'react-native';
import GameBoard from './game-board';

import {
  resetGame
} from '../actions/game';
import {connect} from 'react-redux';

export class NewGameButton extends React.Component {

  render() {
    return (
      <Button 
        title='New Game'
        disabled={this.props.isReading}
        onPress={()=>{
          this.props.resetGame();
        }}
      />
    );
  }
}

const mapStateToProps = state => {
  return{
    isReading: state.isSimonReadingSequence
  };
};

const mapDispatchToProps = {
  resetGame
};

export default connect(mapStateToProps, mapDispatchToProps)(NewGameButton);