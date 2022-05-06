import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';
import HomeScreen from './src/view/screens/HomeScreen';
import DetailScreen from './src/view/screens/DetailScreen';
import LoginScreen from './src/view/screens/LoginScreen';
import ChatScreen from './src/view/screens/ChatScreen';
import 'react-native-gesture-handler';
import COLORS from './src/consts/colors';
import RegisterScreen from './src/view/screens/RegisterScreen';
const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>

      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
      <Stack.Navigator screenOptions={{ header: () => null }}>

        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailScreen} />
        <Stack.Screen name="Chat" component={ChatScreen}/>
        <Stack.Screen name ="Register" component={RegisterScreen}/>
      </Stack.Navigator>

    </NavigationContainer>


  );

};
export default App;