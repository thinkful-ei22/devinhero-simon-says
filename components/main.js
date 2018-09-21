import React from 'react';
import { StyleSheet, View, Text, Button} from 'react-native';

import GameBoard from './game-board';
import NewGameButton from './new-game-button';

import {connect} from 'react-redux';

export class Main extends React.Component {
  constructor(props){
    super(props);
    
  }

  render() {
    // console.log('\n\n========================================\n');
    // console.log('Hello squirrels');
    // console.log(this.props);

    return (
      <View style={styles.container}> 
        <View style={styles.containerChild}>
          <Text style={styles.title}>Simon Says</Text>
        </View>
        <View style={styles.containerChild}>
          <NewGameButton/>
        </View>
        <View style={styles.containerChild}>
          <GameBoard/>
        </View>
        <View>
          <View style={styles.scoreboard}>
            <View><Text>Score: {this.props.curScore}</Text></View>
            <View><Text>Best: {this.props.maxScore}</Text></View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#666666',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerChild:{
    margin: 10
  },
  title:{
    fontSize: 22
  },
  containerBoard:{
    // flex: 1
  },
  scoreboard: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  scoreboardItem:{
    height: 20
  }
});

const mapStateToProps = state => {
  return{
    curScore: state.curScore,
    maxScore: state.maxScore,
    
    // everything: state
  };
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);