import { AppLoading } from 'expo';
import * as SQLite from 'expo-sqlite';
import React, { useState, useEffect, createContext } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { createNavigationContainer, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import firebase from 'firebase';
import moment from 'moment';

import Appbar from './src/components/Appbar';
import GraphDemo from './src/components/GraphDemo';
import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import MemoCreateScreen from './src/screens/MemoCreateScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';

import ENV from './env.json';

require('moment');
require("firebase/firestore");

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
  // ,[]);
  
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
        <MemoListScreen/>
      </View>
      // <TestScreen/>
      
      
    );
  }
}

const firebaseConfig = {
  apiKey: ENV.FIREBASE_API_KEY,
  authDomain: ENV.FIREBASE_AUTH_DOMAIN,
  databaseURL: ENV.FIREBASE_DB_URL,
  projectId: ENV.FIREBASE_PRJ_ID,
  storageBucket: ENV.FIREBASE_STORAGE,
  messagingSenderId: ENV.FIREBASE_SENDER_ID,
  appId: ENV.FIREBASE_APP_ID,
  measurementId: ENV.FIREBASE_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);

const navigator = createStackNavigator({
  Login:{screen:LoginScreen},
  Signup:{screen: SignupScreen},
  Home: {screen: MemoListScreen},
  Detail: {screen: MemoDetailScreen},
  Edit: {screen: MemoEditScreen},
  Create: {
    screen: MemoCreateScreen,
    navigationOptions: ({navigation}) => ({
      title: `新規作成`
    }),
  },
},{
  initialRouteName: 'Login',
  defaultNavigationOptions: {
    headerStyle: { 
      backgroundColor : '#265366',                   
    },
    headerTitleStyle: {
      color: '#fff',
    },
    headerTintColor: '#fff',
    headerBackTitle: null,
    // headerTitle: 'DemoApp',
  }
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 78,
  },
});

export default createAppContainer(navigator);