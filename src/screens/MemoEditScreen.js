import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

import CircleButton from '../elements/CircleButton';

class MemoEditScreen extends Component{

  render(){
    return(
      <View style={styles.container}>
          <TextInput style={styles.memoEditInput}
                     multiline={true}
                     placeholder={"inputArea"}
                     value={'Hi'}
          />
        <CircleButton name="check"/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    width: '100%',
  },
  memoEditInput:{
    backgroundColor: '#ddd',
    flex: 1,
    padding: 16,
    paddingTop: 32,
    fontSize: 16
  }
})


export default MemoEditScreen;