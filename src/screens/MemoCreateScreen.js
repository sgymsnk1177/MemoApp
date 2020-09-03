import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert, KeyboardAvoidingView } from 'react-native';
import Appbar from '../components/Appbar';
import CircleButton from '../elements/CircleButton';
import firebase from 'firebase';
import moment from 'moment';

class MemoCreateScreen extends Component{

  constructor(props){
    super(props)
    this.state = {
      inputVal: "",
    }
  }

  handleExecuteMemo = () => {
    const { params } = this.props.navigation.state;
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    db.collection(`users/${currentUser.uid}/memos`)
    .add({
      body: this.state.inputVal,
      createOn: moment().format('YYYY/MM/DD HH:mm:ss'),
    })
    .then(docRef => {
      Alert.alert('登録しました');
      this.props.navigation.goBack();
    })
    .catch(err => {
      Alert.alert(err);
    });
  }

  render(){
    return(
      <KeyboardAvoidingView style={{flex:1}} behavior={'padding'}>
        <View style={styles.container}>
            <TextInput style={styles.memoEditInput}
                      editable={true}
                      returnKeyType={'done'}
                      multiline={true}
                      placeholder={"inputArea"}
                      value={this.state.inputVal}
                      onChangeText={text => this.setState({inputVal: text})}
            />
            
            <CircleButton name="check" style={{top: 20}} onPress={() => this.handleExecuteMemo()}/>          
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    width: '100%',
    // height: '70%'
  },
  memoEditInput:{
    flex: 1,
    backgroundColor: '#ddd',
    padding: 16,
    paddingTop: 32,
    fontSize: 16,
    height:100,
  }
})

export default MemoCreateScreen;