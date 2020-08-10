import React, { Component } from 'react';
import Feather from 'react-native-vector-icons/Feather';
import { Alert, Clipboard, TextInput, StyleSheet, Image, StatusBar, ImageBackground, Text, View, TouchableOpacity, Linking, Platform } from 'react-native';
import { Button } from 'react-native-elements';

export default class ContactPage extends Component {

    constructor(props) {
    super(props);

    this.state = {
      text: '',
      clipboardContent: null,
    };
  }
  //Call function
  Call = () => {

    let phoneNumber = '';

    if (Platform.OS === 'android') {
      phoneNumber = 'tel:+212659602718';
    }
    else {
      phoneNumber = 'telprompt:+212659602718';
    }

    Linking.openURL(phoneNumber);
  };

   //Copy to clipboard function

   writeToClipboard = async () => {
      await Clipboard.setString('contact147@gmail.com');
      Alert.alert(
        'Email Copié',
        'Retrouvez-le en cliquant sur coller',
      )
  }

  render() {
    // const image = { uri: "../assets/logo.png" };
    return (
      <ImageBackground
        style={{ flex: 1 }}
        source={{
          uri:
            'http://www.simpleimageresizer.com/_uploads/photos/177b1650/contactus_720x1280.jpg'            
        }}
        >
        <View style={styles.MainContainer}>
          
          <Text style={styles.TextStyle}>Contactez-Nous</Text>
              <View>
                
                <Text>  
                </Text>
                <Text>  
                </Text>
                <Text>  
                </Text>
                <Text>  
                </Text>
              </View>
              <View style={{flexDirection:'row', marginLeft:15}}>
              <View style={{marginTop:6, marginRight:5}}>
               <Feather 
                    name="mail"
                    color="#F42853"
                    size={25}
                />
                </View>
              <TextInput style={styles.TextEmailInput_style} value="contact147@gmail.com"  editable={false} />
              <Text>    </Text>
              <View style={{marginRight:5}}>
              <TouchableOpacity
              style={styles.Button}
                  onPress={this.writeToClipboard}           
              >
              <Text style={styles.textbutton}> Copier </Text>
              </TouchableOpacity>
              </View>
              </View>
              <View>
                <Text>  
                </Text>
                <Text>    </Text>
              </View>
               <View style={{flexDirection:'row'}}>
               <View style={{marginTop:5, marginRight:5, marginLeft:19}}>
               <Feather 
                    name="phone"
                    color="#990011FF"
                    size={25}
                />
                </View>
              <TextInput style={styles.TextPhoneInput_style} value="Tel: +212659602718               " editable={false} />
                         
              <TouchableOpacity
              style={styles.ButtonAppel}
                  onPress={this.Call}
                  // title="Appeler"
                  // type="solid"
                  // size={20}
                  // color="blue"           
              >
              <Text style={styles.textbutton}>Appeler</Text>
              </TouchableOpacity>
              </View>

         </View>
      </ImageBackground>

    );
  }
}

const styles = StyleSheet.create({

  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingBottom: 50
  },
  Button: {
      backgroundColor: '#F42853',
      paddingHorizontal: 15,
      // height: 40,
      // width:40,
      justifyContent: 'center',
      borderRadius: 10,
      overflow: 'hidden',
      alignSelf: 'center',
      marginTop: 6,
      marginLeft: 0

  },
  ButtonAppel: {
      backgroundColor: '#990011FF',
      paddingHorizontal: 15,
      // height: 40,
      // width:40,
      justifyContent: 'center',
      borderRadius: 10,
      overflow: 'hidden',
      alignSelf: 'center',
      // marginTop: 15,
      marginLeft: -50,
      marginRight:10
  },
  textbutton:  {
      color: "white",
      fontSize: 20
  },
  button: {
    width: '45%',
    padding: 6,
    backgroundColor: '#1d3c45',
    borderRadius: 7,
    textAlign: 'center',
  },
  TextStyle: {
    fontSize: 40,
    fontWeight: '800',
    marginTop: '-67%',
    marginLeft: '10%',
    marginRight: '10%',
    color: '#dcdfe4',
    fontStyle: 'italic',
    textShadowColor: '#fcf0e4', 
    textShadowOffset: { width: -1, height: 0 },
    textShadowRadius: 50, 
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  TextPhoneInput_style: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: '0%',
    borderColor: '#410c1e',
    textShadowColor: 'white', 
    textShadowOffset: { width: -1, height: 0 },
    textShadowRadius: 10, 
  },
  TextEmailInput_style: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: '0%',
    borderColor: '#410c1e',
    textShadowColor: 'white', 
    textShadowOffset: { width: -1, height: 0 },
    textShadowRadius: 10, 
  }

});
