import React, { Component } from 'react';
import { AppRegistry, TouchableHighlight, TouchableOpacity, Image, FlatList, Platform, StyleSheet, Text, View } from 'react-native';
import flatListData from '../model/flatListData';
import DetailsPromospubModel from './DetailsPromosModel';

class FlatListItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeRowKey: null,
			items: []
		};
		this._onPressDetails = this._onPressDetails.bind(this);
	}

	_onPressDetails = () => {
		this.props.parentFlatList.refs.detailsPromospubModal.showPromosDetailsModal(this.state.items[this.props.index], this);
	}
	
	getItems(){
	    fetch('http://192.168.1.102:3000/touteslespromotions')
	      .then(response => response.json())
	      .then(items => this.setState({items}))
	      .catch(err => console.log(err))
	  	}
	
		componentDidMount(){
	    this.getItems()
	  	}


	render() {
	
		return (
				<View style={{
				flex: 1,
				flexDirection: 'column',
				marginTop: 2
				}}>
				<TouchableOpacity
					underlayColor="#25258e"
					onPress={this._onPressDetails}
				>
				<View style={{
					flex: 1,
					flexDirection: 'row',
					backgroundColor: '#dedede',
					// backgroundColor:'#81b7d2',
					height: 120,
					borderRadius: 8
					}}>
						<Image
							source={{uri: this.props.item.imagepromourl}}
							style={{width:170, height:114, marginLeft: 0, marginTop:2}}
						>
						</Image>
						<View style={{
									flex: 1,
									flexDirection: 'column',
		              				alignItems: 'center',
									height: 20,
									marginLeft: -5,
									marginTop:20,
						}}>
							
							<Text style={styles.flatListItem}>{this.props.item.duree}</Text>
							<Text style={styles.flatListItemdesc}>{this.props.item.desc_promotion}</Text>

						</View>
						
						
				</View>
					</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	flatListItem: {
	color: '#1d3c45',
	// marginTop: 0,
 //    margin:3,
    padding:10,
    // backgroundColor:"white",
    width:"95%",
    // height: 40,
    alignSelf:"center",
    flexDirection:"row",
    fontWeight:'bold',
    fontSize: 17,
    marginLeft: 20,
    marginTop: -20
	},
	flatListItemdesc: {
		color: 'red',
		padding: 18,
		marginTop: -30,
		marginLeft: 10,
		// fontWeight: 'bold',
		fontSize: 15,
	}
})

export default class InterventionsFlatList extends Component {
	
	constructor(props) {
		super(props);
		this.state = ({
			deleteRowKey: null,
			items: []
		})
	}
	getItems(){
	    fetch('http://192.168.1.102:3000/touteslespromotions')
	      .then(response => response.json())
	      .then(items => this.setState({items}))
	      .catch(err => console.log(err))
	  	}
	
		componentDidMount(){
	    this.getItems()
	  	}
	render() {
		return (
			<View style={{flex: 1, marginTop: Platform.OS === 'ios' ? 34 : 2}}>
				<FlatList 
					ref= {"flatList"}
					data={this.state.items}
					renderItem={({item, index}) => {
						return (
							<FlatListItem item={item} index={index} parentFlatList={this}>
							</FlatListItem>
						);						
					}}
				>
				</FlatList>
				<DetailsPromospubModel ref={'detailsPromospubModal'} parentFlatList={this}>
				</DetailsPromospubModel>
			</View>
			
		);
	}
}








// import React, { Component } from 'react';
// import { AppRegistry, TouchableHighlight, TouchableOpacity, Image, FlatList, Platform, StyleSheet, Text, View } from 'react-native';
// // import flatListData from '../model/flatListData';
// import DetailsPromospubModel from './DetailsPromospubModel';

// class FlatListItem extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			activeRowKey: null,
// 			items: []
// 		};
		
// 	}

// 	// _onPressDetails = () => {
// 	// 	this.props.parentFlatList.refs.detailsPromospubModal.showPromosDetailspubModal(this.state.items[this.props.index], this);
// 	// }

// 	getItems(){
//     fetch('http://192.168.1.8:3000/touteslespromotions')
//       .then(response => response.json())
//       .then(items => this.setState({items}))
//       .catch(err => console.log(err))
//   	}
	
// 		componentDidMount(){
// 	    this.getItems()
// 	  	}

// 	render() {
// 		return (
// 				<View style={{
// 				flex: 1,
// 				flexDirection: 'column',
// 				marginTop: 2
// 				}}>
// 				<TouchableOpacity
// 					underlayColor="#25258e"
// 					// onPress={this._onPressDetails}
// 				>
// 				<View style={{
// 					flex: 1,
// 					flexDirection: 'row',
// 					backgroundColor: '#e5e5dc',
// 					height: 100,
// 					borderRadius: 8
// 					}}>
// 						<Image
// 							source={{uri: this.state.items.imagepromourl}}
// 							style={{width: 	100, height: 100}}
// 						>
// 						</Image>
// 						<View style={{
// 							flex: 1,
// 							flexDirection: 'column'
// 						}}>
							
// 							<Text style={styles.flatListItem}>{this.state.items.duree}</Text>
// 							<Text style={styles.flatListItemdesc}>{this.state.items.desc_promotion}</Text>

// 						</View>
						
						
// 				</View>
// 					</TouchableOpacity>
// 			</View>
// 		);
// 	}
// }

// const styles = StyleSheet.create({
// 	flatListItem: {
// 		color: 'black',
// 		padding: 18,
// 		marginTop: -18,
// 		// fontWeight: 'bold',
// 		fontSize: 16,
// 	},
// 	flatListItemdesc: {
// 		color: 'black',
// 		padding: 18,
// 		marginTop: -33,
// 		// fontWeight: 'bold',
// 		fontSize: 12,
// 	}
// })

// export default class ToutesLesPromotions extends Component {
	
// 	constructor(props) {
// 		super(props);
// 		this.state = ({
// 			deleteRowKey: null,
// 			items:[]
// 		})

// 	}

// 	getItems(){
//     fetch('http://192.168.1.8:3000/touteslespromotions')
//       .then(response => response.json())
//       .then(items => this.setState({items}))
//       .catch(err => console.log(err))
//   	}
	
// 		componentDidMount(){
// 	    this.getItems()
// 	  	}


// 	render() {
// 		return (
// 			<View style={{flex: 1, marginTop: Platform.OS === 'ios' ? 34 : 2}}>
// 				<FlatList 
// 					ref= {"flatList"}
// 					data={this.state.items}
// 					renderItem={({item, index}) => {
// 						return (
// 							<FlatListItem item={this.state.items} index={index} parentFlatList={this}>
// 							</FlatListItem>
// 						);						
// 					}}
// 				>
// 				</FlatList>
// 				<DetailsPromospubModel ref={'detailsPromospubModal'} parentFlatList={this}>
// 				</DetailsPromospubModel>
// 			</View>
			
// 		);
// 	}
// }