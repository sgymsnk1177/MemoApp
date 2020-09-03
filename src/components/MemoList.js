import React from 'react';
import { StyleSheet, View, Text, Alert, RefreshControl, Image } from 'react-native';
import { TouchableHighlight, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

class MemoList extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      refreshing: false,
      listCount:  Math.floor(Math.random() * 100),
      memoList: this.props.memoList || [],
    }
  }

  onNavigate = i => {
    this.props.onNavigate(i);
  }

  onRefreshList = () => {
    this.setState({
      refreshing: true,
      listCount: Math.floor(Math.random() * 100),
    })

    setTimeout(() => {
      this.setState({
        refreshing: false,
      })
    }, 1500);
  }


  render(){
    let Views = [];
    for (let i = 0; i < this.state.listCount; i++){
      Views.push(
        <TouchableHighlight key={i} onPress={() => this.props.onNavigate(i)} //this.onNavigate.bind(this,i)
        >
          <View style={styles.memoListItem}>
            <View style={{marginRight: 15}}>
              <Image style={{width:50,height:50}} 
                     source={{url:'../assets/fonts/icon.png'}}
                     backgroundColor={'#ddd'}
              />
            </View>
            <View>
              <Text style={styles.memoTitle}>List{i}</Text>
              <Text style={styles.memoDate}>{String(new Date())}</Text>
            </View>
          </View>
        </TouchableHighlight>
      )
    }
    return(
      <ScrollView style={styles.memoList}
                  refreshControl={
                    <RefreshControl
                      refreshing={this.state.refreshing}
                      onRefresh={() => this.onRefreshList()}
                      color='#000080'
                      progressBackgroundColor='#000080'
                    />
                  }      
      >
        
        {Views}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  memoList: {
    backgroundColor: '#fff',
    width: '100%',
    flex: 1,
  },
  memoListItem: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1.5,
    borderBottomColor: '#ddd',
    backgroundColor: 'aliceblue',
  },
  memoTitle: {
    fontSize: 18,
    marginBottom: 3,
  },
  memoDate: {
    fontSize: 12,
    color: '#a2a2a2',
  },
});

export default MemoList;