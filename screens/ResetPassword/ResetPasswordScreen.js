import React from 'react';
import ResetPassword  from './ResetPassword';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const ResetPasswordScreen = () => { 
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignInScreen">
        <Stack.Screen name="ResetPasswordScreen" component={ResetPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
