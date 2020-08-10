import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import PageChangerpwd from './PageChangerpwd';
import Profile from './Profile';
import SupportScreen from './SupportScreen';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const ChangepwdStack = createStackNavigator();
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const SupportStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
      style={{ backgroundColor: 'tomato' }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Acceuil',
          tabBarColor: '#FDD20EFF',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profil"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: 'Profil',
          tabBarColor: 'blue',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Changer Le mot de passe actuel"
        component={ChangepwdStackScreen}
        options={{
          tabBarLabel: 'Paramètres',
          tabBarColor: '#F93822FF',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-aperture" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Contact"
        component={SupportStackScreen}
        options={{
          tabBarLabel: 'Contact',
          tabBarColor: '#990011FF',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-notifications" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (

          <HomeStack.Navigator screenOptions={{
              headerStyle: {
                backgroundColor: "#FDD20EFF",
              },
              headerTinitColor: '#fff',
              headerTitleStyle: {
                // fontWeight: 'bold'
              }
            }} >
             <HomeStack.Screen name="Home" component={HomeScreen} options={{
               title: "Acceuil",
               headerLeft: () => (
                   <Icon.Button name="ios-menu" size={40} style={{marginLeft: 5}}
                   backgroundColor="#FDD20EFF" onPress={ () => navigation.
                   openDrawer()}></Icon.Button>
               )
             }}
              />
          </HomeStack.Navigator>
);

const ChangepwdStackScreen = ({navigation}) => (

          <ChangepwdStack.Navigator screenOptions={{
              headerStyle: {
                backgroundColor: "#F93822FF",
              },
              headerTinitColor: '#fff',
              headerTitleStyle: {
                // fontWeight: 'bold'
              }
            }} >
             <ChangepwdStack.Screen name="PageChangerpwd" component={PageChangerpwd} options={{
               title: "Paramètres D'Authentification",
               headerLeft: () => (
                   <Icon.Button name="ios-menu" size={40} style={{marginLeft: 5}}
                   backgroundColor="#F93822FF" onPress={ () => navigation.
                   openDrawer()}></Icon.Button>
               )
             }}
              />
          </ChangepwdStack.Navigator>
);

const ProfileStackScreen = ({navigation}) => (

          <ProfileStack.Navigator screenOptions={{
              headerStyle: {
                backgroundColor: "blue",
              },
              headerTinitColor: '#fff',
              headerTitleStyle: {
                // fontWeight: 'bold'
              }
            }} >
             <ProfileStack.Screen name="Profile" component={Profile} options={{
               title: 'Profil',
               headerLeft: () => (
                   <Icon.Button name="ios-menu" size={40} style={{marginLeft: 5}}
                   backgroundColor="blue" onPress={ () => navigation.
                   openDrawer()}></Icon.Button>
               )
             }}
              />
          </ProfileStack.Navigator>
);

const SupportStackScreen = ({navigation}) => (

          <SupportStack.Navigator screenOptions={{
              headerStyle: {
                backgroundColor: "#990011FF",
              },
              headerTinitColor: '#fff',
              headerTitleStyle: {
                // fontWeight: 'bold'
              }
            }} >
             <SupportStack.Screen name="SupportScreen" component={SupportScreen} options={{
               title: 'Contact',
               headerLeft: () => (
                   <Icon.Button name="ios-menu" size={40} style={{marginLeft: 5}}
                   backgroundColor="#990011FF" onPress={ () => navigation.
                   openDrawer()}></Icon.Button>
               )
             }}
              />
          </SupportStack.Navigator>
);