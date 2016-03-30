
import React, { Component, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

import actions from '../../store/actions';

const styles = StyleSheet.create({
	loadingText: {
		color: 'gray',
		fontSize: 32,
		textAlign: 'center',
	},
	button: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		margin: 3,
		backgroundColor: '#eeeeee'
	},
	restartButton: {
		margin: 16,
		padding: 16,
		borderWidth: 2,
		borderColor: '#dddddd',
		borderRadius: 10,
		backgroundColor: '#eeeeee'
	},
	restartButtonText: {
		color: '#bbbbbb',
		textAlign: 'center'
	},
});

export class LoadingView extends Component {
	render() {
		if (this.props.initialized) {
			return this.props.children;
		}

		return (
			<View style={{ flex: 1, paddingTop: 20 }}>
				<View style={{ flex: 1 }} />
				<Text style={ styles.loadingText }>Loading...</Text>
				<View style={{ flex: 1 }} />
				{ this.renderGameField() }
				<View style={{ flex: 1 }} />
				{ this.renderRestartButton() }
			</View>
		);
	}

	renderGameField() {
		return (
			<View style={{ alignSelf: 'center', width: 300, height: 300 }}>
				<View style={{ flex: 1, flexDirection: 'row' }}>
					<View style={ styles.button } />
					<View style={ styles.button } />
					<View style={ styles.button } />
				</View>
				<View style={{ flex: 1, flexDirection: 'row' }}>
					<View style={ styles.button } />
					<View style={ styles.button } />
					<View style={ styles.button } />
				</View>
				<View style={{ flex: 1, flexDirection: 'row' }}>
					<View style={ styles.button } />
					<View style={ styles.button } />
					<View style={ styles.button } />
				</View>
			</View>
		);
	}

	renderRestartButton() {
		return (
			<View style={ styles.restartButton }>
				<Text style={ styles.restartButtonText }>Restart Game</Text>
			</View>
		);
	}
}

export default connect((state) => ({ initialized: state.app.initialized }))(LoadingView);
