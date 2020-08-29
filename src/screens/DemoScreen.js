import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

DemoScreen = ({ navigation }) => {
  const [dataCount, setDataCount] = useState(10)

  let Views =[]
  for(let i =0; i < dataCount-1; i++){
    Views.push(
      <View styles={styles.listItem}>
        <Text>data{i + 1}</Text>
      </View>
    )
  }

  return(
    <SafeAreaView>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}
                          Text='画面遷移'                          
        />
      </View>
      <ScrollView>
        {Views}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  listItem: {
    padding: 16,
    borderBottomWidth: 1.5,
    borderBottomColor: '#ddd',
    backgroundColor: 'aliceblue',
  }
})

export default DemoScreen;