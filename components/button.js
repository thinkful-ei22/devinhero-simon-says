import React from 'react';
import { StyleSheet, View, TouchableOpacity} from 'react-native';

import {
  endGame,
  dequeueSequenceBufferToValid
} from '../actions/game';

import {connect} from 'react-redux';


export class Button extends React.Component {
  constructor(props){
    super(props);
  }

  userInput(color){
    if(color === this.props.nextItem.color){
      this.props.dequeueSequenceBufferToValid();
    }else{
      this.props.endGame();
    }
  }

  render() {
    const color = this.props.color;
    let unlit = '';
    if(color !== this.props.litItem)
      unlit = styles[`${color}Unlit`];
    
    return (
      <View style={[styles.buttonContainer, styles[color]]}>
        <TouchableOpacity  
          style={[styles.touchable, unlit]}
          onPress={() =>{
            if(this.props.gameStart && this.props.isPlayerTurn)
              this.userInput(color);
          }}
        >
        </TouchableOpacity >
      </View>
    );
  }
}

const buttonAbsPosDist = 15;
const singleBorderRadius = 150;
const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    borderColor: 'black',
    borderWidth: 5,
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
    borderColor: '#112211',
    borderTopLeftRadius: singleBorderRadius,
    backgroundColor: '#55AA55'
  },
  greenUnlit:{
    backgroundColor: '#225522',
  },
  
  red: {
    top: buttonAbsPosDist,
    right: buttonAbsPosDist,
    borderColor: '#221111',
    borderTopRightRadius: singleBorderRadius,
    backgroundColor: '#CC3333'
  },
  redUnlit:{
    backgroundColor: '#552222',
  },

  yellow: {
    bottom: buttonAbsPosDist,
    left: buttonAbsPosDist,
    borderBottomLeftRadius: singleBorderRadius,
    borderColor: '#232303',
    backgroundColor: '#D9E21D'
  },
  yellowUnlit:{
    backgroundColor: '#6B752E'
  },

  blue:{
    bottom: buttonAbsPosDist,
    right: buttonAbsPosDist,
    borderBottomRightRadius: singleBorderRadius,
    borderColor: '#111133',
    backgroundColor: '#7777DD'
  },
  blueUnlit:{
    backgroundColor: '#333366'
  }
});

const mapStateToProps = state => {
  return{
    gameStart: state.gameStart,
    isPlayerTurn: !state.isSimonReadingSequence,
    nextItem: state.sequenceBuffer.front(),
    litItem: state.litItem
  };
};

const mapDispatchToProps = {
  endGame,
  dequeueSequenceBufferToValid,
};

export default connect(mapStateToProps, mapDispatchToProps)(Button);
