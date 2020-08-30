import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import firebase from 'firebase';
import Appbar from '../components/Appbar';
import CircleButton from '../elements/CircleButton';
import MemoList from '../components/MemoList';

class MemoListScreen extends React.Component{

  onPress = (i) => {
    // Alert.alert(String(i));
    this.props.navigation.navigate('Detail',{'ID':i})
    // this.props.navigation.navigate('Edit');
  }

  handlePress = () => {
    let db = firebase.firestore();
    db.collection('memos').add({
      body: 'testBody',
      createOn: '2020/8/30',
    })
    .then(docRef => {
      Alert.alert('メモ保存完了しました:' + docRef.id);
    })
    .catch(error => {
      Alert.alert(error);
    })
  }

  render(){
    return(
      <View style={styles.container}>
        <MemoList onNavigate={this.onPress}/>
        <CircleButton name="plus" 
                      //onPress={() => this.props.navigation.navigate('Edit')}
                      onPress={this.handlePress.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
  }
});

export default MemoListScreen;
