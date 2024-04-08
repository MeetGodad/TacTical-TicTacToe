import React from 'react';
import { View , Image , ImageBackground} from 'react-native';
import { List, Item, Accordion } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

export default function AppMenu ({ navigation }) {
  return (
    <View style={ styles.appMenu}>
      <ImageBackground source={require('../images/background.png')} resizeMode='cover' style={styles.backgroundImage}>
      <Image source={require('../images/Group3.png')} style={ styles.nameLogo} />
      <Button
        title="Sign Out"
        radius={5}
        iconPosition="left"
        onPress={() => navigation.navigate('SignupPage')}
        type="solid"
        color="#f7b731"
        titleStyle={styles.backToMenuBtn}
        containerStyle={styles.backToMenuBtn1}
        buttonStyle={styles.backToMenuBtn2}
      />
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
    width: 300,
    height: 200,
    alignSelf: 'center',
    marginTop: 50,
  },

  listOption: {
    top: 0,
    left: 10,
    borderRadius: 50,
    margin : 10,
    backgroundColor: "#f7b731",
    width: 332,
    height: 58,
    fontSize:20,
    fontWeight: "700",
    fontFamily: "Jura-Bold",
    color: "#000",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
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
});