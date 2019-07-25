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
        <View style={styles.buttonRow}>
          <View style={styles.margin10}>
            <Button
              onPress={() => this.selection(0)}
              title="Rock"
              color="#505050"
            />
          </View>
          <View style={styles.margin10}>
            <Button
              onPress={() => this.selection(1)}
              title="Paper"
              color="#505050"
            />            
          </View>
          <View style={styles.margin10}>
            <Button
              onPress={() => this.selection(2)}
              title="Scissors"
              color="#505050"
            />            
          </View>
        </View>
        {this.state.content ? null : <Text style={styles.result}>{this.state.textValue}</Text>}
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
});

export default App;
