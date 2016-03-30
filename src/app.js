
import React, { Alert, Component, ListView, StyleSheet, Text, View } from 'react-native';

import cities from './cities';

const styles = StyleSheet.create({
	container: {
		paddingTop: 20,
		flex: 1,
		backgroundColor: 'gray'
	},
	city: {
		margin: 10,
		fontSize: 18,
		fontWeight: 'bold'
	}
});

cities[0] = 'Vielvielvielvielvielvielvielvielzulangerstädtename';

const cityDataSource = new ListView.DataSource({
	rowHasChanged: (r1, r2) => r1 !== r2
});

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dataSource: cityDataSource.cloneWithRows(cities)
		};
	}

	render() {
		return (
			<ListView
					dataSource={ this.state.dataSource }
					renderRow={ this.renderRow }
					style={ styles.container }
			/>
		)
	}

	renderRow(rowData, sectionID, rowID, highlightRow) {
		return <Text style={ styles.city }>{ parseInt(rowID) + 1 }. { rowData }</Text>;
	}
}
