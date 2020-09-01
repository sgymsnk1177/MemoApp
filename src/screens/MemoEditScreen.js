import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert } from 'react-native';
import Appbar from '../components/Appbar';
import CircleButton from '../elements/CircleButton';
import firebase from 'firebase';
import moment from 'moment';

class MemoEditScreen extends Component{

  constructor(props){
    super(props)
    // 画面遷移時の初期値
    this.Req = this.props.navigation.state.params
    try{
      console.log('ID',this.Req.ID)
    }catch(e){
      console.log(e)
    }
    this.state = {
      inputVal: this.Req && this.Req.ID !== null ? this.Req.ID : "",
    }
  }

  handleExecuteMemo = () => {
    const db = firebase.firestore();
    db.collection('memos').add({
      body: this.state.inputVal,
      createOn: moment().format('YYYY/MM/DD HH:mm:ss'),
    })
    .then(docRef => {
      Alert.alert('登録しました');
      this.navigation.navigate.goBack();
    })
    .catch(err => {
      Alert.alert(err);
    });
  }


  render(){
    return(
      <View style={styles.container}>
          <TextInput style={styles.memoEditInput}
                     editable={true}
                     multiline={true}
                     placeholder={"inputArea"}
                     value={String(this.state.inputVal)}
                     onChangeText={text => this.setState({inputVal: text})}
          />
        <CircleButton name="check" onPress={this.handleExecuteMemo.bind(this)}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    width: '100%',
    height: '70%'
  },
  memoEditInput:{
    flex: 1,
    backgroundColor: '#ddd',
    padding: 16,
    paddingTop: 32,
    fontSize: 16,
  }
})

export default MemoEditScreen;