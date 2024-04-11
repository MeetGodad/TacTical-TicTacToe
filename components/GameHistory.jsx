import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const GameHistory = ({ navigation }) => {
  const [recentGame, setRecentGame] = useState(null);

  useEffect(() => {
    fetchRecentGame();
  }, []);

  const fetchRecentGame = async () => {
    try {
      const gameData = await AsyncStorage.getItem('recentGame');
      if (gameData !== null) {
        setRecentGame(JSON.parse(gameData));
      }
    } catch (error) {
      console.error('Error fetching recent game:', error);
    }
  };

  const handleRecentGamePress = () => {
    navigation.navigate('GameResult', {
      winner: recentGame?.winner || 'No Winner', 
    });
  };

  return (
    <View style={styles.gameHistory} >
      <ImageBackground source={require('../images/background.png')} resizeMode='cover' style={styles.backgroundImage}>
      <Image source={require('../images/Group3.png')} style={ styles.nameLogo}/>
      <Text style={styles.SignUp}>
        <Text style={styles.Game}>{`Game`}</Text>
        <Text style={styles.History}> History</Text>
      </Text>
        <View style={styles.container}>
          {recentGame ? (
            <TouchableOpacity onPress={handleRecentGamePress} style={styles.button}>
              <Text style={styles.buttonText}>Last Game Winner : {recentGame.winner}</Text>
            </TouchableOpacity>
          ) : (
            <Text style={styles.text}>No history available.</Text>
          )}
        </View>
      </ImageBackground>
    </View>
  );
};

export default GameHistory;

const styles = StyleSheet.create({
  gameHistory: {
    flex:1,
    backgroundColor: '#001848',
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#f7b731',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 27.5,
    color: '#003190',
    fontWeight: 'bold',

  },
  text: {
    fontSize: 18,
    color: '#fff',
  },
  nameLogo: {
    width: 300,
    height: 200,
    alignSelf: 'center',
    top: 29,
  },
  Game: {
    color: "#0086f4",
  },
  History: {
    color: "#e94141",
  },
  SignUp: {
    top:70,
    left: 80,
    fontSize: 40,
    fontWeight: "700",
    fontFamily: "Inter-Bold",
    width: 250,
    height: 50,
    textAlign: "center",
    fontStyle: "italic",
    alignItems: "center",
    display: "flex",
  },
});