import React, { Component } from 'react';
import {
	AppRegistry, FlatList, StyleSheet, Text, View, Image, Alert
	, Platform, TouchableHightlight, Dimensions, TextInput, ImageBackground
} from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import flatListData from '../model/flatListData';

export default class EditModel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			brandName: '',
			numberDescription: '',
			items: []
		}
	}
	showEditModal = (editingvehicule, flatListItem) => {
		this.setState({
			// key: editingvehicule.key,
			brandName: editingvehicule.marque,
			numberDescription: editingvehicule.numéro_immatriculation,
			flatListItem: flatListItem,
			// useNativeDriver: false,
		});
		this.refs.myModal.open();
	}
	getItems(){
		 fetch('http://192.168.1.102:3000/vehicules')
			.then(response => response.json())
			.then(items => this.setState({items}))
			.catch(err => console.log(err))
	}
	
		
		componentDidMount(){
	    this.getItems()
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
					height: 280
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
					marginTop: 40
				}}>Modifier les informations du véhicule</Text>
				<TextInput 
					style={{
						height: 40,
						borderBottomColor: 'gray',
						marginLeft: 30,
						marginRight: 30,
						marginTop: 20,
						marginBottom: 10,
						borderBottomWidth: 1
					}}
					onChangeText={(text) => this.setState({brandName: text})}
					placeholder="Modifier La Marque"
					value={this.state.brandName}
				/>
				<TextInput 
					style={{
						height: 40,
						borderBottomColor: 'gray',
						marginLeft: 30,
						marginRight: 30,
						marginTop: 20,
						marginBottom: 10,
						borderBottomWidth: 1
					}}
					onChangeText={(text) => this.setState({numberDescription: text})}
					placeholder="Entrer Le Numéro d'immatriculation"
					value={this.state.numberDescription}
				/>
				<Text>.</Text>
				<Button
					style={{ fontSize: 18, color: 'white' }}
					containerStyle={{
						padding: 8,
						marginLeft: 70,
						marginRight: 70,
						height: 40,
						borderRadius: 6,
						backgroundColor: '#a7beae'
					}}
					onPress={ () => {
						// if (this.state.brandName.length == 0 || this.state.numberDescription.length == 0) {
						// 	alert("Vous devez remplir tous les champs!");
						// 	return;
						// }
						var foundIndex = this.state.items.findIndex(item => this.state.key == item.key);
						if ( foundIndex < 0 ) {
							return; //not found
						}
						this.state.items[foundIndex].marque=this.state.brandName;
						this.state.items[foundIndex].numéro_immatriculation=this.state.numberDescription;
						this.state.flatListItem.refreshFlatListItem();
						this.refs.myModal.close();
					}}>
				Valider
				</Button>
			</Modal>
		);
	}
}