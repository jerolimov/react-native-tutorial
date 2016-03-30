
import React, { Alert, Component, ListView, StyleSheet, Text, View } from 'react-native';

import cities from './cities';

const styles = StyleSheet.create({
	container: {
		marginTop: 20,
		flex: 1,
	},
	section: {
		padding: 10,
		fontSize: 18,
		fontWeight: 'bold',
		backgroundColor: 'lightgray'
	},
	city: {
		margin: 10
	}
});

cities[0] = 'A Vielvielvielvielvielvielvielvielzulangerstädtename';

const sections = {};
const mapping = {
	'Ä': 'A',
	'Ö': 'O',
	'Ü': 'U',
	'Ś': 'S'
}

// Prepare sections A-Z
for (var i = 65; i < 91; i++) {
	sections[String.fromCharCode(i)] = [];
	console.log();
}

// Map cities into sections
cities.forEach((city) => {
	let firstChar = city.substr(0, 1).toUpperCase();
	if (mapping[firstChar]) {
		firstChar = mapping[firstChar];
	}
	sections[firstChar].push(city);
});

const cityDataSource = new ListView.DataSource({
	sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
	rowHasChanged: (r1, r2) => r1 !== r2
});

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dataSource: cityDataSource.cloneWithRowsAndSections(sections)
		};
	}

	render() {
		return (
			<ListView
					dataSource={ this.state.dataSource }
					renderSectionHeader={ this.renderSectionHeader }
					renderRow={ this.renderRow }
					style={ styles.container }
			/>
		)
	}

	renderSectionHeader(sectionData, sectionID) {
		return <Text style={ styles.section }>{ sectionID } ({ sectionData.length } cities)</Text>;
	}

	renderRow(rowData, sectionID, rowID, highlightRow) {
		return <Text style={ styles.city }>{ parseInt(rowID) + 1 }. { rowData }</Text>;
	}
}
