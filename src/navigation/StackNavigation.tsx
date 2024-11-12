import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from '../screens/HomeScreen'
import ParticipantsSetScreen from '../screens/ParticipantsSetScreen'
import PrizeSetScreen from '../screens/PrizeSetScreen'
import DrawALotScreen from '../screens/DrawALotScreen'
import ResultScreen from '../screens/ResultScreen'

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ParticipantsSetScreen" component={ParticipantsSetScreen} />
      <Stack.Screen name="PrizeSetScreen" component={PrizeSetScreen} />
      <Stack.Screen name="DrawALotScreen" component={DrawALotScreen} />
      <Stack.Screen name="ResultScreen" component={ResultScreen} />
    </Stack.Navigator>
  )
}

export default StackNavigator