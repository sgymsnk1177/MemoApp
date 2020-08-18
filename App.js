import { StatusBar } from 'expo-status-bar';
import { Asset } from 'expo-asset';
import { AppLoading } from 'expo';
import * as SQLite from 'expo-sqlite';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, ScrollView, ListView, ActivityIndicatorComponent, SafeAreaView } from 'react-native';

import Appbar from './src/components/Appbar';
import GraphDemo from './src/components/GraphDemo';
import MemoList from './src/components/MemoList';
import CircleButton from './src/elements/CircleButton';

export default function App(props) {

  const [isLoadingComplete, setLoadingComplete] = useState(false)
  const [isGraphView, setGraphView] = useState(false)
  const DB = SQLite.openDatabase('db')

  /**
   * ローカルデータベース（sqlite）を作成
   */
  async function loadResourcesAsync() {
    await Promise.all([
      (() => {
        DB.transaction(tx => {
          tx.executeSql(
            'create table if not exists busho (id integer primary key not null, name text);', // 実行したいSQL文
            null, // SQL文の引数
            () => {console.log('success')}, // 成功時のコールバック関数
          );
        }
      )
      })(),
    ]);
  }

  if (!isLoadingComplete && !props.setLoadingComplete) {
    return (
      <AppLoading 
        startAsync={loadResourcesAsync}
        onError={(err) => Alert.alert(err)}
        onFinish={() => { setLoadingComplete(true); }}
      />
    );
  } else {

    if(isGraphView){
      return (      
        <View style={styles.container}>
          <Appbar>MemoApp(デモ用)</Appbar>
          <GraphDemo/>
          <Button title={"切り替え"}
                  onPress={() => {setGraphView(!isGraphView);}}        
          />
        </View>
      );
    }
    return (      
      <View style={styles.container}>
        <Appbar>MemoApp(デモ用)</Appbar>
        <MemoList/>
        <Button title={"切り替え"}
                onPress={() => {setGraphView(!isGraphView);}}        
        />
        <CircleButton>+</CircleButton>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 78,
  },
});
