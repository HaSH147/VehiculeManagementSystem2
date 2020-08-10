import React, { Component } from 'react';
import {
	AppRegistry, FlatList, StyleSheet, Text, View, Image, Alert
	, Platform, TouchableHightlight, Dimensions, TextInput, TouchableOpacity
} from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import flatListData from '../model/flatListData';
import ExtraDetailsModal from './ExtraDetailsModel'

// var screen = Dimensions.get('widow');
export default class DetailsModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			marque: '',
			numéro_immatriculation: '',
			description: '',
			derniere_vidange: '',
			kilometrage: ''
		}
		// this._onPressExtraDetails = this._onPressExtraDetails.bind(this);
	}
	getItems(){
    fetch('http://192.168.1.102:3000/interventions')
      .then(response => response.json())
      .then(items => this.setState({items}))
      .catch(err => console.log(err))
    }
  
    componentDidMount(){
      this.getItems()
      }
	 	
	showDetailsModal = (detailsvehicule, flatListItem) => {
		this.setState({
			key: detailsvehicule.key,
			numéro_immatriculation: detailsvehicule.numéro_immatriculation,
			dernierevidange: detailsvehicule.derniere_vidange,
			kilometrage: detailsvehicule.kilometrage,
			detail1: detailsvehicule.description,
			flatListItem: flatListItem,
			dateintervention: detailsvehicule.date_intervention,
			detailderniereintervention: detailsvehicule.description
			// useNativeDriver: false,
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
					height: 400
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
				}}>Détails des Interventions</Text>
				<Text>.</Text>
				<Text style={{marginLeft: 30, fontWeight: 'bold'}}>Dernière Vidange</Text>
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
					value={this.state.dernierevidange}
					editable={false}
				/>
				<Text style={{marginLeft: 30, fontWeight: 'bold'}}>Kilometrage</Text>
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
					value={this.state.kilometrage}
					editable={false}
				/>
				<Text style={{marginLeft: 30, fontWeight: 'bold'}}>Derniere Intervention</Text>
				<View style={{flexDirection: "row"}}>
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
					value={this.state.dateintervention}
					editable={false}
				/>
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
					value={this.state.detailderniereintervention}
					editable={false}
				/>

				</View>
			</Modal>
		);
	}
}