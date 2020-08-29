import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert } from 'react-native';
import Appbar from '../components/Appbar';
import CircleButton from '../elements/CircleButton';

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
        <CircleButton name="check" onPress={() => this.props.navigation.goBack()}/>
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