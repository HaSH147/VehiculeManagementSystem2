import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, ScrollView, ImageBackground, AsyncStorage, TextInput, Picker, Alert, Button, Text, View, TouchableOpacity } from 'react-native';
import DateTimePicker from "react-native-modal-datetime-picker";
import moment from 'moment';
// import reservationsData from '../model/reservationsData';
import interventionsData from '../model/flatListData';
// import Dropdown from 'react-native-material-dropdown';
import Icon from 'react-native-vector-icons/Feather';
import DropDownPicker from 'react-native-dropdown-picker';
import { CheckBox } from 'react-native-elements';
// import CheckBox from '@react-native-community/checkbox';
import Checkbox from 'react-native-paper';

export default class Reservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          isDateTimePickerVisible: false,
          chosenDate: '',
          description: '',
          namevehicule: '',
          came: 'false',
          Vehicule: '',
          items: [],
          selectedLang1:false,
          selectedLang2:false,
          selectedLang3:false,
          selectedLang4:false,
          checked:false,
          setChecked:false,

        };
        this.handleChangedescriptionInput = this.handleChangedescriptionInput.bind(this);
        this.handleChangeselectionInput = this.handleChangeselectionInput.bind(this); 
       }

     state = {user: ''}
     updateUser = (user) => {
        this.setState({ user: user })
     }
    saveData() {
        AsyncStorage.setItem("key", JSON.stringify(this.state));
    }
     
    showDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: true });
      };
     
    handleChangedescriptionInput = (input) =>  {
        this.setState({description:input});
    }
    //  handleChangenameInput = (input) =>  {
    //     this.setState({namevehicule:input});
    // }
    handleChangeselectionInput = (input) =>  {
        this.setState({namevehicule:input});
    }
    hideDateTimePicker = () => {
        this.setState({ 
          isDateTimePickerVisible: false,
        });
      
      };
     
    handleDatePicked = (datetime) => {
      this.setState({
        isDateTimePickerVisible: false,
        chosenDate: moment(datetime).format('MMMM, Da YYYY HH:mm')
      })
  };
  getItems(){
    fetch('http://192.168.1.5:3000/vehicules')
      .then(response => response.json())
      .then(items => this.setState({items}))
      .catch(err => console.log(err))
    }
  
    componentDidMount(){
      this.getItems()
      }
  render(){
    return (
      <View style={styles.container}>  
      
        <Text></Text>
          <Text style={[styles.textselect, {marginTop:70}]}>Choisir Le véhicule Concerné               </Text>
          <Text></Text>
         <DropDownPicker
              items={this.state.items.map(item=> ({label:`'${item.marque}'/${item.numéro_immatriculation}'`,value:`'${item.marque}'/${item.numéro_immatriculation}'`}))}
              // defaultValue='Vehicule Choisi'
              containerStyle={{height: 60, width: 390,}}
              style={{backgroundColor: '#fafafa', marginLeft:2}}
              itemStyle={{
                  justifyContent: 'flex-start'
              }}
              dropDownStyle={{backgroundColor: '#fafafa'}}
              onChangeItem={item => this.setState({
                  Vehicule: item.value
              })}
              searchable={true}
              searchablePlaceholder="Chercher un Vehicule"
              searchablePlaceholderTextColor="gray"
              onChangeText={this.handleChangeselectionInput}
              // // seachableStyle={{}}
              
        />

        <CheckBox
          title='                          Lavage/Vidange                          '
          checked={this.state.checked1}
          style={{width: 350, color:"#fc5185"}}
          onPress={() => this.setState({checked1: !this.state.checked1})}
      />
        <CheckBox
          center
          title='                  Changement de pneu                         '
          checked={this.state.checked2}
          onPress={() => this.setState({checked2: !this.state.checked2})}
        />

        <CheckBox
          title='                               Réparation                              '
          checked={this.state.checked3}
          onPress={() => this.setState({checked3: !this.state.checked3})}
        />
        <Text></Text>
      <Text style={styles.textdescription}>Ajoutez une description                                         </Text>
       <TextInput 
                    // placeholder="Description"
                    placeholderTextColor="#666665"
                    style={[styles.textInput, {
                        color: "black",
                        fontSize: 17,
                        width: 385,
                        height: 100
                    }]}
                    autoCapitalize="none"
                    onChangeText={this.handleChangedescriptionInput}
                    value={this.state.description}
                />
                <Text></Text><Text></Text>
          <View style={{flexDirection:'row'}}>
         <TouchableOpacity style={styles.button} onPress={this.showDateTimePicker}>
         <Text style={styles.text}>Choisir une date</Text>
       </TouchableOpacity>

       <DateTimePicker
            isVisible={this.state.isDateTimePickerVisible}
            onConfirm={this.handleDatePicked}
            onCancel={this.hideDateTimePicker}
            mode={'datetime'}
            is24Hour={true}

        />
      	<TouchableOpacity style={styles.buttonConfirm}
          onPress={ () => 
                            {
                              if( this.state.description.length == 0) {
                                alert('Veuillez Remplir tous les champs')
                                return;
                              } 
                              this.saveData()
                              console.log({'Date Reservation : ' : this.state.chosenDate, 'Description': this.state.description, 'Vehicule': this.state.namevehicule, 'came': this.state.came});
                              Alert.alert('Sauvegarde Réussie', 'Sauvegardé avec Succès')
                              const newReservation = {
                              chosenDate: this.state.chosenDate,
                              description: this.state.description,
                              namevehicule: this.state.namevehicule,
                              came: this.state.came
                              }                            
                              // reservationsData.push(JSON.stringify(newReservation));
                              // if(this.state.came == true){
                              //   interventionsData.push(newReservation)
                              // }
                              }
                        }  
        >
         <Text style={styles.text}>Confirmer</Text>
       </TouchableOpacity>
       </View>
       <Text></Text>
        <Text style={{color: 'black', fontSize: 20, marginLeft:-100}}>
          {this.state.chosenDate}
        </Text>
       </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // marginLeft: 0
  },
  button: {
    width: 180,
    height: 50,
    backgroundColor: '#ecc19c',
    borderRadius: 30,
    justifyContent: 'center',
    marginTop: 15,
    marginLeft:5
  },
  buttonConfirm: {
    width: 180,
    height: 50,
    backgroundColor: '#1e847f',
    borderRadius: 30,
    justifyContent: 'center',
    marginTop: 15,
    marginLeft:10
  },
  text: {
    fontSize: 18,
    color: 'white',
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
    fontWeight: 'bold'

  },
  TextStyle: {
    fontSize: 30,
    fontWeight: '800',
    marginTop: '-5%',
    marginLeft: '-20%',
    marginRight: '10%',
    color: '#05375a',
    fontStyle: 'italic',
    textShadowColor: '#fcf0e4', 
    textShadowOffset: { width: -1, height: 0 },
    textShadowRadius: 10, 
  },
  textInput: {
    // margin: 19,
    // marginLeft: 17,
    height: 50,
    width: 250,
    borderColor: '#1e847f',
    borderWidth: 1.5,
    borderRadius: 6,
    marginLeft:2
  },
  textdescription: {
    fontSize: 23,
    // fontWeight: 'bold',
    marginLeft: '5%',
    marginRight: '10%',
    marginBottom: 10,
    // color: '#ecc19c',
    color:'black',
    // fontStyle: 'italic',
    // textShadowColor: '', 
    // textShadowOffset: { width: -1, height: 0 },
    // textShadowRadius: 10, 
  },
  textselect: {
    fontSize: 23,
    // fontWeight: 'bold',
    marginLeft: '3%',
    marginRight: '10%',
    // color: '#ecc19c',
    color:'black',
    // fontStyle: 'italic',
    // textShadowColor: '', 
    // textShadowOffset: { width: -1, height: 0 },
    // textShadowRadius: 10, 
  }
});

 // // <CheckBox
 // //          title='         Lavage/Vidange         '
 // //          checked={selectedLang1}
 // //          style={{width: 250, color:"#fc5185"}}
 //             onPress={() => this.setState({checked3: !this.state.checked3})}
 // //        />
 //        <CheckBox
 //          center
 //          title='     Changement de pneu     '
 //          checked={this.state.checked2}
 //          onPress={() => this.setState({checked2: !this.state.checked})}
 //        />

 //        <CheckBox
 //          title='              Réparation              '
 //          checked={this.state.checked3}
 //          onPress={() => this.setState({checked3: !this.state.checked})}
 //        />
   // <CheckBox
   //               title='         Lavage/Vidange         '
   //               checked={selectedLang1}
   //               style={{width: 250, color:"#fc5185"}}
   //               onPress={()=>this.setState({selectedLang1:!selectedLang1})}
   //            />
   //            <CheckBox
   //                title='              Réparation              '
   //                checked={this.state.checked3}
   //                onPress={() => this.setState({checked: !this.state.checked3})}
   //            // />
   // {checked ? 'checked' : 'unchecked'}