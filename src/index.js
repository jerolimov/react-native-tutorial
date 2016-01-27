
import React, { Component, View, Text, TouchableOpacity, ListView } from 'react-native';

import cities from './cities';

export default class ListViewExample extends Component {
	constructor(props) {
		super(props);

		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			dataSource: ds.cloneWithRows(cities)
		}
	}

	render() {
		return (
			<View style={{ flex: 1, paddingTop: 20 }}>
				<ListView
						dataSource={ this.state.dataSource }
						renderRow={ this.renderRow.bind(this) }
						style={{  }}
				/>
			</View>
		)
	}

	renderRow(rowData) {
		return (
			<View style={{ padding: 10, borderColor: '#eeeeee', borderBottomWidth: 1 }}>
				<TouchableOpacity>
					<Text>{rowData}</Text>
				</TouchableOpacity>
			</View>
		);
	}
}
