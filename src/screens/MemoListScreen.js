import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import Appbar from '../components/Appbar';
import CircleButton from '../elements/CircleButton';
import MemoList from '../components/MemoList';

class MemoListScreen extends React.Component{

  onPress = (i) => {
    // Alert.alert(String(i));
    this.props.navigation.navigate('Detail',{'ID':i})
    // this.props.navigation.navigate('Edit');
  }

  render(){
    return(
      <View style={styles.container}>
        <MemoList onNavigate={this.onPress}/>
        <CircleButton name="plus" onPress={() => this.props.navigation.navigate('Edit')}/>
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
