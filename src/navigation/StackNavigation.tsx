import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from '../screens/HomeScreen'
import ParticipantsSetScreen from '../screens/ParticipantsSetScreen'
import PrideSetScreen from '../screens/PrideSetScreen'
import DrawALotScreen from '../screens/DrawALotScreen'
import ResultScreen from '../screens/ResultScreen'

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen}/>
      <Stack.Screen name="ParticipantsSetScreen" component={ParticipantsSetScreen}/>
    </Stack.Navigator>
  )
}

export default StackNavigator