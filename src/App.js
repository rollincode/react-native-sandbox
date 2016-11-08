import React, { Component } from 'react';
import { Actions, Scene, Router } from 'react-native-router-flux';
import Drawer from 'react-native-drawer';
import Icon from 'react-native-vector-icons/Ionicons';

import {
	Navigator,
	StyleSheet,
	TouchableOpacity,
	Image,
} from 'react-native'

import SideMenu from './components/common/SideMenu';

import Root from './components/Root';
import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

	render() {
    return (
			<Drawer
        ref="controlPanel"
        type="overlay"
				styles={{main: {shadowColor: '#000000', shadowOpacity: 0.3, shadowRadius: 15}}}
        content={<SideMenu />}
        tapToClose
        acceptPan={false}
        openDrawerOffset={0.2}
        panCloseMask={0.2}
        negotiatePan
      >
				<Router>
					<Scene key="main">
						<Scene key="root" component={Root} hideNavBar={true} />
						<Scene key="pageOne" component={PageOne} title="Page One" hideNavBar={false} style={styles.routerScene} renderBackButton={this.renderBackButton} renderRightButton={this.renderMenuButton}/>
						<Scene key="pageTwo" component={PageTwo} title="Page Two" hideNavBar={false} style={styles.routerScene} renderBackButton={this.renderBackButton} renderRightButton={this.renderMenuButton}/>
					</Scene>
				</Router>
			</Drawer>
		)
  }

	renderMenuButton = () => {
		return (
			<TouchableOpacity style={[styles.buttonContainer, styles.rightButton]}
				onPress={this.openControlPanel}>
				<Icon name="ios-menu" size={30} color="#3498db"/>
			</TouchableOpacity>
		);
	}

	renderBackButton = () => {
		return (
			<TouchableOpacity style={[styles.buttonContainer, styles.leftButton]}
				onPress={Actions.pop}>
				<Icon name="ios-arrow-back" size={30} color='#3498db'/>
			</TouchableOpacity>
		);
	}

  openControlPanel = () => {
    this.refs.controlPanel.open();
  };
}

const styles = StyleSheet.create({
	routerScene: {
		paddingTop: Navigator.NavigationBar.Styles.General.NavBarHeight + 20, // some navbar padding to avoid content overlap
	},
	buttonContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
	},
	leftButton: {
		paddingLeft: 15
	},
	rightButton: {
		paddingRight: 15
	}
})
