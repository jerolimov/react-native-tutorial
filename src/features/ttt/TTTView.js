
import React, { Component, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';

import actions from '../../store/actions';

const styles = StyleSheet.create({
	neutralText: {
		color: 'darkgray',
		fontSize: 32,
		textAlign: 'center',
	},
	player1Text: {
		color: 'red',
		fontSize: 32,
		textAlign: 'center',
	},
	player2Text: {
		color: 'blue',
		fontSize: 32,
		textAlign: 'center',
	},
	button: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		margin: 3
	},
	freeButton: {
		backgroundColor: 'lightgray'
	},
	player1Button: {
		backgroundColor: 'red'
	},
	player2Button: {
		backgroundColor: 'blue'
	},
	restartButton: {
		margin: 16,
		padding: 16,
		borderWidth: 2,
		borderColor: '#EF6C00',
		borderRadius: 10,
		backgroundColor: '#FFE0B2'
	},
	restartButtonText: {
		textAlign: 'center'
	},
});

export class Button extends Component {
	render() {
		const currentPlayer = this.props.gameField[this.props.index];

		const style = [ styles.button ];
		const onPress = this.props.selectField.bind(null, this.props.index);

		if (currentPlayer === 1) {
			style.push(styles.player1Button);
		} else if (currentPlayer === 2) {
			style.push(styles.player2Button);
		} else {
			style.push(styles.freeButton);
		}

		return (
			<TouchableOpacity style={ style } onPress={ onPress } />
		);
	}
}

export class Row extends Component {
	render() {
		return (
			<View style={{ flex: 1, flexDirection: 'row' }}>
				<Button { ...this.props } index={ this.props.index * 3 } />
				<Button { ...this.props } index={ this.props.index * 3 + 1 } />
				<Button { ...this.props } index={ this.props.index * 3 + 2 } />
			</View>
		);
	}
}

export class TTTView extends Component {
	render() {
		return (
			<View style={{ flex: 1, paddingTop: 20 }}>
				<View style={{ flex: 1 }} />
				{ this.renderNextPlayer() }
				<View style={{ flex: 1 }} />
				{ this.renderGameField() }
				<View style={{ flex: 1 }} />
				{ this.renderRestartButton() }
			</View>
		);
	}

	renderNextPlayer() {
		if (this.props.winner === 'draw') {
			return <Text style={ styles.neutralText }>DRAW!</Text>
		} else if (this.props.winner === 1) {
			return <Text style={ styles.player1Text }>Player 1 WINS!</Text>
		} else if (this.props.winner === 2) {
			return <Text style={ styles.player2Text }>Player 2 WINS!</Text>
		} else {
			return (
				<Text style={ styles.neutralText }>
					{ 'Next Player: ' }
					<Text style={ this.props.next === 1 ? styles.player1Text : styles.player2Text }>
						{ this.props.next }
					</Text>
				</Text>
			);
		}
	}

	renderGameField() {
		return (
			<View style={{ alignSelf: 'center', width: 300, height: 300 }}>
				<Row { ...this.props } index={ 0 } />
				<Row { ...this.props } index={ 1 } />
				<Row { ...this.props } index={ 2 } />
			</View>
		);
	}

	renderRestartButton() {
		return (
			<TouchableOpacity style={ styles.restartButton } onPress={ this.props.restartGame.bind(null) }>
				<Text style={ styles.restartButtonText }>Restart Game</Text>
			</TouchableOpacity>
		);
	}
}


export default connect((state) => state.ttt, actions)(TTTView);
