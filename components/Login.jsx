import React from 'react';
import { View, Text, TextInput, TouchableOpacity , ImageBackground ,Image } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { StyleSheet } from 'react-native';

const LoginPage = ({ navigation }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = () => {
    // Handle login logic here
  };

  return (
    <View styles={ styles.loginPage}> 
      <ImageBackground source={require('../images/background.png')} style={styles.backgroundImage}>
      <Text h4>Login Page</Text>
      <Input
        style={styles.emailInput}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        leftIcon={{ type: 'font-awesome', name: 'envelope' }}
      />
      <Input
        style={styles.passwordInput}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        leftIcon={{ type: 'font-awesome', name: 'lock' }}
      />
      <Button title="Log In" onPress={() => navigation.navigate('AppMenu')} type="clear" />
      <Button title="Don't have an account? Sign up" onPress={() => navigation.navigate('SignupPage')} type="clear" />
      </ImageBackground>
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({

  loginPage: {   
    backgroundColor: 'blue',
    width: '100%',
    height: '100%'
  },

  backgroundImage: {
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%',  
    height: '100%'
  },
});