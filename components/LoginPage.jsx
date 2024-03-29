import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { Input, Button } from 'react-native-elements';
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
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <ImageBackground source={require('../images/background.png')} style={styles.backgroundImage}>
      <View style={styles.container}> 
        <Text style={styles.title}>Login Page</Text>
        <Input
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          
          containerStyle={styles.input}
          inputContainerStyle={styles.inputContainer}
          inputStyle={styles.inputText}
        />
        <Input
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          containerStyle={styles.input}
          inputContainerStyle={styles.inputContainer}
          inputStyle={styles.inputText}
        />
        <Button
          title="Log In"
          onPress={handleLogin}
          buttonStyle={styles.button}
          titleStyle={styles.buttonText}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    marginBottom: 15,
  },
  inputContainer: {
    borderBottomWidth: 0,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  inputText: {
    color: '#000', // Black color for text
  },
  button: {
    width: '80%',
    backgroundColor: '#f7b731',
    borderRadius: 10,
    textAlign: 'center',
  },
  buttonText: {
    color: '#000',
    textAlign: 'center',
  },
  signupText: {
    color: '#000',
    marginTop: 20,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
});

export default LoginPage;
