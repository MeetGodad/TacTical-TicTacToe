// GameBoard.js

import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, Image, ImageBackground, StyleSheet } from 'react-native';
import GameResult from './GameResult';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';

const GameBoard = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [winner, setWinner] = useState("NO WINNER YET");
  const [cellStates, setCellStates] = useState(Array(9).fill(false));
  const navigation = useNavigation();

  const [player1Name, setPlayer1Name] = useState('Player 1');
  const [player2Name, setPlayer2Name] = useState('Player 2');

  useEffect(() => {
    loadPlayerNames();
  }, []);

  const loadPlayerNames = async () => {
    try {
      const storedPlayer1Name = await AsyncStorage.getItem('player1Name');
      const storedPlayer2Name = await AsyncStorage.getItem('player2Name');
      if (storedPlayer1Name !== null) {
        setPlayer1Name(storedPlayer1Name);
      }
      if (storedPlayer2Name !== null) {
        setPlayer2Name(storedPlayer2Name);
      }
    } catch (error) {
      console.error('Error loading player names from AsyncStorage:', error);
    }
  };

  const resetBoard = () => {
    setBoard(Array(9).fill(null));
    setCellStates(Array(9).fill(false));
    setCurrentPlayer('X');
    setWinner("NO WINNER YET");
  };

  const handleCellPress = (index) => {
    const newCellStates = [...cellStates];
    newCellStates[index] = true;
    setCellStates(newCellStates);

    const newBoard = [...board];
    if (newBoard[index] === null) {
      newBoard[index] = currentPlayer;
      setBoard(newBoard);
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');

      const gameWinner = checkWinner(newBoard);
      if (gameWinner) {
        setWinner(gameWinner);
        navigation.navigate('GameResult', { winner: gameWinner, resetBoard }); // Pass the winner to GameResult
        return; // Return early after navigation
      }

      const tie = !newBoard.includes(null);
      if (tie) {
        setWinner('Tie');
        navigation.navigate('GameResult', { winner: tie, resetBoard }); // Pass 'Tie' as winner to GameResult
        return; // Return early after navigation
      }
    }
  };

  const checkWinner = (board) => {
    // Check rows
    for (let i = 0; i <= 6; i += 3) {
      if (board[i] !== null && board[i] === board[i + 1] && board[i] === board[i + 2]) {
        return board[i];
      }
    }

    // Check columns
    for (let i = 0; i <= 2; i++) {
      if (board[i] !== null && board[i] === board[i + 3] && board[i] === board[i + 6]) {
        return board[i];
      }
    }

    // Check diagonals
    if (board[0] !== null && board[0] === board[4] && board[0] === board[8]) {
      return board[0];
    }

    if (board[2] !== null && board[2] === board[4] && board[2] === board[6]) {
      return board[2];
    }

    // Check if there's a tie
    if (!board.includes(null)) {
      return 'Tie';
    }

    // No winner yet
    return null;
  };

  return (
    <View style={styles.gameBoard}>
      <ImageBackground source={require('../images/background.png')} resizeMode='cover' style={styles.backgroundImage}>
        <View style={styles.container}>
          <Image source={require('../images/gamelogo.png')} style={styles.logo} />
          <View style={styles.groupContainer}>
            <View style={styles.rectangleGroup}>
              <View style={styles.groupItem} />
              <Text style={styles.o}>O</Text>
            </View>
            <Text style={styles.player1}>{player1Name}</Text>
          </View>
          <View style={styles.groupContainerX}>
            <View style={styles.rectangleGroupX}>
              <View style={styles.groupItemX} />
              <Text style={styles.X}>X</Text>
            </View>
            <Text style={styles.player2}>{player2Name}</Text>
          </View>
          <Button
            title="BACK TO MENU"
            radius={5}
            iconPosition="left"
            onPress={() => navigation.navigate('AppMenu')}
            type="solid"
            color="#f7b731"
            titleStyle={styles.backToMenuBtn}
            containerStyle={styles.backToMenuBtn1}
            buttonStyle={styles.backToMenuBtn2}
          />
          <View style={styles.row}>
            <TouchableOpacity style={[styles.cell, cellStates[0] ? styles.clickedCell : null]} onPress={() => handleCellPress(0)}>
              <Text style={styles.text}>{board[0]}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.cell, cellStates[1] ? styles.clickedCell : null]} onPress={() => handleCellPress(1)}>
              <Text style={styles.text}>{board[1]}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.cell, cellStates[2] ? styles.clickedCell : null]} onPress={() => handleCellPress(2)}>
              <Text style={styles.text}>{board[2]}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={[styles.cell, cellStates[3] ? styles.clickedCell : null]} onPress={() => handleCellPress(3)}>
              <Text style={styles.text}>{board[3]}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.cell, cellStates[4] ? styles.clickedCell : null]} onPress={() => handleCellPress(4)}>
              <Text style={styles.text}>{board[4]}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.cell, cellStates[5] ? styles.clickedCell : null]} onPress={() => handleCellPress(5)}>
              <Text style={styles.text}>{board[5]}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={[styles.cell, cellStates[6] ? styles.clickedCell : null]} onPress={() => handleCellPress(6)}>
              <Text style={styles.text}>{board[6]}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.cell, cellStates[7] ? styles.clickedCell : null]} onPress={() => handleCellPress(7)}>
              <Text style={styles.text}>{board[7]}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.cell, cellStates[8] ? styles.clickedCell : null]} onPress={() => handleCellPress(8)}>
              <Text style={styles.text}>{board[8]}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    position: "absolute",
    flex: 1,
    width: "100%",
    height: "100%",
    opacity: 0.8,
  },
  gameBoard: {
    position: "relative",
    borderRadius: 15,
    backgroundColor: "#001848",
    flex: 1,
    width: "100%",
    height: 823,
  },
  logo: {
    position: "absolute",
    marginTop: 11,
    marginLeft: 12,
    top: 0,
    left: 0,
    width: 80,
    height: 80,
  },
  container: {
    flex: 1,
    backgroundColor: '#001848',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  groupItem: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 15,
    backgroundColor: "#0086f4",
    width: 100,
    height: 100,
  },
  o: {
    position: "absolute",
    marginTop: -35,
    marginLeft: -35,
    top: "50%",
    left: "50%",
    fontSize: 70,
    lineHeight: 84,
    fontStyle: "italic",
    fontWeight: "800",
    fontFamily: "Inter-ExtraBold",
    color: "#e94141",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    height: 70,
  },
  rectangleGroup: {
    position: "absolute",
    top: 14,
    left: 29,
    width: 100,
    height: 100,
  },
  player1: {
    position: "absolute",
    marginTop: 40,
    marginLeft: -62,
    top: "50%",
    left: "50%",
    fontSize: 20,
    lineHeight: 24,
    fontStyle: "italic",
    fontWeight: "800",
    fontFamily: "Inter-ExtraBold",
    color: "#000",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 125,
    height: 33,
  },
  groupContainer: {
    position: "absolute",
    top: 130,
    left: 20,
    borderRadius: 15,
    backgroundColor: "#d9d9d9",
    width: 156,
    height: 166,
    overflow: "hidden",
  },
  groupItemX: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 15,
    backgroundColor: "#0086f4",
    width: 100,
    height: 100,
  },
  X: {
    position: "absolute",
    marginTop: -35,
    marginLeft: -35,
    top: "50%",
    left: "50%",
    fontSize: 70,
    lineHeight: 84,
    fontStyle: "italic",
    fontWeight: "800",
    fontFamily: "Inter-ExtraBold",
    color: "#e94141",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    height: 70,
  },
  rectangleGroupX: {
    position: "absolute",
    top: 14,
    left: 29,
    width: 100,
    height: 100,
  },
  player2: {
    position: "absolute",
    marginTop: 40,
    marginLeft: -62,
    top: "50%",
    left: "50%",
    fontSize: 20,
    lineHeight: 24,
    fontStyle: "italic",
    fontWeight: "800",
    fontFamily: "Inter-ExtraBold",
    color: "#000",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 125,
    height: 33,
  },
  groupContainerX: {
    position: "absolute",
    top: 130,
    right: 20,
    borderRadius: 15,
    backgroundColor: "#d9d9d9",
    width: 156,
    height: 166,
  },
  backToMenuBtn: {
    color: "#003190",
    fontSize: 15,
    fontWeight: "700",
    fontFamily: "Jura-Bold",
  },
  backToMenuBtn1: {
    left: "50%",
    marginTop: -365.5,
    top: "55%",
    position: "absolute",
  },
  backToMenuBtn2: {
    borderRadius: 50,
    width: 190,
    height: 41,
    backgroundColor: "#F7B731",
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  cell: {
    flex: 1,
    margin: 6,
    aspectRatio: 1.1,
    backgroundColor: 'white',
    borderColor: '#ccc',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  clickedCell: {
    backgroundColor: '#0086f4',
  },
  text: {
    fontSize: 50,
    color: "#e94141",
    fontWeight: 'bold',
  },
});

export default GameBoard;
