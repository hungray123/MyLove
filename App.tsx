import { ThemeProvider } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import HomeScreen from './src/Screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native'

import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function App() {
  
    return (
      <SafeAreaProvider>
       
       <ThemeProvider>
        <NavigationContainer>
          <HomeScreen />
          <StatusBar />
        </NavigationContainer>
      </ThemeProvider>
        
       
      </SafeAreaProvider>
    );
  
}
