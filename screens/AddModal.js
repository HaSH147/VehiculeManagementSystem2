import React, { Component } from 'react';
import {
	AppRegistry, FlatList, StyleSheet, Text, View, Image, Alert
	, Platform, TouchableHightlight, Dimensions, TextInput
} from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import flatListData from '../model/flatListData';

// var screen = Dimensions.get('widow');
export default class AddModal extends Component {
	
		state = {
			marque: '',
			numéro_immatriculation: '',
			id_vehicule: '',
			items: []
		}


	onChange = e => {
    this.setState({[e.name]: e.value})
  }

  submitFormAdd = e => {
    e.preventDefault()
    fetch('http://192.168.1.102:3000/vehicules', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        marque: this.state.marque,
        id_vehicule:'123232',
        numéro_immatriculation: this.state.numéro_immatriculation
      })
    })
      .then(response => response.json())
      .then(item => {
        if(Array.isArray(item)) {
          this.props.addItemToState(item[0])
          this.props.toggle()
        } else {
          console.log('failure')
        }
      })
      .catch(err => console.log(err))
  }
  componentDidMount(){
    // if item exists, populate the state with proper data
    if(this.props.item){
      const { marque, numéro_immatriculation, id_vehicule } = this.props.item
      this.setState({ marque, numéro_immatriculation, id_vehicule })
    }
  }
	showAddModal = () => {
		// this.setState({
		// 	// key: editingvehicule.key,
		// 	brandName: editingvehicule.marque,
		// 	numberDescription: editingvehicule.numéro_immatriculation,
		// 	// flatListItem: flatListItem,
		// });
		this.refs.myModal.open()
	}
	generateKey =  (numberOfCharacters) => {
		return require('random-string')({length: numberOfCharacters});
	}
	addItemToState = (item) => {
    this.setState(prevState => ({
      items: [...prevState.items, item]
    }))
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
				}}>Saisir les informations du nouveau véhicule</Text>
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
					onChangeText={this.onChange}
					placeholder="Entrer La Marque"
					// value={this.state.marque}
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
					onChangeText={this.onChange}
					placeholder="Entrer Le Numéro d'immatriculation"
					// value={this.state.numéro_immatriculation}
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
						// const newKey = this.generateKey(24);
						const newVehicule = {
							// key: newKey,
							// imageurl: "https://www.caroom.fr/uploads/models/peugeot-208.png",
							marque: this.state.newBrandName,
							numéro_immatriculation: this.state.newNumberDescription,
							id_vehicule: 111111111
						}
						// this.state.items.push(newVehicule);
						this.addItemToState(newVehicule);
						// this.props.parentFlatList.refreshFlatList(newKey);
						this.refs.myModal.close();
					}}>
				Valider
				</Button>

			</Modal>
		);
	}
}