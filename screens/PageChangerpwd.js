import React from 'react';
import { View, Text,TextInput, Button, AsyncStorage, Dimensions, Alert, ImageBackground,TouchableOpacity, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { useTheme } from 'react-native-paper';
import Users from '../model/users';
import { AuthContext } from '../components/context';

class  PageChangerpwd extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            currentpassword: '',
            modifiedpassword: '',
            confirmmodifiedpassword: ''
        };
        this.handleChangemodifiedpasswordInput = this.handleChangemodifiedpasswordInput.bind(this);
        this.handleChangecurrentpasswordInput = this.handleChangecurrentpasswordInput.bind(this);
        this.handleChangeconfirmmodifiedpasswordInput = this.handleChangeconfirmmodifiedpasswordInput.bind(this);
        this.saveData = this.saveData.bind(this);
    }
    handleChangemodifiedpasswordInput = (input) =>  {
        this.setState({modifiedpassword:input});
    }
    handleChangecurrentpasswordInput = (input) =>  {
        this.setState({currentpassword:input});
    }
    handleChangeconfirmmodifiedpasswordInput = (input) =>  {
        this.setState({confirmmodifiedpassword:input});
    }
    saveData() {
        AsyncStorage.setItem("key", JSON.stringify(this.state));
    }
    getItems = () =>{
        fetch('http://192.168.1.8:3000/users')
          .then(response => response.json())
          .then(items => this.setState({items}))
          .catch(err => console.log(err))
          }
    
    updateState = (item) => {
    const itemIndex = this.state.items.findIndex(data => data.id === item.id)
    const newArray = [
    // add the updated item to the array
      item,
    // add the rest of the items to the array from the index after the replaced item
      ...this.state.items.slice(itemIndex + 1)
    ]
    this.setState({ items: newArray })
  }     
    
    componentDidMount = () => {
            this.getItems()
          }

    render() {
        return (
        
      <View style={styles.container}>
      <ImageBackground
                    style={[styles.fixed, styles.bgcontainter, {zIndex: -1}]}
                    resizeMode='cover'
                    source={{
                      uri:
                        'https://www.ilovewallpaper.ie/images/milan-metallic-wallpaper-grey-silver-p6257-22358_image.jpg',
                  }}
                >
               
        <Text></Text><Text></Text><Text></Text>
        <Text style={[styles.text_footer, {
                color: "black",
                marginTop: 60,
                marginLeft: 20,
                fontSize: 19, 
                fontWeight:'bold'
            }]}>Mot de Passe Actuel</Text>
            <View style={styles.action}>
                <Feather 
                    name="key"
                    color="#16acea"
                    size={20}
                />
                <TextInput 
                    placeholder="Entrez Le mot de passe actuel"
                    placeholderTextColor="#666666"
                    style={[styles.textInput, {
                        color: "black",
                        fontSize: 17
                    }]}
                    autoCapitalize="none"
                    // onChangeText={this.handleChangecurrentpasswordInput}
                    onChangeText={this.updateState}
           />
      </View>


              <Text style={[styles.text_footer, {
                color: 'black',
                marginTop: 50,
                marginLeft: 20,
                fontSize: 19,
                fontWeight:'bold'
            }]}>Nouveau Mot de Passe</Text>
            <View style={styles.action}>
                <Feather 
                    name="lock"
                    color="#16acea"
                    size={20}
                />
                <TextInput 
                    placeholder="Entrez Le nouveau mot de passe"
                    placeholderTextColor="#666666"
                    style={[styles.textInput, {
                        color: "black",
                        fontSize:17
                    }]}
                    autoCapitalize="none"
                    // onChangeText={this.handleChangemodifiedpasswordInput}
                    onChangeText={this.updateState}
                    // value={this.state.modifiedpassword}
                />
      </View>


              <Text style={[styles.text_footer, {
                color: "black",
                marginTop: 50,
                marginLeft: 20,
                fontSize: 19,
                fontWeight:'bold'
            }]}>Confirmer Le Nouveau Mot de Passe         </Text>
            <View style={styles.action}>
                <Feather 
                    name="check-circle"
                    color="#16acea"
                    size={20}
                />
                <TextInput 
                    placeholder="Confirmez le nouveau mot de passe"
                    placeholderTextColor="#666666"
                    style={[styles.textInput, {
                        color: "black",
                        fontSize: 17
                    }]}
                    autoCapitalize="none"
                    // onChangeText={this.handleChangeconfirmmodifiedpasswordInput}
                    // value={this.state.confirmmodifiedpassword}
                    onChangeText={this.updateState}
                />
      </View>
          <Text></Text><Text></Text><Text></Text>
        <TouchableOpacity
            style={styles.Button}
           onPress={ () => 
                            {
                              if (this.state.currentpassword.length == 0 || this.state.modifiedpassword.length == 0 || this.state.confirmmodifiedpassword.length == 0) {
                              alert("Veuillez remplir tous les champs!");
                              return;
                              }
                              if (this.state.currentpassword !== 'password1') {
                              alert("Le mot de passe entré ne correspond pas à votre mot de passe actuel");
                              return;
                              }
                              if (this.state.modifiedpassword.length < 8) {
                              alert("Le mot de passe doit comporter au moins 8 caractères");
                              return;
                              }
                              if (this.state.modifiedpassword !== this.state.confirmmodifiedpassword) {
                              alert("Veuillez entrer le meme mot de passe pour les deux derniers champs");
                              return;
                              }

                              this.saveData()
                              console.log("Modifications de paramètres d'Authentification : ",this.state);
                              Alert.alert('Modification Réussie', 'Modifié avec Succès')
                              // Users.push(this.state);
                            }
                        }  
        >
        
        <Text style={styles.textbutton}>Sauvegarder</Text>
        </TouchableOpacity>
        </ImageBackground>
    </View>
    );
 }
}

export default PageChangerpwd;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: '#694fad',
        paddingBottom: 5,
        marginLeft: 17
  },
 bgcontainter: {
    width: Dimensions.get("window").width, //for full screen
    height: Dimensions.get("window").height //for full screen
  },
  fixed: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
    },
    TextStyle: {
    fontSize: 30,
    fontWeight: '800',
    marginTop: '32%',
    marginLeft: '5%',
    marginRight: '10%',
    color: '#05375a',
    fontStyle: 'italic',
  },
  TextStyleParamètres: {
    fontSize: 30,
    fontWeight: '800',
    marginTop: '32%',
    marginLeft: '-7%',
    marginRight: '10%',
    color: '#05375a',
    fontStyle: 'italic',
     
  },
  text_footer: {
        color: '#05375a',
        fontSize: 18
    },
  Button: {
      backgroundColor: '#F93822FF',
      paddingHorizontal: 30,
      height: 40,
      justifyContent: 'center',
      borderRadius: 15,
      overflow: 'hidden',
      alignSelf: 'center',
      marginTop: 27
  },
  textbutton:  {
      color: "white",
      fontSize: 20
   }
})