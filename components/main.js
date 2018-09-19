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
        <Text>Green: {this.props.colors.green}</Text>
        <Text>Red: {this.props.colors.red}</Text>
        <Text>Yellow: {this.props.colors.yellow}</Text>
        <Text>Blue: {this.props.colors.blue}</Text>
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
    colors: state.colors
  };
};

const mapDispatchToProps = {
  gameReducer
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);