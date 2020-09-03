import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import CircleButton from '../elements/CircleButton';
import MemoList from '../components/MemoList';
import firebase from 'firebase';
import _ from 'lodash';

class MemoListScreen extends React.Component{

  constructor(props){
    super(props)
    this.state ={ 
      memoList: [],
    }
  }

  onPress = (i) => {
    // Alert.alert(String(i));
    this.props.navigation.navigate('Detail',{'ID':i})
  }

  componentDidMount(){
    const { currentUser } = firebase.auth();
    // console.log(currentUser);
    const db = firebase.firestore();
    db.collection(`users/${currentUser.uid}/memos`)
      .get()
      .then( querySnapshot => {
        console.log(querySnapshot);
        const memoList = [];
        querySnapshot.forEach(query => {
          console.log(query);
        })
        // _.each(querySnapshot, (v,i) => {
        //   console.log(v);
        //   memoList.push(v.data());
        // })
        // // 画面描画
        // this.setState({memoList: memoList})
      })
      .catch( err => Alert.alert(err));
  }

  render(){
    const { params } = this.props.navigation.state;
    return(
      <View style={styles.container}>
        <MemoList onNavigate={this.onPress} memoList={this.state.memoList}/>
        <CircleButton name="plus" 
                      onPress={() => this.props.navigation.navigate('Create')}
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
