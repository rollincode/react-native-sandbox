import React, { Component } from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';

export default class SideMenu extends Component {
	render() {
		return (
			<ScrollView style={styles.container}>
				<Text style={styles.text}>MAIN</Text>
				<Text style={styles.text}>MAIN</Text>
				<Text style={styles.text}>MAIN</Text>
			</ScrollView>
    )
	}
}

const styles = StyleSheet.create({
	container: {
    backgroundColor: '#34495e',
    paddingTop: 20,
		paddingLeft: 5,
		paddingRight: 5,
    flex: 1,
  },
	text: {
		color: 'white'
	}
});
