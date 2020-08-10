import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet , 
    StatusBar,
    ImageBackground,
    Dimensions,
    Button,
    Alert
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import ResetPasswordScreen from './ResetPassword/ResetPasswordScreen';
import { createStackNavigator } from '@react-navigation/stack';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import { useTheme } from 'react-native-paper';
import { AuthContext } from '../components/context';

import Users from '../model/users';
// import Vehicules from '../model/vehicules';

const SignInScreen = ({navigation}) => {
    
    const [data, setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    })

    const { colors } = useTheme();

    const { signIn } = React.useContext(AuthContext);
    

    const textInputChange = (val) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false,
                isValidUser: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        if( val.trim().length >= 8 ) {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            });
        }
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const handleValidUser = (val) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...data,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                isValidUser: false
            });
        }
    }

    const loginHandle = (userName, password) => {

        const foundUser = Users.filter( item => {
            return userName == item.username && password == item.password;
        } );

        if ( data.username.length == 0 || data.password.length == 0 ) {
            Alert.alert('Mauvaise Entrée', 'Vous devez remplir tous les champs', [
                {text: 'Ok'}
            ]);
            return;
        }

        if ( foundUser.length == 0 ) {
            Alert.alert('Utilsateur introuvable', "Nom d'utilisateur ou mot de passe est incorrect", [
                {text: 'Ok'}
            ]);
            return;
        }
        signIn(foundUser);
    }

    return (
      <View style={styles.container}>
        <ImageBackground
                  
                  style={[styles.fixed, styles.bgcontainter,{zIndex: -1}]}
                  resizeMode='cover'
                  source={{
                    uri:
                      // 'https://i.pinimg.com/originals/0b/35/bc/0b35bc9eabde69a113484acf6855dd60.jpg',
                      'https://images.unsplash.com/photo-1556031970-26f08a4b18ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
                      
                }}
        >
         <StatusBar style={styles.header} barStyle="light-content"/>
          <View style={{marginTop: 250}}>
          <View style={{
                       
                        marginLeft:10,
                        marginRight:10,
                        borderRadius:10, 
                        backgroundColor:'rgba(255,255,255,0.5)',
                        borderWidth: 0.5,
                        borderRadius: 8,
                        borderColor: 'transparent',
                        // borderBottomWidth: 0.5,
                        // shadowColor: '#000000',
                        // shadowOffset: { width: 0, height: 2 },
                        // shadowOpacity: 50,
                        // shadowRadius: 100,
                        // elevation:500,
                        // overflow:'hidden'
                    }}
            >
            <Text></Text>
            <Text style={[styles.text_footer, {
                color: 'black',
                // fontStyle: 'italic',
                fontWeight:'bold',
                marginTop:8,
                marginLeft:23,
                fontSize:20,
                // textShadowOffset: {width: 10,height: 3},
                // textShadowRadius: 40,
                // textShadowColor:'white'

            }]}>Nom  d'Utilisateur</Text>
            
            <View style={styles.action}>
                <FontAwesome 
                    name="user-o"
                    color={'#8a307f'}
                    size={20}
                />
                <TextInput 
                    placeholder="Votre Nom d'Utilisateur"
                    placeholderTextColor="black"
                    style={[styles.textInput, {
                        // color: 'white',
                        // fontWeight: 'bold'
                    }]}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputChange(val)}
                    onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
                />
                {data.check_textInputChange ? 
                <View style={{marginRight: 20}}>
                <Animatable.View
                    animation="bounceIn"
                >
                    <Feather 
                        name="check-circle"
                        color="#8a307f"
                        size={25}
                    />
                </Animatable.View>
                </View>
                : null}
            </View>

            <Text></Text>
            { data.isValidUser ? null : 
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Le Nom d'Utilisateur doit comporter au moins 4 caractères.</Text>
            </Animatable.View>
            }
            

            <Text style={[styles.text_footer, {
                color: 'black',
                fontWeight:'bold',
                marginLeft:23,
                fontSize:20,
                // fontStyle:'italic',
                // textShadowOffset: {width: 10,height: 3},
                // textShadowRadius: 40,
                // textShadowColor:'white'
            }]}>Mot  de  Passe</Text>

            <View style={styles.action}>
                <Feather 
                    name="lock"
                    color={'#8a307f'}
                    size={20}

                />
                <TextInput 
                    placeholder="Votre Mot de Passe"
                    placeholderTextColor="black"
                    secureTextEntry={data.secureTextEntry ? true : false}
                    style={[styles.textInput, {
                      
                    }]}
                    autoCapitalize="none"
                    onChangeText={(val) => handlePasswordChange(val)}
                />
                <View style={{marginRight: 25}}>
                <TouchableOpacity
                    onPress={updateSecureTextEntry}
                >
                    {data.secureTextEntry ? 
                    <View style={{fontWeight:'bold'}}>
                    <Feather 
                        name="eye-off"
                        color="#8a307f"
                        fontWeight="bold"
                        size={23}
                    />
                    </View>
                    :
                    <Feather 
                        name="eye"
                        color="#8a307f"
                        size={23}
                        fontWeight="bold"
                    />
                    }
                </TouchableOpacity>
                </View>
            </View>
            <Text></Text>
            { data.isValidPassword ? null : 
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Le mot de passe doit comporter au moins 8 caractères</Text>
            </Animatable.View>
            }
           
            <TouchableOpacity    
                onPress={() => navigation.navigate('ResetPasswordScreen')}  
            >
            <Text style={styles.textforgottenpwd}>Mot de Passe Oublié ?</Text>
            </TouchableOpacity>
  <View style={styles.button}>
                <TouchableOpacity
                    // style={styles.signIn}
                    onPress={() => {loginHandle( data.username, data.password )}}
                >
               
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Se Connecter</Text>

                </TouchableOpacity>
            </View>
         </View>
         </View>
        </ImageBackground>
        </View>
        
      
    );
};


