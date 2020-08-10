import React from 'react';
import { View, Text, Button, Alert,Dimensions, Animated, AsyncStorage,KeyboardAvoidingView, SafeAreaView,TouchableWithoutFeedback, Keyboard, TouchableOpacity, TextInput, ImageBackground, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { useTheme } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Users from '../model/users';
class Profile extends React.Component {
  constructor(props) {
        super(props);
        this.state = {
            EmailAdress: '',
            PhoneNumber: ''
        };

        this.handleChangeEmailInput = this.handleChangeEmailInput.bind(this);
        this.handleChangePhoneInput = this.handleChangePhoneInput.bind(this);
        this.saveData = this.saveData.bind(this);
    }

    handleChangeEmailInput = (input) =>  {
        this.setState({EmailAdress:input});
    }
    handleChangePhoneInput = (input) =>  {
        this.setState({PhoneNumber:input});
    }
    saveData() {
        AsyncStorage.setItem("key", JSON.stringify(this.state));
    }

   
    render(){
        return (
          <View style={styles.container}>
          <ImageBackground
                    style={[styles.fixed, styles.bgcontainter,{zIndex: -1}]}
                    resizeMode='cover'
                    source={{
                      uri:
                      'https://www.ilovewallpaper.ie/images/milan-metallic-wallpaper-grey-silver-p6257-22358_image.jpg',
                  }}
                > 
                <KeyboardAvoidingView 
                    style={{width: '100%', 
                    }} 
                    behavior={Platform.OS === 'ios' ? 'padding' : null}
                  >
          <Text style={[styles.text_footer, {
                color: 'black',
                marginTop: 126,
                marginLeft: 24,
                fontSize: 20,
                fontWeight: 'bold'
            }]}>Nom Complet</Text>
            <View style={styles.action}>
            <Feather 
                    name="user"
                    color="#F93822FF"
                    size={20}
                />
                  
                <TextInput 
                    value="Hajar Skalli-Houssaini"
                    placeholderTextColor="#666666"
                    style={[styles.textInput, {
                        color: 'black',
                        fontSize: 22,

                    }]}
                    autoCapitalize="none"
                    editable={false}

                />
                
      </View>
              <Text style={[styles.text_footer, {
                color: 'black',
                marginTop: 38,
                marginLeft: 22,
                fontSize: 19,
                fontWeight:'bold'
            }]}>Modifier Votre Adresse email
            </Text>
             <View style={styles.action}>

             <Feather 
                    name="mail"
                    color="#F93822FF"
                    size={20}
                />
                <TextInput 
                    placeholder="Entrez La nouvelle adresse mail"
                    placeholderTextColor="#666666"
                    style={[styles.textInput, {
                        color: 'black',
                        fontSize:17
                    }]}
                    autoCapitalize="none"
                    keyboardType={'email-address'}
                    // onChangeText={(text) => this.setState({EmailAdress: text})}
                    // value={this.state.EmailAdress}
                    onChangeText={this.handleChangeEmailInput}
                    value={this.state.EmailAdress}
                />
     </View>
            <Text>
               {this.state.name}
            </Text>

      
              <Text style={[styles.text_footer, {
                color: 'black',
                marginTop: 30,
                marginLeft: 22,
                marginBottom:5,
                fontSize: 19,
                fontWeight:'bold',
                marginRight: 2
            }]}>Modifier Le Numéro de Téléphone              </Text>
            <View style={styles.action}>
                <Feather 
                        name="phone"
                        color="#F93822FF"
                        size={20}
                    />    
                    <TextInput 
                        placeholder="Le Nouveau Numéro de Téléphone"
                        placeholderTextColor="#666666"
                        style={[styles.textInput, {
                            color: 'black',
                            fontSize: 17
                        }]}
                        autoCapitalize="none"
                        keyboardType={'phone-pad'}
                        autoCompleteType="tel"
                        onChangeText={this.handleChangePhoneInput}
                        value={this.state.PhoneNumber}
                    />
            </View>
            <Text></Text><Text></Text>
            <TouchableOpacity
                  style={styles.Button}
                   onPress={ () => 
                                  {
                                    if (this.state.EmailAdress.length == 0 || this.state.PhoneNumber.length == 0) {
                                    alert("Veuillez remplir tous les champs!");
                                    return;
                                      }
                                    this.saveData()
                                    console.log('Modifications du Profile : ',this.state);
                                    Alert.alert('Modification Réussie', 'Modifié avec Succès')
                                    Users.push(this.state);
                                  }
                              }  
                >
              <Text style={styles.textbutton}>Sauvegarder</Text>
        </TouchableOpacity>
        </KeyboardAvoidingView>
        </ImageBackground>
    </View>
    );
    }
};

export default Profile;

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
        borderBottomColor: '#1f65ff',
        paddingBottom: 5,
        marginLeft: 17
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
    },
  TextStyle: {
    fontSize: 28,
    fontWeight: '800',
    marginTop: '30%',
    marginLeft: 65,
    marginRight: '10%',
    color: '#05375a',
    // fontStyle: 'itali
    // textShadowOffset: {width: 4,height: 4},
    //     textShadowRadius: 15,
    //     textShadowColor:'black'
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
  text_footer: {
        color: '#05375a',
        fontSize: 18
  },
  Button: {
      backgroundColor: 'blue',
      paddingHorizontal: 30,
      height: 40,
      justifyContent: 'center',
      borderRadius: 15,
      overflow: 'hidden',
      alignSelf: 'center',
      marginTop: 50
  },
  textbutton:  {
      color: "white",
      fontSize: 20
  }
});