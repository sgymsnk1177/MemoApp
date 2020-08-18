import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class MemoList extends React.Component {
  render(){
    return(
      <View style={styles.memoList}>
        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>Title</Text>
          <Text style={styles.memoDate}>Date</Text>
        </View>
        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>Title</Text>
          <Text style={styles.memoDate}>Date</Text>
        </View>
        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>Title</Text>
          <Text style={styles.memoDate}>Date</Text>
        </View>
    </View>
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