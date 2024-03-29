import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
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
    // Navigate to the GameResult screen with the recent game data
    navigation.navigate('GameResult', {
      winner: recentGame.winner,
      // Pass other necessary data here if needed
    });
  };

  return (
    <ImageBackground source={require('../images/background.png')} resizeMode='cover' style={styles.backgroundImage}>
      <View style={styles.container}>
        {recentGame ? (
          <TouchableOpacity onPress={handleRecentGamePress} style={styles.button}>
            <Text style={styles.buttonText}>View Recent Game: {recentGame.winner}</Text>
          </TouchableOpacity>
        ) : (
          <Text style={styles.text}>No history available.</Text>
        )}
      </View>
    </ImageBackground>
  );
};

export default GameHistory;

const styles = StyleSheet.create({
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
    fontSize: 18,
    color: '#001848',
    fontWeight: 'bold',
  },
  text: {
    fontSize: 18,
    color: '#fff',
  },
});