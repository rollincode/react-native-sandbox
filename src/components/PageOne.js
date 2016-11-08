import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class PageOne extends Component {
  render() {
    const goToPageTwo = () => Actions.pageTwo({text: 'Hello World!'});

    return (
      <View style={{margin: 128}}>
        <Text onPress={goToPageTwo}>This is PageOne! Click to go page two with custom content</Text>
      </View>
    )
  }
}
