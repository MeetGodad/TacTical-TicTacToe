import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
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
  };

  return (
    <ImageBackground source={require('../images/background.png')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Signup Page</Text>
        <Input
          placeholder="Name"
          value={name}
          onChangeText={setName}
          inputStyle={styles.input}
        />
        <Input
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          inputStyle={styles.input}
        />
        <Input
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          inputStyle={styles.input}
        />
        <Button title="Sign Up" onPress={handleSignup} buttonStyle={styles.button} />
        <Button
          title="Already have an account? Log in"
          onPress={() => navigation.navigate('LoginPage')}
          type="clear"
          titleStyle={styles.loginLink}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({

  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '80%',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: '#000',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    color: '#000',
  },
  button: {
    backgroundColor: '#f7b731',
    borderRadius: 10,
    marginTop: 10,
    width: '100%',
    alignSelf: 'center', // Align the button itself to the center
  },
  loginLink: {
    color: '#000',
    textDecorationLine: 'underline',
    marginTop: 20,
  },
});

export default SignupPage;
