import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Button, TouchableHighlight, ShadowPropTypesIOS, Alert } from 'react-native';
import firebase from 'firebase';
import CircleButton from '../elements/CircleButton';

class SignupScreen extends Component{

  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: '',
    }
  }

  handleAuthMethod = () =>{
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then(data => {
      console.log('Success Auth',data.user);
      this.props.navigation.navigate('Home');
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      Alert.alert('Code:' + errorCode + ' Msg:' + errorMessage);
    });
    
  }

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.title}>メンバー登録</Text>
        <Text>Email</Text>
        <TextInput style={styles.input} 
                   placeholder={"Email Address"}
                   autoCapitalize={'none'}
                   autoCorrect={false}
                   onChangeText={(text) => this.setState({email: text})}
                   value={this.state.email}
        />
        <Text>Password</Text>
        <TextInput style={styles.input} 
                   placeholder={"Password"}
                   autoCapitalize={'none'}
                   autoCorrect={false}
                   secureTextEntry
                   onChangeText={(text) => this.setState({password: text})}
                   value={this.state.password}
        />

        <TouchableHighlight style={styles.botton}
                            onPress={this.handleAuthMethod}
                            underlayColor={'#C70F66'}
        >
          <Text style={styles.buttonTitle}>送信する</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    width: '100%',
    padding: 24,
    backgroundColor: '#fff',
    marginTop: 0,
  },
  input:{
    backgroundColor: '#eee',
    height: 48,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 8
  },
  title: {
    fontSize: 24,
    marginBottom: 5,
    padding: 10,
    alignSelf: 'center',
  },
  botton: {
    backgroundColor: '#E31676',
    height: 48,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    alignSelf: 'center',
    marginTop: 30,
  },
  buttonTitle:{
    color:'#fff',
    fontSize: 18,
  }

})

export default SignupScreen;