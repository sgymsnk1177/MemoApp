import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Button, TouchableHighlight } from 'react-native';
import CircleButton from '../elements/CircleButton';

class SignupScreen extends Component{

  _onPress = () =>{
    console.log('click!!');
  }

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.title}>メンバー登録</Text>
        <TextInput style={styles.input} placeholder={"Email Address"}/>
        <TextInput style={styles.input} placeholder={"Password"}/>
        <TouchableHighlight style={styles.botton}
                            onPress={this._onPress}
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
    marginTop: 100,
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
  },
  buttonTitle:{
    color:'#fff',
    fontSize: 18,
  }

})

export default SignupScreen;