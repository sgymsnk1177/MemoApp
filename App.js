import { StatusBar } from 'expo-status-bar';
import { Asset } from 'expo-asset';
import { AppLoading } from 'expo';
import * as SQLite from 'expo-sqlite';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Alert, ScrollView, ListView, ActivityIndicatorComponent, SafeAreaView } from 'react-native';

import Appbar from './src/components/Appbar';
import GraphDemo from './src/components/GraphDemo';
import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import TestScreen from './src/screens/TestScreen';


function App(props) {

  const [isLoadingComplete, setLoadingComplete] = useState(false)
  const [isGraphView, setGraphView] = useState(false)

  const DB = SQLite.openDatabase('db')

  // useEffect(() => {
  //    let interval = setInterval(() => {
  //      console.log(getCurrentTime;
  //      setNowDate(new Date())
  //    }, 1000); 
  //   }
  // );
  
  /**
   * ローカルデータベース（sqlite）を作成
   */
  loadResourcesAsync = async () => {
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

  getCurrentTime = () => {
    let res = "" + nowDate.getFullYear() + '/' + nowDate.getMonth() + '/' + nowDate.getDate() + ' '
                 + nowDate.getHours() + ':' + nowDate.getMinutes() + ':' + nowDate.getSeconds();
    return res;
  }

  if (!isLoadingComplete && !props.setLoadingComplete) {
    return (
      <AppLoading 
        startAsync={loadResourcesAsync}
        onError={(err) => Alert.alert(err)}
        onFinish={() => { setLoadingComplete(true);}}
      />
    );
  } else {

    if(isGraphView){
      return (      
        <View style={styles.container}>
          <Appbar>MemoApp(デモ用)</Appbar>
          <View style={{paddingTop:50,}}>
            <Button 
                  title={"切り替え"}
                  onPress={() => {setGraphView(!isGraphView);}}    
            />
            <Text>{nowDate.toString()}</Text>
          </View>
          <GraphDemo/>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Appbar>MemoApp(デモ用)</Appbar>
        <MemoDetailScreen/>
      </View>
      // <TestScreen/>
      
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 78,
  },
});

export default App;