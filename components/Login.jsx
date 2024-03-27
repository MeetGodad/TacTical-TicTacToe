import React from 'react';
import { View, Text, TextInput, TouchableOpacity , ImageBackground ,Image } from 'react-native';
import { Input,  } from 'react-native-elements';
import { StyleSheet , Button} from 'react-native';

const LoginPage = ({ navigation }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = () => {
    // Handle login logic here
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
      <Input
        style={styles.emailInput}
        placeholder="Email Address"
        value={email}
        onChangeText={setEmail}
      />
      <Input
        style={styles.passwordInput}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.CountinueButton} onPress={() => navigation.navigate('AppMenu')} type="clear">
        <Text style={styles.CountinueText}>Countinue</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.SignUpButton}
          onPress={() => navigation.navigate('Dont have an account? SignUp')}
          type="clear">
          <Text style={styles.SignupText}>
          Don't have an account? Sign Up
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};
export default LoginPage;

const styles = StyleSheet.create({
  loginPage:{
    flex: 1,
    backgroundColor: '#001848',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%',  
    height: '100%'
  },
  emailInput: {
    top: -110,
    borderRadius: 50,
    backgroundColor: "darkblue",
    color: "#FFF",
    fontSize:25,
    width: 332,
    height: 58,
    fontWeight: "700",
    fontFamily: "Bold",
    textAlign: "center",
    justifyContent: "center",
    display:"flex",
  },
  passwordInput: {
    top: -120,
    borderRadius: 50,
    backgroundColor: "darkblue",
    color: "#FFF",
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
  buttonContainer: {
    top:10,
    left: 10,
    color: "#f7b731",
    position: 'relative',
    fontSize: 50,
    width: 332,
    height: 58,
    fontWeight: 700,
    fontFamily: 'Jura-Bold',
    textAlign: "center",
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
  },
  CountinueButton: {
    top:-100,
    left: 30,
    right: 15,
    width: 332,
    height: 58,
    borderRadius: 50,
    backgroundColor: "darkblue",
    justifyContent: "center",
    alignItems: "center",
  },
  CountinueText: {
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "Jura-Bold",
    color: "#FFF"
  },
  SignUpButton: {
    top: -90,
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
  SignupText: {
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "Jura-Bold",
    color: "#FFF",
    height:60,
    textAlign: "center",
  },
});