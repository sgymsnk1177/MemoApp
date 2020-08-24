import React from 'react';
import { StyleSheet, View } from 'react-native';
import { loadAsync } from 'expo-font';
import { Ionicons, createIconSet } from '@expo/vector-icons';
import fontAwesome from '../../assets/fonts/fa-solid-900.ttf';

const glyphMap = { pencil: '\uf303',
                   plus: '\uf067',
                   check: '\uf00c'}
const CustomIcon = createIconSet(glyphMap, 'FontAwesome');

class CircleButton extends React.Component {
  constructor(props) {
    super(props);
    const { style, color, name } = props;
    this.style = style;
    this.bgColor = (color === 'white') ? '#fff' : '#E31676';
    this.textColor = (color === 'white') ? '#E31676' : '#fff';
    this.name = name;

    this.state ={
      fontLoaded: false,
    }
  }

  async componentDidMount() {
    await loadAsync({FontAwesome: fontAwesome});
    this.setState({
      fontLoaded: true,
    })
  }

  render() {
    return (
      <View style={[styles.circleButton, this.style, {backgroundColor: this.bgColor}]}>
        {
          this.state.fontLoaded
          ?
          // <Text style={[styles.CircleButtonTitle, {color: this.textColor}]}>
          //   { this.props.children }
          // </Text>
          <CustomIcon name={this.name} style={[styles.CircleButtonTitle, {color: this.textColor}]}/>
          // <Ionicons name="md-checkmark-circle" size={32} color="green" />
          : 
          null
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  circleButton: {
    position: 'absolute',
    bottom: 30,
    right: 25,
    width: 48,
    height: 48,
    backgroundColor: '#E31676',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems:'center',
    shadowColor: "#000",
    shadowOffset: {width: 0 ,height: 2},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    zIndex: 999,
  },
  CircleButtonTitle: {
    // fontFamily: 'FontAwesome',
    fontSize: 24,
    lineHeight: 32,
  },
});

export default CircleButton;