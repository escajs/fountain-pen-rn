/**
 * Designed & Developed By : Othmane Bejja in 8/2021
 * Check Behance : https://www.behance.net/gallery/125495561/Fountain-Pen-Mobile-App
 */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import Home from './Screens/Home'
import PenDetails from './Screens/PenDetails';
const Stack = createStackNavigator()
export default function App() {
  let [fontsLoaded] = useFonts({
    'GalanoGrotesqueAltExtraLight': require('./assets/fonts/GalanoGrotesqueAltExtraLight.otf'),
    'GalanoGrotesqueAltSemiBold': require('./assets/fonts/GalanoGrotesqueAltSemiBold.otf'),
    'GalanoGrotesqueAltBold': require('./assets/fonts/GalanoGrotesqueAltBold.otf'),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='PenDetails' component={PenDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}