import React, { Component } from 'react';

import { View, Text } from 'react-native';

export default class Main extends Component{
    static navigationOptions = {
        title: "Rock, Paper, Scissors"
    }


    render(){
        return(
            <View>
                <Text>Page</Text>
            </View>
        )
    }
}