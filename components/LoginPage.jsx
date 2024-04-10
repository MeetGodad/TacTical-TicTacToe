import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TextInput, TouchableOpacity} from 'react-native';
import { Input, Button, Image } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginPage = ({ navigation }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = async () => {
    try {
      // Retrieve user data from AsyncStorage
      const storedEmail = await AsyncStorage.getItem('email');
      const storedPassword = await AsyncStorage.getItem('password');
  
      // Validate user input
      if (email.trim().toLowerCase() !== storedEmail.trim().toLowerCase() || password !== storedPassword) {
        alert('Invalid email or password.');
        return;
      }
  
      // Navigate to the next screen upon successful login
      navigation.navigate('AppMenu');

      setEmail('');
      setPassword('');

    } catch (error) {
      console.error('Error logging in:', error);
    }


  };

  return (
    <View style={ styles.loginPage}>
      <ImageBackground source={require('../images/background.png')} style={styles.backgroundImage}>
      <Image source={require('../images/Group3.png')} style={ styles.nameLogo} />
      <Text style={styles.logIn}>
        <Text style={styles.logInTxtContainer}>
          <Text style={styles.log}>{`Log `}</Text>
          <Text style={styles.in}>In</Text>
        </Text>
      </Text>
      <TextInput
        style={styles.emailInput}
        placeholder="Email Address" 
        placeholderTextColor={'#fff'}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.passwordInput}
        placeholder="Password"
        placeholderTextColor={'#fff'}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={{...styles.button,backgroundColor: 'darkblue', borderRadius: 16}} onPress={handleLogin} type="clear">
        <Text style={{...styles.buttonTitle, color: 'white', fontSize: 20}}>Countinue</Text>
      </TouchableOpacity>
      <TouchableOpacity
          style={styles.signupButton}
          onPress={() => navigation.navigate('SignupPage')}
          type="clear">
          <Text style={{...styles.signupText, color:'red'}}>
            Do not have an account? Sign Up
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  loginPage:{
    flex: 1,
    backgroundColor: '#001848',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button:{
    bottom:50,
    width: 300,
    left: 45,
    height: 58,
    borderRadius: 50,
    backgroundColor: "darkblue",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTitle:{
    fontSize: 25,
    fontWeight: "700",
    fontFamily: "Bold",
    color: "#FFF",
    textAlign: "center",
  },
  emailInput: {
    top: -100,
    borderRadius: 50,
    backgroundColor: 'darkblue',
    color: '#fff',
    left: 25,
    fontSize:25,
    width: 332,
    height: 58,
    fontWeight: "700",
    fontFamily: "Bold",
    textAlign: "center",
    display:"flex",
    height: 58,
    justifyContent: "center",
  },
  passwordInput: {
    top: -80,
    left:30,
    borderRadius: 50,
    backgroundColor: "darkblue",
    color: '#fff',
    fontSize:25,
    width: 332,
    height: 58,
    fontWeight: "700",
    fontFamily: "Bold",
    textAlign: "center",
    display: "flex",
    justifyContent: "center", 
  },
  logIn: {
    top: 50,
    left: 15,
    fontSize: 35,
    lineHeight: 30,
    fontWeight: "700",
    fontFamily: "Inter-Bold",
    width: 154,
    height: 200,
    textAlign: "center",
    fontStyle: "italic",
    alignItems: "center",
    display: "flex",
  },
  in: {
    color: "#0086f4",
  },
  log: {
    color: "#e94141",
  },
  nameLogo: {
    width: 300,
    height: 200,
    alignSelf: 'center',
    marginTop: 50,
    left:40,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  signupButton: {
    marginTop:10,
    bottom: 45,
    width: 332,
    height: 58,
    left: 30,
    right: 15,
    borderRadius: 50,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "darkblue",
    justifyContent: "center",
    alignItems: "center",
  },
  signupText: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Jura-Bold",
    color: "#FFF",
    textAlign: "center",
  },
});

export default LoginPage;
