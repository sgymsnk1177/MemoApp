import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Alert, TouchableHighlight } from 'react-native';
import firebase from 'firebase';
import CircleButton from '../elements/CircleButton';

class LoginScreen extends Component{

  constructor(props){
    super(props)
    this.state = { 
      loginId : null,
      passWord: null,
    }
  }

  onHandleChangeText = (val) => {
    this.setState({loginId : val})
  }

  handleAuthMethod = () =>{
    firebase.auth().signInWithEmailAndPassword(this.state.loginId, this.state.passWord)
    .then(data => {
      // console.log('Success Auth',data.user);
      Alert.alert('ログイン成功');
      this.props.navigation.navigate('Home');
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      Alert.alert('Code:' + errorCode + ' Msg:' + errorMessage);
      return;
    });
  }

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.title}>ID</Text>
        <TextInput style={styles.input} placeholder={"Email Address"}
                   //onChangeText={(id) => this.setState({loginId: id})}
                   onChangeText={this.onHandleChangeText.bind(this)}
                   autoCapitalize={'none'}
                   autoCorrect={false}
                   value={this.state.loginId}
        />
        <Text style={styles.title}>パスワード</Text>
        <TextInput style={styles.input} placeholder={"Password"}
                   onChangeText={(pass) => this.setState({passWord: pass})}
                   autoCapitalize={'none'}
                   autoCorrect={false}
                   secureTextEntry
                   value={this.state.pass}
        />
        <TouchableHighlight style={styles.botton}
                            onPress={this.handleAuthMethod}
                            underlayColor={'#ddd'}
        >
          <Text style={styles.buttonTitle}>ログイン</Text>
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
    paddingTop: 100,
    backgroundColor: '#fff',
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
    fontSize: 11,
    marginBottom: 5,
    paddingLeft: 5,
  },
  botton: {
    backgroundColor: '#E31676',
    marginTop: 30,
    height: 55,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    alignSelf: 'center',
  },
  buttonTitle:{
    color:'#fff',
    fontSize: 18,
  }

})

export default LoginScreen;