import React, { Component } from 'react';
import {
	AppRegistry, FlatList, StyleSheet, Text, View, Image, Alert
	, Platform, TouchableHightlight, Dimensions, TextInput, TouchableOpacity
} from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import flatListData from '../model/flatListData';


export default class ExtraDetailsModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dernierevidange: '',
			kilometrage: ''
		}
	}
	showExtraDetailsModal = (detailsvehicule, flatListItem) => {
		this.setState({
			dernierevidange: detailsvehicule.dernierevidange,
			kilometrage: detailsvehicule.kilometrage,
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
					height: 600
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
				}}>L' Ensemble des Interventions</Text>
				<Text></Text>
				<Text style={{marginLeft: 30, fontWeight: 'bold'}}>Dernière Vidange</Text>
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
						marginTop: 20,
						marginBottom: 10,
						borderBottomWidth: 1
					}}
					value={this.state.kilometrage}
					editable={false}
				/>
			</Modal>
		);
	}
}