export default SignInScreen;

const ResetStack = createStackNavigator()
const ResetPasswordStackScreen = ({navigation}) => (

          <ResetStack.Navigator screenOptions={{
              headerStyle: {
                backgroundColor: "#009387",
              },
              headerTinitColor: '#fff',
              headerTitleStyle: {
                // fontWeight: 'bold'
              }
            }} >
             <ResetStack.Screen name="ResetPassword" component={ResetPasswordScreen} options={{
               title: 'Menu',
               headerLeft: () => (
                   <Icon.Button name="ios-menu" size={25}
                   backgroundColor="#009387" onPress={ () => navigation.
                   openDrawer()}></Icon.Button>
               )
             }}
              />
          </ResetStack.Navigator>
);

// const shadowStyle = {
//   // width: buttonStyle.width,
//   // height: buttonStyle.height,
//   color: "#000",
//   border: 2,
//   radius: 3,
//   opacity: 0.2,
//   x: 0,
//   y: 3,
//   style: { marginVertical: 5 }
// }

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      // borderColor: 'white',
      // borderRadius: 10,
      // borderWidth: 5
      // backgroundColor: '#009387',
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50,
        color: '#f9d0d6'
    },
    textforgottenpwd: {
        color: '#c66b3d',
        fontWeight: "bold",
        fontSize: 18,
        marginTop: 10,
        marginLeft: 17,
        // shadowColor: 'rgba(0,0,0, .4)', // IOS
        // shadowOffset: { height: 1, width: 1 }, // IOS
        // shadowOpacity: 1, // IOS
        // shadowRadius: 1, //IOS
        // textShadowOffset: {width: 3,height: 3},
        // textShadowRadius: 15,
        // textShadowColor:'black' 

    },
    footer: {
        flex: 3,
        backgroundColor: 'transparent',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: 380,
        marginLeft: 20
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
        marginLeft: 15
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
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#c66b3d',
        // color: 'black',
        // fontWeight: 'bold'
        fontSize:17
    },
    errorMsg: {
        color: 'red',
        fontSize: 14,
        marginLeft:17,
        fontWeight:'bold',
        textShadowOffset: {width: 10,height: 3},
        textShadowRadius: 10,
        textShadowColor:'white'
    },
    button: {
        alignItems: 'center',
        marginTop: 30,
        backgroundColor:'#8a307f',
        borderRadius: 10,
        width: 200,
        height:40,
        marginLeft:95,
        marginBottom: 15
    },
    // signIn: {
    //     width: '50%',
    //     height: 50,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     borderRadius: 10,
    //     // backgroundColor:''
    // },
    textSign: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop:3
    }
  });
















































