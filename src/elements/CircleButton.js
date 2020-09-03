import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AppLoading } from 'expo'; 
import * as Font from 'expo-font';
// import { createIconSet } from '@expo/vector-icons';
import { createIconSet } from 'react-native-vector-icons';
import fontAwesome from '../../assets/fonts/fa-solid-900.ttf';
import { TouchableHighlight } from 'react-native-gesture-handler';

const glyphMap = { 
                   pencil: '\uf303',
                   plus: '\uf067',
                   check: '\uf00c',
                  }
const CustomIcon = createIconSet(glyphMap, 'FontAwesome')

class CircleButton extends React.Component {
  constructor(props) {
    super(props);
    const { style, color, name } = props;
    this.style = style;
    this.bgColor = (color === 'white') ? '#fff' : '#E31676';
    this.textColor = (color === 'white') ? '#E31676' : '#fff';
    this.name = name;
    this.state = {
      fontLoaded: false,
    }
  }

  async componentDidMount() {
    await Font.loadAsync({
      FontAwesome: fontAwesome,
    });
    this.setState({
      fontLoaded: true,
    })
  }
  
  render() {
    return (

      <View style={[styles.circleButton, this.style, {backgroundColor: this.bgColor}]}>
        <TouchableHighlight style={[styles.container,{backgroundColor: this.bgColor}]}
                            onPress={this.props.onPress}
                            underlayColor={this.bgColor}>
          {
            this.state.fontLoaded ?
            (               
                <CustomIcon name={this.name} style={[styles.CircleButtonTitle, {color: this.textColor}]}/> 
            )
            : null
          }
          
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    justifyContent: 'center',
    alignSelf: 'center',
    zIndex: 9,
    backgroundColor : '#DDD'
    // position: 'absolute',
    // bottom: 35,
    // right: 25,
  },
  circleButton: {
    position: 'absolute',
    bottom: 35,
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
  },
  CircleButtonTitle: {
    fontSize: 24,
    lineHeight: 32,
  },
});

export default CircleButton;