import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Settings({ navigation }) {
  const [player1Name, setPlayer1Name] = useState('');
  const [player2Name, setPlayer2Name] = useState('');

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

  const savePlayerNames = async () => {
    try {
      await AsyncStorage.setItem('player1Name', player1Name);
      await AsyncStorage.setItem('player2Name', player2Name);
      navigation.navigate('AppMenu');
    } catch (error) {
      console.error('Error saving player names to AsyncStorage:', error);
    }
  };

  return (
    <ImageBackground source={require('../images/background.png')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.set}>
          <Text style={styles.setTxtContainer}>
            <Text style={styles.sett}>{`Sett`}</Text>
            <Text style={styles.ings}>ings</Text>
          </Text>
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Player 1 Name"
          placeholderTextColor="#fff" // Text color
          value={player1Name}
          onChangeText={setPlayer1Name}
        />
        <TextInput
          style={styles.inputi}
          placeholder="Player 2 Name"
          placeholderTextColor="#fff" // Text color
          value={player2Name}
          onChangeText={setPlayer2Name}
        />
        <TouchableOpacity style={styles.saveButton} onPress={savePlayerNames}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000', // Text color
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '80%',
    backgroundColor: '#fff', // Background color
    color: '#000', // Text color
  },
  saveButton: {
    backgroundColor: '#f7b731',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop:20,
  },
  saveButtonText: {
    color: '#003190',
    fontSize: 18,
    fontWeight: 'bold',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#001848',
  },
  set: {
    top: 50,
    left: 15,
    fontSize: 40,
    lineHeight: 40,
    fontWeight: "700",
    fontFamily: "Inter-Bold",
    width: 175,
    height: 175,
    textAlign: "center",
    fontStyle: "italic",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  },
  sett: {
    color: "#0086f4",
  },
  ings: {
    color: "#e94141",
  },
  input: {
    borderRadius: 50,
    backgroundColor: 'darkblue',
    color: '#fff',
    fontSize:25,
    width: 300,
    height: 58,
    fontWeight: "700",
    fontFamily: "Bold",
    textAlign: "center",
    display:"flex",
    height: 58,
    justifyContent: "center",
    marginTop: 20,
  },
  inputi: {
    borderRadius: 50,
    backgroundColor: 'darkblue',
    color: '#fff',
    fontSize:25,
    width: 300,
    height: 58,
    fontWeight: "700",
    fontFamily: "Bold",
    textAlign: "center",
    display:"flex",
    height: 58,
    justifyContent: "center",
    marginTop: 20,
  },
});
