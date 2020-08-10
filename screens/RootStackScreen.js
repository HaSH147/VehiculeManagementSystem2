import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SignInScreen  from './SignInScreen';
import ResetPasswordScreen  from './ResetPassword/ResetPassword';
import { NavigationContainer } from '@react-navigation/native';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (

	<RootStack.Navigator headerMode='none'>
		<RootStack.Screen name="SignInScreen" component={SignInScreen} />
		<RootStack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />
	</RootStack.Navigator>
);

export default RootStackScreen;