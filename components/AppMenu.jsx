import React from 'react';
import { View , Image , ImageBackground} from 'react-native';
import { List, Item, Accordion } from 'react-native-paper';
import { StyleSheet } from 'react-native';

export default function AppMenu ({ navigation }) {
  return (
    <View style={ styles.appMenu}>
      <ImageBackground source={require('../images/background.png')} resizeMode='cover' style={styles.backgroundImage}>
      <Image source={require('../images/Group3.png')} style={ styles.nameLogo} />
      <List.Section  >
        <List.Item title="New Game" style={ styles.listOption} onPress={() => navigation.navigate('GameBoard')} />
        <List.Item title="Game History" style={ styles.listOption}  onPress={() => navigation.navigate('GameHistory')} />
        <List.Item title="Settings" style={ styles.listOption}  onPress={() => navigation.navigate('Settings')} />
      </List.Section>
      </ImageBackground>
    </View>
  );
};


const styles = StyleSheet.create({
  appMenu: {
    backgroundColor: '#001848',
    width: '100%',
    height: '100%'
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  
  nameLogo: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginBottom: 50,
  },

  listOption: {
    top: 0,
    left: 10,
    borderRadius: 50,
    margin : 10,
    backgroundColor: "#f7b731",
    width: 332,
    height: 58,
    fontWeight: "700",
    fontFamily: "Jura-Bold",
    color: "#000",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
  }
});