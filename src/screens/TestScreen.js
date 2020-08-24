import React, { useState, Component } from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import Toggle from '../components/Toggle';

class TestScreen extends Component {

  flexDirectionOption = []
  justifyContentOption = []
  alignItemsOption = []

  constructor(props){
    super(props);
    this.state ={
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      boxColor: 'blue',
    }
  }

  componentWillMount(){
    this.flexDirectionOption = ['row','column']
    this.justifyContentOption = ['flex-start', 'center', 'flex-end', 'space-around', 'space-between']
    this.alignItemsOption =['flex-start', 'center', 'flex-end', 'stretch']
  }

  onStateChange = (option, kbn) => {
    if (kbn == 0){
      this.setState({flexDirection: option})
    }
    if (kbn == 1){
      this.setState({justifyContent: option})
    }
    if (kbn == 2){
      this.setState({alignItems: option})
    }    
  }

  render(){

    return(
      <SafeAreaView style={styles.container}>
        <Toggle
          label={'flexDirection : ' + this.state.flexDirection}
          value={this.state.flexDirection}
          kbn={0}
          options={this.flexDirectionOption}
          onChange={this.onStateChange}
        />
        <Toggle
          label={'justifyContent'}
          value={this.state.justifyContent}
          kbn={1}
          options={this.justifyContentOption}
          onChange={this.onStateChange}
        />
        <Toggle
          label={'alignItems'}
          value={this.state.alignItems}
          kbn={2}
          options={this.alignItemsOption}
          onChange={this.onStateChange}
        />
        <View style={[this.state,styles.layout]}>
          <View style={[styles.box,{backgroundColor: this.state.boxColor}]}></View>
          <View style={[styles.box,{backgroundColor: this.state.boxColor}]}></View>
          <View style={[styles.box,{backgroundColor: this.state.boxColor}]}></View>
        </View>
      </SafeAreaView>


    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  layout: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  box: {
    padding: 25,
    backgroundColor: '#ddd',
    margin: 10,    
  }
})

export default TestScreen;