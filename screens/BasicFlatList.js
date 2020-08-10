import React, { Component } from 'react';
import { AppRegistry, TouchableHighlight, TouchableOpacity, Image, FlatList, Platform, ImageBackground, StyleSheet, Text, View } from 'react-native';
import flatListData from '../model/flatListData';
import AddModal from './AddModal';
import Swipeout from 'react-native-swipeout';
import EditModel from './EditModel';

class FlatListItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeRowKey: null,
			numberOfRefresh: 0,
			items: []
		};
		this._onPressEdit=this._onPressEdit.bind(this);
	}
	refreshFlatListItem = () => {
		this.setState((prevState) => {
			return {
				numberOfRefresh: prevState.numberOfRefresh +1
			};
		});
	}

	_onPressEdit = () => {
		this.props.parentFlatList.refs.editModal.showEditModal(this.state.items[this.props.index], this);
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

	render() {
		return (
				<View style={{flex: 1}}>
				<View style={{
							flex: 1,
							flexDirection: 'column',
							marginTop: 17
							}}>
				<TouchableOpacity
                  underlayColor="#25258e"
                  onPress={this._onPressEdit}
                >
				
				<View style={{
							flex: 1,
							flexDirection: 'row',
							backgroundColor: '#c6d7eb',
		   					// marginLeft: 20,
		   					justifyContent:'center',
		   					alignItems: 'center',
		   					// width: "100%",
		   					width:600,
		   					height:120,
		   					// margin: 10
							}}>
							<ImageBackground
			                  style={{ flex: 1 }}
			                  source={{
			                    uri:
			                      'https://wallpaperaccess.com/full/733833.jpg',
			                }}
		       				 >
								<Image
									source={{uri: this.props.item.imageurl}}
							    	style={{width:170, height:100, marginLeft: 30, marginTop:2}} 
					            />
								<View style={{
									flex: 1,
									flexDirection: 'column',
		              				alignItems: 'center',
									height: 20,
									width:'100%',
									marginLeft: 70,
									marginTop:-60,
								}}>
									<Text style={styles.flatListItem}>{this.props.item.marque}          </Text>
									<Text>    </Text>		
									<Text style={styles.flatListItem}>{this.props.item.numéro_immatriculation}</Text>
								
								</View>	
								</ImageBackground>	
				</View>
				</TouchableOpacity>
				</View>
				</View>	

		);
	}
}

const styles = StyleSheet.create({
	flatListItem: {
	color: '#b85042',
	// marginTop: 0,
 //    margin:3,
 	marginRight:0,
    padding:10,
    // backgroundColor:"white",
    width:"95%",
    // height: 40,
    alignSelf:"center",
    flexDirection:"row",
    fontWeight:'bold',
    fontSize: 18,
    marginLeft: 260,
    marginTop: -30
	}
})

export default class BasicFlatList extends Component {
	
	constructor(props) {
		super(props);
		this.state = ({
			deleteRowKey: null,
			items: []
		})
		this._onPressAdd = this._onPressAdd.bind(this);
	}
	refreshFlatList = (activeKey) => {
		this.setState((prevState)=>{
			return{
				deleteRowKey: activeKey
			};
		});
		this.refs.flatList.scrollToEnd();
	}
	_onPressAdd () {
			this.refs.addModal.showAddModal();
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
	render() {
		return (
			<View style={{flex: 1, marginTop: Platform.OS === 'ios' ? 34 : 2}}>
			<View style={{
					backgroundColor: "#a7beae",
					height: 50,
					flexDirection: 'row',
					justifyContent: 'flex-end',
					alignItems: 'center',
					}}>
					<Text style={{marginTop:3, marginRight:55, color:'black', fontSize: 20, fontWeight:'bold'}}>Ajouter Un Véhicule</Text>

					<TouchableOpacity
						style={{marginRight: 15, fontWeight:'bold'}}
						underlayColor="#DCDCDC"
						onPress={this._onPressAdd}
					>
					<Image
						style={{width: 40, height: 42, marginTop: 3}}
						source={require('../assets/add.png')}
					/>
					</TouchableOpacity>
				</View>
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
				<AddModal ref={'addModal'} parentFlatList={this}>
				</AddModal>
				<EditModel ref={'editModal'} parentFlatList={this}>
				</EditModel>
			</View>
			
		);
	}
}
//#009387