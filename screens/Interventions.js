import React, { Component } from 'react';
import { AppRegistry, TouchableHighlight, TouchableOpacity, ImageBackground, Image, FlatList, Platform, StyleSheet, Text, View } from 'react-native';
import FlatListData from '../model/flatListData';
import DetailsModel from './Detailsmodel'

class FlatListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeRowKey: null,
    };
    this._onPressDetails = this._onPressDetails.bind(this);
  }

  _onPressDetails = () => {
    this.props.parentFlatList.refs.detailsModal.showDetailsModal(this.state.items[this.props.index], this);
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

  render() {
    return (
        <View style={{
        flex: 1,
        flexDirection: 'column',
        marginTop: 2
        }}>
          <View style={{
                flex: 1,
                flexDirection: 'column',
                marginTop: 17
                }}>
               
                <TouchableOpacity
                  underlayColor="#25258e"
                  onPress={this._onPressDetails}
                >
                
                <View style={{
                  flex: 1,
                  flexDirection: 'row',
                  backgroundColor: '#e5e5dc',
                  height: 100,
                  borderRadius: 8,
                  
                  }}>
                   <ImageBackground
                    style={{ flex: 1 }}
                    source={{
                      uri:
                        'https://wallpaperaccess.com/full/733833.jpg',
                  }}
                >    
                    <View
                      style={{
                        flexDirection: 'row'
                      }}
                    >
                    <View style={{
                      flex: 1,
                      flexDirection: 'column'
                    }}>
                      <Text style={{fontSize:20, marginLeft: 19, fontWeight: 'bold', color: "#d2601a"}}>Véhicule</Text>
                      <Text style={styles.flatListItem}>{this.props.item.marque}</Text>

                    </View>
                     <View style={{
                      flex: 1,
                      flexDirection: 'column'
                    }}>
                      <Text style={{fontSize:19, marginLeft: 19, fontWeight: 'bold', color: "#d2601a"}}>Immatriculation</Text>
                      <Text style={styles.flatListItem}>{this.props.item.numéro_immatriculation}</Text>
                    </View>
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
    color: '#1d3c45',
    padding: 18,
    fontWeight: 'bold',
    fontSize: 16,
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
  refreshFlatList = (activeKey) => {
    this.setState((prevState)=>{
      return{
        deleteRowKey: activeKey
      };
    });
    this.refs.flatList.scrollToEnd();
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

        <DetailsModel ref={'detailsModal'} parentFlatList={this}>
        </DetailsModel>
      </View>
      
    );
  }
}