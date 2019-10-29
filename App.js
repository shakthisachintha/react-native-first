import React, { Component } from 'react';
import { Button,ImageBackground,Vibration,ToastAndroid,TextInput,StyleSheet,Text, View } from 'react-native';


const styles=StyleSheet.create({
  center:{
    textAlign:'center'
  },
  big:{
    fontWeight:'bold',
    fontSize:30,
  },
  blue:{
    color:'blue',
  },
  red:{
    color:'red'
  }
});

class Greeting extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Text style={this.props.style} >Hello {this.props.name}!</Text>
      </View>
    );
  }
}


export default class LotsOfGreetings extends Component {

  constructor(props) {
    super(props);
    this.state={};
  }

  render() {
    return (
      <ImageBackground source={{uri:'https://www.elsetge.cat/myimg/f/29-295735_android-wallpaper-gallery-minimalist-wallpaper-for-android.jpg'}} style={{width: '100%', height: '100%'}}>
       
          <TextInput style={{height:50}} placeholder="Enter Your Name" onChangeText={(val) => this.setState({val})} />
          <Greeting style={[styles.big,styles.red]} name={this.state.val} />
          <Button style={{width:20,height:20}} onPress={() => {ToastAndroid.show('You Touched The Button', 200);Vibration.vibrate(100);}} title="Press Me"/>
         
      </ImageBackground>
    );
  }
}
