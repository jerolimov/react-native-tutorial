
import React, { Alert, Component, ScrollView, StyleSheet, Text, View } from 'react-native';

import cities from './cities';

const styles = StyleSheet.create({
	container: {
		paddingTop: 20,
		flex: 1,
		backgroundColor: 'gray'
	},
	contentContainer: {
	},
	city: {
		margin: 10,
		fontSize: 18,
		fontWeight: 'bold'
	}
});

cities[0] = 'Vielvielvielvielvielvielvielvielzulangerstädtename';

export default class App extends Component {
	render() {
		return (
			<ScrollView style={ styles.container } contentContainerStyle={ styles.contentContainer }>

				{
					cities.filter((city, index) => index < 1000).map((city, index) => {
						return <Text key={ city } style={ styles.city }>{ index + 1 }. { city }</Text>
					})
				}

			</ScrollView>
		);
	}
}
