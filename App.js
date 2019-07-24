import React, {Fragment, Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Platform,
} from 'react-native';

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
      } else if(opponent == 1){
        //Loss
        this.setState({
          textValue: 'LOSS'
        })
      } else{
        //Win
        this.setState({
          textValue: 'WIN'
        })
      }      
    }
    if (which == 1){
      if(opponent == 1){
        //Draw
        this.setState({
          textValue: 'DRAW'
        })
      } else if(opponent == 2){
        //Loss
        this.setState({
          textValue: 'LOSS'
        })
      } else{
        //Win
        this.setState({
          textValue: 'WIN'
        })
      }      
    }
    if (which == 2){
      if(opponent == 2){
        //Draw
        this.setState({
          textValue: 'DRAW'
        })
      } else if(opponent == 0){
        //Loss
        this.setState({
          textValue: 'LOSS'
        })
      } else{
        //Win
        this.setState({
          textValue: 'WIN'
        })
      }      
    }
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Rock, Paper, Scissors</Text>
        <Button
          onPress={() => this.selection(0)}
          title="Rock"
          color="#505050"
        />
        <Button
          onPress={() => this.selection(1)}
          title="Paper"
          color="#505050"
        />
        <Button
          onPress={() => this.selection(2)}
          title="Scissors"
          color="#505050"
        />
        {this.state.content ? null : <Text style={styles.title}>{this.state.textValue}</Text>}
      </View>
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
  title: {
    fontSize: 30,
    textAlign: "center",
    margin: 20,
    color: "#FFF"
  },
});

export default App;
