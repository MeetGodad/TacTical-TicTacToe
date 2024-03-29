import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity , Image , ImageBackground } from 'react-native';
import { StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const GameResult = ({ navigation, route }) => { 
  const { winner, resetBoard } = route.params;

  useEffect(() => {
    storeGameResult(winner);
  }, [winner]);
  
  const storeGameResult = async (winner) => {
    try {
      await AsyncStorage.setItem('recentGame', JSON.stringify({ winner }));
    } catch (error) {
      console.error('Error storing game result:', error);
    }
  };

  const onRestart = () => {
    resetBoard();
    navigation.navigate('GameBoard');
  };
  
  const winImage = require('../images/winnericon.png');
  const tieImage = require('../images/drawicon.png');

  return (
    <View style={ styles.gameResult} >
      <ImageBackground source={require('../images/background.png')} resizeMode='cover' style={styles.backgroundImage}>
        <Image source={winner === 'X' || winner ==='O' ? winImage : tieImage} style={ styles.image} />
        <Text style={ styles.winTxt }>
          {winner === 'X' || winner ==='O' ? `Player's ${winner} Wins ` : 'It\'s a tie!' }
        </Text>
        <TouchableOpacity style={ styles.plyAgainBtn} onPress={onRestart}>
          <Text style={ styles.againBtnTxt}>Play Again</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ styles.menuBtn} onPress={() => navigation.navigate('AppMenu')}>
          <Text style={ styles.menuTxt}>Menu</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default GameResult;


const styles = StyleSheet.create({ 

  gameResult: {
    backgroundColor: '#001848',
    width: '100%',
    height: '100%'
  },

  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  },
  
  image: {
    width: 300,
    height: 300,
    alignSelf: 'center',
    marginBottom: 20,
    
  },
  winTxt: {
    alignSelf: 'center',
    fontSize: 40,
    lineHeight: 48,
    fontStyle: "italic",
    fontWeight: "800",
    fontFamily: "Inter-ExtraBold",
    color: "#f7b731",
    textAlign: "center",
    marginBottom: 20,
  },
  
  plyAgainBtn: {
    position: 'absolute',
    top: 600,
    left: 20,
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: "#f7b731",
    width: 135,
    height: 41,
  },
  
  againBtnTxt: {
    fontSize: 15,
    fontWeight: "700",
    fontFamily: "Jura-Bold",
    color: "#003190",
    textAlign: "center",
  },
  
  menuBtn: {
    position: 'absolute',
    top: 600,
    right: 20,
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: "#f7b731",
    width: 135,
    height: 41,
  },
  menuTxt: {
    fontSize: 15,
    fontWeight: "700",
    fontFamily: "Jura-Bold",
    color: "#003190",
    textAlign: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: 80,
    height: 28,
  }

});
