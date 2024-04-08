import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, ImageBackground } from 'react-native';
import { Input, Button } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignupPage = ({ navigation }) => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSignup = async () => {
    try {
      // Validate input fields (you can add more validation logic here)
      if (!name || !email || !password) {
        alert('Please fill in all fields.');
        return;
      }

      // Store user data in AsyncStorage
      await AsyncStorage.setItem('name', name);
      await AsyncStorage.setItem('email', email);
      await AsyncStorage.setItem('password', password);

      // Navigate to the next screen (you can replace 'AppMenu' with your desired screen)
      navigation.navigate('AppMenu');
    } catch (error) {
      console.error('Error signing up:', error);
    }

    setName('');
    setEmail('');
    setPassword('');

  };

  return (
    <View style={styles.signUp} >
      <ImageBackground source={require('../images/background.png')} style={styles.background}>
      <Image source={require('../images/Group3.png')} style={ styles.nameLogo}/>
      <Text style={styles.SignUp}>
        <Text style={styles.logInTxtContainer}>
          <Text style={styles.sign}>{`Sign`}</Text>
          <Text style={styles.up}>Up</Text>
        </Text>
      </Text>
        <View style={styles.inputContainer}>
          <Input
            placeholder="Name"
            value={name}
            onChangeText={setName}
            inputStyle={styles.Input}
          />
          <Input
            placeholder="Email address"
            value={email}
            onChangeText={setEmail}
            inputStyle={styles.Input}
          />
          <Input
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            inputStyle={styles.Input}
          />
        </View>
        <TouchableOpacity style={styles.signUpButton} onPress={handleSignup} type="clear">
          <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate('LoginPage')}
          type="clear">
          <Text style={styles.loginText}>
            Already have an account? Log in
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  signUp: {
    flex: 1,
    backgroundColor: '#001848',
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage: {
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  inputContainer: {
    marginTop: 200,
    left: 20,
    right: 20,
    width: 370,
    height: 58,
  },
  Input: {
    top: 10,
    left:-5,
    right:-5,
    borderRadius: 50,
    backgroundColor: "darkblue",
    color: "#fff",
    fontSize: 25,
    fontWeight: "700",
    fontFamily: "Jura-Bold",
    justifyContent: "center",
    display:"flex",
  },
  signUpButton: {
    marginTop:200,
    left: 30,
    right: 15,
    width: 332,
    height: 58,
    borderRadius: 50,
    backgroundColor: "darkblue",
    justifyContent: "center",
    alignItems: "center",
  },
  signUpText: {
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "Jura-Bold",
    color: "#FFF"
  },
  loginButton: {
    marginTop: 20,
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
  loginText: {
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "Jura-Bold",
    color: "#FFF",
    height:60,
    textAlign: "center",
  },
  up: {
    color: "#0086f4",
  },
  sign: {
    color: "#e94141",
  },
  SignUp: {
    marginBottom:-350,
    left: 15,
    fontSize: 35,
    fontWeight: "700",
    fontFamily: "Inter-Bold",
    width: 154,
    height: 200,
    textAlign: "center",
    fontStyle: "italic",
    alignItems: "center",
    display: "flex",
  },
  nameLogo: {
    width: 300,
    height: 200,
    alignSelf: 'center',
    marginTop: 0,
  },
});

export default SignupPage;
