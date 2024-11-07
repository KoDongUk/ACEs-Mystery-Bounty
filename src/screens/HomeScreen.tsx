import { SafeAreaView, View, Text, TouchableWithoutFeedback, Keyboard, Image } from 'react-native';
import { useFonts } from 'expo-font';

const HomeScreen = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    Butler: require("../../assets/fonts/Butler-Bold.otf"),
  });

  if (!fontsLoaded) return null;

  const handleClick = () => {
    navigation.navigate('ParticipantsSetScreen');
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#1F2020' }}>
      <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); handleClick(); }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Image source={require('../../assets/logo.png')} />
          <Text style={{ fontFamily: 'Butler', fontSize: 40, marginTop: 20, color: '#D0AF2E' }}>Mystery Bounty</Text>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

export default HomeScreen;