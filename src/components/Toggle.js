import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

class Toggle extends Component {

  constructor(props){
    super(props)
  }

  onPress= (option, kbn) => {
    const {onChange} = this.props;
    onChange(option, kbn);
  }

  renderOption = (option,i) => {
    const { kbn, value } = this.props;

    return(
      <TouchableOpacity
        style={[styles.option, option === value && styles.activityOption]}
        onPress={this.onPress.bind(this, option, kbn)}
        key={i}
      >
        <Text style={styles.text}>{option}</Text>
        <View style={styles.line}/>
      </TouchableOpacity>
    )
  }

  render(){
    const {label, options} = this.props;

    return(
      <View style={styles.container}>
        <Text style={[styles.text, styles.label]}>{label}</Text>
        <View style={styles.optionContainer}>
          {options.map(this.renderOption)}
        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingBottom: 20,
    margin: 15,
  },
  text: {
    fontSize: 14,
  },
  label: {
    padding: 4,
  },
  optionContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  option: {
    padding: 10,
    backgroundColor: 'gray',
  },
  activityOption: {
    backgroundColor: 'skyblue',
  },
  line: {
    borderWidth: 0.5,
    borderColor: '#000',
  }
});

export default Toggle;