import React, { Component } from 'react';
import { StyleSheet, View, StatusBar, SafeAreaView, Alert } from 'react-native';
import params from './params';
import {
  createMinedBoard,
  cloneBoard,
  openField,
  hadExplosion,
  wonGame,
  showMines,
  invertFlag,
  flagsUsed,
} from './functions';
import MineField from './components/MineField';
import Header from './components/Header';
import LevelSelection from './screens/LevelSelection';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = this.createState();
  }

  minesAmount = () => {
    const rows = params.getRowsAmount();
    const cols = params.getColumnsAmount();

    return Math.ceil(cols * rows * params.dificultLevel);
  };

  createState = () => {
    const rows = params.getRowsAmount();
    const cols = params.getColumnsAmount();

    return {
      board: createMinedBoard(rows, cols, this.minesAmount()),
      won: false,
      lost: false,
    };
  };

  onOpenField = (row, column) => {
    const board = cloneBoard(this.state.board);

    openField(board, row, column);
    const lost = hadExplosion(board);
    const won = wonGame(board);

    if (lost) {
      showMines(board);
      Alert.alert('Perdeu', 'Animal!!!');
    }

    if (won) {
      Alert.alert('Boaa', 'Meu guri');
    }

    this.setState({ board, lost, won });
  };

  onSelectField = (row, column) => {
    const board = cloneBoard(this.state.board);
    invertFlag(board, row, column);
    const won = wonGame(board);

    if (won) {
      Alert.alert('Boaa', 'Meu guri');
    }

    this.setState({ board, won });
  };

  onLevelSelected = level => {
    params.dificultLevel = level;
    this.setState(this.createState());
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <LevelSelection
          isVisible={this.state.showLevelSelection}
          onLevelSelected={this.onLevelSelected}
          onCancel={() => this.setState({ showLevelSelection: false })}
        />
        <Header
          flagsLeft={this.minesAmount() - flagsUsed(this.state.board)}
          onNewGame={() => this.setState(this.createState())}
          onFlagPress={() => this.setState({ showLevelSelection: true })}
        />
        <View>
          <View style={styles.board}>
            <MineField
              board={this.state.board}
              onOpenField={this.onOpenField}
              onSelectField={this.onSelectField}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#AAA',
  },
});

export default App;
