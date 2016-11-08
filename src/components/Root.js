import React, { Component } from 'react';
import { View, StyleSheet, Image, StatusBar } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Button from 'react-native-button';

export default class Root extends Component {
  render() {
    return (
      <Image style={styles.backgroundImage} source={require('../../assets/image.jpeg')}>
				<View>
					<Button
						containerStyle={{ padding: 20 }}
						style={{fontSize: 20, color: 'white', fontWeight: '400'}}
						onPress={() => Actions.pageOne()}>
						GO : Page One
					</Button>
					<Button
						containerStyle={{ padding: 20 }}
						style={{fontSize: 20, color: 'white', fontWeight: '400'}}
						onPress={() => Actions.pageTwo()}>
						GO : Page Two
					</Button>
				</View>
			</Image>
    )
  }
}

StatusBar.setBarStyle('default', true);

const styles = StyleSheet.create({
  backgroundImage: {
		flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
