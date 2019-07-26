import React, {Component} from 'react'

import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native'

const rockIcon = require('./img/rockIcon.png')
const paperIcon = require('./img/paperIcon.png')
const scissorsIcon = require('./img/scissorsIcon.png')
var play = require('./img/rockIcon.png')

class App extends Component{
  constructor() {
    super();
    this.state = {
      textValue: ''
    }
    this.selection= this.selection.bind(this);
  }

  selection(which){
    var opponent = Math.floor(Math.random() * 3);
    if (which == 0){
      if(opponent == 0){
        //Draw
        this.setState({
          textValue: 'DRAW'
        })
        play = require('./img/rockIcon.png')
      } else if(opponent == 1){
        //Loss
        this.setState({
          textValue: 'LOSS'
        })
        play = require('./img/paperIcon.png')
      } else{
        //Win
        this.setState({
          textValue: 'WIN'
        })
        play = require('./img/scissorsIcon.png')
      }      
    }
    if (which == 1){
      if(opponent == 1){
        //Draw
        this.setState({
          textValue: 'DRAW'
        })        
        play = require('./img/paperIcon.png')
      } else if(opponent == 2){
        //Loss
        this.setState({
          textValue: 'LOSS'
        })
        play = require('./img/scissorsIcon.png')
      } else{
        //Win
        this.setState({
          textValue: 'WIN'
        })
        play = require('./img/rockIcon.png')
      }      
    }
    if (which == 2){
      if(opponent == 2){
        //Draw
        this.setState({
          textValue: 'DRAW'
        })
        play = require('./img/scissorsIcon.png')
      } else if(opponent == 0){
        //Loss
        this.setState({
          textValue: 'LOSS'
        })
        play = require('./img/rockIcon.png')
      } else{
        //Win
        this.setState({
          textValue: 'WIN'
        })
        play = require('./img/paperIcon.png')
      }      
    }
  }

  render(){
    return (
      //<View style={styles.container}>
      <ImageBackground source={require('./img/bg.jpg')} style={styles.container}>
        <Text style={styles.title}>Rock, Paper, Scissors</Text>
        <View style={styles.buttonRow}>
          <View style={styles.margin10}>
            <TouchableOpacity onPress={() => this.selection(0)} style={styles.button} activeOpacity={0.5}>
              <Image
              source={require('./img/rockIcon.png')}
              style={styles.imageIcon}
              />
            </TouchableOpacity>
            {/*<Button
              onPress={() => this.selection(0)}
              title="Rock"
              color="#505050"
            />*/}
          </View>
          <View style={styles.margin10}>
            <TouchableOpacity onPress={() => this.selection(0)} style={styles.button} activeOpacity={0.5}>
              <Image
              source={require('./img/paperIcon.png')}
              style={styles.imageIcon}
              />
            </TouchableOpacity>
            {/*<Button
              onPress={() => this.selection(0)}
              title="Paper"
              color="#505050"
            />*/}       
          </View>
          <View style={styles.margin10}>
            <TouchableOpacity onPress={() => this.selection(0)} style={styles.button} activeOpacity={0.5}>
              <Image
              source={require('./img/scissorsIcon.png')}
              style={styles.imageIcon}
              />
            </TouchableOpacity>
            {/*<Button
              onPress={() => this.selection(0)}
              title="Scissors"
              color="#505050"
            />*/}       
          </View>
        </View>
        {this.state.content ? null : <Text style={styles.result}>{this.state.textValue}</Text>}
        {this.state.textValue ? <Image source={play}/> : null}
      </ImageBackground>
      //</View>
    )
  }
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: "#333"
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#333"
  },
  buttonRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: "center",
    position: 'absolute',
    bottom: 20,
  },
  margin10: {
    flex: 1,
    margin: 10,
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    margin: 20,
    color: "#FFF"
  },
  result: {
    position: "absolute",
    bottom: 250,
    fontSize: 60,
    textAlign: "center",
    margin: 20,
    color: "#FFF"
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    alignItems: "center",
    position: 'absolute',
    bottom: 20,
  },
  imageIcon: {
    flex: 1,
    width: 100,
    height: 100,
    resizeMode: "contain",
  }
});

export default App;
