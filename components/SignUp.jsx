import React from 'react';
import { View, Text, TextInput, TouchableOpacity , ImageBackground , Image } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { StyleSheet } from 'react-native';

const SignupPage = ({ navigation }) => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSignup = () => {
    // Handle signup logic here
  };

  return (
    <View style={ styles.signUp} >
      <ImageBackground source={require('../images/background.png')} style={styles.backgroundImage}>
      <Input
        placeholder="Name"
        value={name}
        onChangeText={setName}
        leftIcon={{ type: 'font-awesome', name: 'user' }}
      />
      <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        leftIcon={{ type: 'font-awesome', name: 'envelope' }}
      />
      <Input
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        leftIcon={{ type: 'font-awesome', name: 'lock' }}
      />
      <Button title="Sign Up" onPress={handleSignup} />
      <Button title="Already have an account? Log in" onPress={() => navigation.navigate('LoginPage')} type="clear" />
      </ImageBackground>
    </View>
  );
};

export default SignupPage;

const styles = StyleSheet.create({
  signUp: {
    flex: 1,
    backgroundColor: '#001848',
    justifyContent: 'center',
    alignItems: 'center',
  },

  backgroundImage: {
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
});
