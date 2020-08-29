import React from 'react';
import { StyleSheet, View, Text, Alert, RefreshControl } from 'react-native';
import { TouchableHighlight, ScrollView } from 'react-native-gesture-handler';

class MemoList extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      refreshing: false,
      listCount:  Math.floor(Math.random() * 100)
    }
  }

  onNavigate = i => {
    this.props.onNavigate(i);
  }

  onRefresh = () => {
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
        <TouchableHighlight key={i} onPress={this.onNavigate.bind(this,i)}
        >
          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>List{i}</Text>
            <Text style={styles.memoDate}>{String(new Date())}</Text>
          </View>
        </TouchableHighlight>
      )
    }
    return(
      <ScrollView style={styles.memoList}
                  refreshControl={
                    <RefreshControl
                      refreshing={this.state.refreshing}
                      onRefresh={() => this.onRefresh()}
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