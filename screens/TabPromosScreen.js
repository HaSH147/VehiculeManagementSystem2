import React from 'react';
import {ImageBackground} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import MesPromotions from './MesPromotions';
import ToutesLesPromotions from './ToutesLesPromotions';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialBottomTabNavigator();
const MesPromosStack = createStackNavigator();
const ToutesLesPromosStack = createStackNavigator();

const TabPromosScreen = () => (
  <Tab.Navigator
      initialRouteName="MesPromotions"
      // activeColor="#fff"
      backgroundColor="white"
      tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: 'red',
        }}
      // style={{ backgroundColor: 'tomato' }}
    >
    <Tab.Screen
        name="MesPromotions"
        component={MesPromosStackScreen}
        options={{
          tabBarLabel: 'Mes Promotions',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-basket" color="#e52165" backgroundcolor="red" size={26} />
          ),
        }}
      />
    <Tab.Screen
                  name="Toutes Les Promotions"
                  component={ToutesLesPromosStackScreen}
                  options={{
                    tabBarLabel: '   Toutes Les Promotions   ',
                    tabBarColor: 'red',
                    tabBarIcon: () => (
                        
                      <Icon name="ios-star" color="#e52165" size={26} />

                    ),
                  }}
      />
    </Tab.Navigator>
);

export default TabPromosScreen;


const MesPromosStackScreen = ({navigation}) => (

          <MesPromosStack.Navigator screenOptions={{
              headerStyle: {
                backgroundColor: "#990011FF",
              },
              headerTinitColor: '#fff',
              headerTitleStyle: {
                // fontWeight: 'bold'
              }
            }} >
             <MesPromosStack.Screen name="Mes Promotions" component={MesPromotions} options={{
               title: 'Mes Promotions',
               headerLeft: () => (
                   <Icon.Button name="ios-menu" size={40} style={{marginLeft: 5}}
                   backgroundColor="#990011FF" onPress={ () => navigation.
                   openDrawer()}></Icon.Button>
               )
             }}
              />
          </MesPromosStack.Navigator>
);
const ToutesLesPromosStackScreen = ({navigation}) => (

          <ToutesLesPromosStack.Navigator screenOptions={{
              headerStyle: {
                backgroundColor: "#990011FF",
              },
              headerTinitColor: '#fff',
              headerTitleStyle: {
                // fontWeight: 'bold'
              }
            }} >
             <ToutesLesPromosStack.Screen name="Toutes Les Promotions" component={ToutesLesPromotions} options={{
               title: 'Toutes Les Promotions',
               headerLeft: () => (
                   <Icon.Button name="ios-menu" size={40} style={{marginLeft: 5}}
                   backgroundColor="#990011FF" onPress={ () => navigation.
                   openDrawer()}></Icon.Button>
               )
             }}
              />
          </ToutesLesPromosStack.Navigator>
);