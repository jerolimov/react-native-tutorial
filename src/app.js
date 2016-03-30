
import React, { Component, LayoutAnimation, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 20,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'gray'
	},
	button: {
		position: 'absolute',
		left: 16,
		right: 16,
		bottom: 16,
		padding: 10,
		borderWidth: 2,
		borderColor: 'white',
		borderRadius: 10
	},
	text: {
		fontSize: 18,
		fontWeight: 'bold',
		color: 'white',
		backgroundColor: 'transparent'
	}
});

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			boxWidth: 200,
			boxHeight: 100
		};
	}

	toggle() {
		LayoutAnimation.spring();
		this.setState({
			boxWidth: this.state.boxWidth !== 200 ? 200 : 100,
			boxHeight: this.state.boxHeight !== 100 ? 100 : 200
		});
	}

	componentWillMount() {
		LayoutAnimation.spring();
	}

	render() {
		const width = this.state.boxWidth;
		const height = this.state.boxHeight;

		return (
			<View style={ styles.container }>

				<View style={{ width, height, backgroundColor: 'lightgray' }}>
					<Text style={ styles.text }>{ width } x { height }</Text>
				</View>

				<TouchableOpacity style={ styles.button } onPress={ this.toggle.bind(this) }>
					<Text style={ styles.text }>Toggle</Text>
				</TouchableOpacity>
			</View>
		);
	}
}
