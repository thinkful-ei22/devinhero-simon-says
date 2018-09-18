import React from 'react';
import { StyleSheet, View, Text,} from 'react-native';
import GameBoard from './components/game-board';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
    };
  }

  render() {
    return (
      <View style={styles.container}> 
        <View>
          <Text>Simon Sez</Text>
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
  },
  gameBoard: {
    height: 350,
    width: 350,
    padding: 10,
    backgroundColor: '#222',
  }
  


});
