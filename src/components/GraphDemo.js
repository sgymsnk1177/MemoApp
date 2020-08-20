import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, ScrollView, ListView, ActivityIndicatorComponent, SafeAreaView } from 'react-native';
import _ from 'lodash';
import { LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart } from 'react-native-chart-kit';

// import BodyText from './elements/BodyText.js';

class GraphDemo extends React.Component {

  days = []
  
  constructor(props){
    super(props)

    this.state = {
      ReloadGraph : false,
    }

    this.months = [
      {"no":1,"month":"6月"},
      {"no":2,"month":"7月"},
      {"no":3,"month":"8月"},
      {"no":4,"month":"9月"},
      {"no":5,"month":"10月"},
      {"no":6,"month":"11月"},
      {"no":7,"month":"12月"},
      {"no":8,"month":"1月"},
      {"no":9,"month":"2月"},
      {"no":10,"month":"3月"},
      {"no":11,"month":"4月"},
      {"no":12,"month":"5月"},
    ]

    this.monthList = _.chain(this.months)
                  .sortBy('no')
                  .map((v)=>{return v.month})
                  .value()
  }

  render(){
    return(
      <SafeAreaView style={styles.container}>
      {/* <BodyText>ExpoApp</BodyText> */}
      <Text style={{textAlign:'center'}}>ReactNativeChart(react-native-chart-kit)</Text>
      <Button title="グラフ更新" 
              onPress={ () => {
                  // console.log("list",this.monthList);
                  this.setState({ReloadGraph: !this.state.ReloadGraph});
                }
              }
      />
      <ScrollView>
        <View>
          <BarChart
            data={{
              labels: this.monthList,
              datasets:[{
                data:[
                  Math.random(),
                  Math.random(),
                  Math.random(),
                  Math.random(),
                  Math.random(),
                  Math.random(),
                  Math.random(),
                  Math.random(),
                  Math.random(),
                  Math.random(),
                  Math.random(),
                  Math.random()
                ]
              }]
            }}
            width={360}
            height={250}
            yAxisLabel={"$"}
            chartConfig={{
              backgroundColor: "#fff",
              backgroundGradientFrom:"#fff",
              backgroundGradientTo:"#fff",
              color: (opacity = 0.5) => "rgba(0, 0, 0, 0.5)",
            }}
          />
          <LineChart
            data={{
              labels: this.monthList,
              datasets:[{
                data:[
                  Math.random() * 1000,
                  Math.random() * 1000,
                  Math.random() * 1000,
                  Math.random() * 1000,
                  Math.random() * 1000,
                  Math.random() * 1000,
                  Math.random() * 1000,
                  Math.random() * 1000,
                  Math.random() * 1000,
                  Math.random() * 1000,
                  Math.random() * 1000,
                  Math.random() * 1000
                ]
              }]
            }}
            width={360}
            height={250}
            yAxisLabel={""}
            chartConfig={{
              backgroundColor: "#fff",
              backgroundGradientFrom:"#fff",
              backgroundGradientTo:"#fff",
              color: (opacity = 0.5) => "rgba(0,0,0,0.5)",
            }}
          />
          <LineChart
            data={{
              labels: this.monthList,
              datasets:[{
                data:[
                  Math.random(),
                  Math.random(),
                  Math.random(),
                  Math.random(),
                  Math.random(),
                  Math.random(),
                  Math.random(),
                  Math.random(),
                  Math.random(),
                  Math.random(),
                  Math.random(),
                  Math.random()
                ]
              }]
            }}
            width={360}
            height={250}
            yAxisLabel={""}
            chartConfig={{
              backgroundColor: "#fff",
              backgroundGradientFrom:"#fff",
              backgroundGradientTo:"#fff",
              color: (opacity = 0.5) => "rgba(0,0,0,0.5)",
            }}
            bezier
          />
        </View>
      </ScrollView>
    </SafeAreaView>

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

export default GraphDemo;