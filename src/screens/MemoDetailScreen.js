import React from 'react';
import { StyleSheet, View, Text, Button} from 'react-native';
import Appbar from '../components/Appbar';
import CircleButton from '../elements/CircleButton';

class MemoDetailScreen extends React.Component {

  constructor(props){
    super(props)
    // 引数オブジェクト
    this.Req = this.props.navigation.state.params
  }

  // onPress = () =>{
  //   this.props.navigation.navigate('Edit',{ 'ID': this.Req.ID })
  // }

  render() {
    return ( 
      <View style={styles.container}>
        <View>
          <View style={styles.memoHeader}>
            <View> 
              <Text style={styles.memoHeaderTitle}>講座のアイデア</Text>
              <Text style={styles.memoHeaderDate}>2020.08.19</Text>
            </View>
          </View>
        </View>
        <View style={styles.memoContent}>
          <Text>
            {this.Req.ID}
          </Text>
        </View>
        <CircleButton name="pencil" 
                      color="white" 
                      style={styles.editButton}
                      onPress={() => this.props.navigation.navigate('Edit',{ID: this.Req.ID})} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  memoHeader: {
    height: 100,
    backgroundColor: '#17313C',
    justifyContent: 'center',
    padding: 10,
  },
  memoHeaderTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  memoHeaderDate: {
    fontSize: 12,
    color: '#fff',
  },
  memoContent: {
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  editButton: {
    top: 75,    
  },
});

export default MemoDetailScreen;