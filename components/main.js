import React from 'react';
import { StyleSheet, View, Text,} from 'react-native';
import GameBoard from './game-board';

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
        <GameBoard/>
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
  // let storedRepositories = state.repos.map(repo => ({ key: repo.id, ...repo }));
  // return {
  //   repos: storedRepositories
  // };
  return{
    testState: state
    // colors: state.game.colors
  };
};

const mapDispatchToProps = {
  gameReducer
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);