import { SafeAreaView, View, Text, TouchableWithoutFeedback, Keyboard, Image } from 'react-native';

const HomeScreen = ({ navigation }) => {
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