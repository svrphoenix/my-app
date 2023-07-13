import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { RegistrationScreen } from './Screens/RegistrationScreen';
import { LoginScreen } from './Screens/LoginScreen';

export default function App() {
  return (
    <>
      <RegistrationScreen />
      {/* <LoginScreen /> */}
      <StatusBar style="auto" />
    </>
  );
}
