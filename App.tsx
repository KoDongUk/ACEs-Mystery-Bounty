import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { useLoadFonts } from './src/hooks/useLoadFonts';
import StackNavigator from './src/navigation/StackNavigation'

export default function App() {
  useLoadFonts();

  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#1F2020" />
      <StackNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
