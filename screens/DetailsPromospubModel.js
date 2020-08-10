import React, { Component } from 'react';
import {
	AppRegistry, FlatList, StyleSheet, Text, View, Image, Alert
	, Platform, TouchableHightlight, Dimensions, TextInput, TouchableOpacity
} from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
// import flatListData from '../model/flatListData';


export default class DetailsPromospubModel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			duree: '',
			prix: '',
			// dateachatpromo:'',
			items:[]
		}
	}	 	

	showPromosDetailsModal = (detailspromos, flatListItem) => {
		this.setState({
			// key: detailspromos.key,
			duree: detailspromos.duree,
			detail1: 'detail1',
			prix: detailspromos.prix,
			// dateachatpromo: detailspromos.dateachatpromo,
			achat: false,
			flatListItem: flatListItem,
		});
		this.refs.myModal.open();
	}
	render(){
		return (
			<Modal
				ref={"myModal"}
				style={{
					justifyContent: 'center',
					borderradius: Platform.OS === 'ios' ? 30 : 0,
					showRadius: 10,
					borderRadius: 15,
					width: 350,
					height: 500
				}}
				position='center'
				backdrop={true}
				onClosed={() => {
					
				}}
			>
				<Text style={{
					fontSize: 16,
					fontWeight: 'bold',
					textAlign: 'center',
					// marginTop: 0
				}}>Détails de cette Promotion</Text>
				<Text>.</Text>
				<Text style={{marginLeft: 30, fontWeight: 'bold'}}>Durée de La Promotion</Text>
				<TextInput 
					style={{
						height: 40,
						borderBottomColor: 'gray',
						marginLeft: 30,
						marginRight: 30,
						width: 300,
						// marginTop: 20,
						marginBottom: 10,
						borderBottomWidth: 1
					}}
					value={this.state.duree}
					editable={false}
				/>
				<Text style={{marginLeft: 30, fontWeight: 'bold'}}>Détail 1</Text>
				<TextInput 
					style={{
						height: 40,
						borderBottomColor: 'gray',
						marginLeft: 30,
						marginRight: 30,
						// marginTop: 20,
						width:300,
						flexWrap: "wrap",
						marginBottom: 10,
						borderBottomWidth: 1
					}}
					value={this.state.detail1}
					editable={false}
				/>				
				<Text style={{marginLeft: 30, fontWeight: 'bold'}}>Prix                     </Text>
				
				
				<TextInput 
					style={{
						height: 40,
						borderBottomColor: 'gray',
						marginLeft: 30,
						marginRight: 30,
						// marginTop: 20,
						marginBottom: 10,
						borderBottomWidth: 1
					}}
					value= {this.state.prix}
					editable={false}
				/>
			</Modal>
		);
	}
}









	 	
// 	showPromosDetailspubModal = (detailspromos, flatListItem) => {
// 		this.setState({
// 			key: detailspromos.key,
// 			duree:detailspromos.duree,
// 			detail1: detailspromos.detail1,
// 			prixpromopub: detailspromos.prixpromopub,
// 			dateachatpromo: detailspromos.dateachatpromo,
// 			achat: false,
// 			flatListItem: flatListItem,
// 		});
// 		this.refs.myModal.open();
// 	}
// 	render(){
// 		return (
// 			<Modal
// 				ref={"myModal"}
// 				style={{
// 					justifyContent: 'center',
// 					borderradius: Platform.OS === 'ios' ? 30 : 0,
// 					showRadius: 10,
// 					borderRadius: 15,
// 					width: 350,
// 					height: 500
// 				}}
// 				position='center'
// 				backdrop={true}
// 				onClosed={() => {
					
// 				}}
// 			>
// 				<Text style={{
// 					fontSize: 16,
// 					fontWeight: 'bold',
// 					textAlign: 'center',
// 					// marginTop: 0
// 				}}>Détails de cette Promotion</Text>
// 				<Text>.</Text>
// 				<Text style={{marginLeft: 30, fontWeight: 'bold'}}>Durée de La Promotion</Text>
// 				<TextInput 
// 					style={{
// 						height: 40,
// 						borderBottomColor: 'gray',
// 						marginLeft: 30,
// 						marginRight: 30,
// 						// marginTop: 20,
// 						marginBottom: 10,
// 						borderBottomWidth: 1
// 					}}
// 					value={this.state.duree}
// 					editable={false}
// 				/>
// 				<Text style={{marginLeft: 30, fontWeight: 'bold'}}>Détail 1</Text>
// 				<TextInput 
// 					style={{
// 						height: 40,
// 						borderBottomColor: 'gray',
// 						marginLeft: 30,
// 						marginRight: 30,
// 						// marginTop: 20,
// 						marginBottom: 10,
// 						borderBottomWidth: 1
// 					}}
// 					value="detail 1"
// 					editable={false}
// 				/>
// 				<Text style={{marginLeft: 30, fontWeight: 'bold'}}>Détail 2</Text>
// 				<TextInput 
// 					style={{
// 						height: 40,
// 						borderBottomColor: 'gray',
// 						marginLeft: 30,
// 						marginRight: 30,
// 						// marginTop: 20,
// 						marginBottom: 10,
// 						borderBottomWidth: 1
// 					}}
// 					value= "detail 2"
// 					editable={false}
// 				/>
				
// 				<Text style={{marginLeft: 30, fontWeight: 'bold'}}>Prix                     </Text>
				
				
// 				<View style={{flexDirection: "row"}}>
// 				<TextInput 
// 					style={{
// 						height: 40,
// 						borderBottomColor: 'gray',
// 						marginLeft: 30,
// 						marginRight: 30,
// 						// marginTop: 20,
// 						marginBottom: 10,
// 						borderBottomWidth: 1
// 					}}
// 					value= {this.state.prix}
// 					editable={false}
// 				/>
// 				</View>
// 			</Modal>
// 		);
// 	}
// }