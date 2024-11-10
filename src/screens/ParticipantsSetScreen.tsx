import { SafeAreaView, View, Text, TextInput, Button, Pressable, TouchableWithoutFeedback, Keyboard, StatusBar, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';

const ParticipantsSetScreen = ({ navigation }) => {
  const [participantsCount, setParticipantsCount] = useState<number | ''>('')

  const handleSubmit = () => {
    if (participantsCount === '') {
      alert('입력 필수')
      return
    } else if (participantsCount === 0) {
      alert('0보다 크게 입력')
      return
    }
    navigation.navigate('PrizeSetScreen', { participantsCount });
  }

  return (
<SafeAreaView style={{ flex: 1, backgroundColor: '#1F2020' }}>
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={{ flex: 1, marginTop: StatusBar.currentHeight || 0 }}>
      <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ padding: 10, position: 'absolute', top: 0, left: 0 }}
          >
        <Text style={{ fontSize: 20, color: '#D0AF2E', fontFamily: 'Butler' }}>Back</Text>
      </TouchableOpacity>
      <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center', marginTop: 50, marginBottom: 100 }}>
        <Image source={require('../../assets/logo.png')} style={{ width: 150, height: 150, marginTop: 50 }} />
        <Text style={{ fontSize: 20, marginTop: 5, color: '#D0AF2E', fontFamily: 'Butler' }}>Mystery Bounty</Text>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 8, marginBottom: 120 }}>
        <TextInput
          style={{
            height: 70,
            width: 300,
            borderColor: '#D0AF2E',
            borderWidth: 3,
            marginBottom: 20,
            paddingHorizontal: 50,
            color: '#D0AF2E',
            fontSize: 30,
            textAlign: 'center'
          }}
          value={participantsCount.toString()}
          onChangeText={(text) => {
            setParticipantsCount(
              text === '' || parseInt(text).toString() === 'NaN' ? '' : parseInt(text)
            );
          }}
          keyboardType="numeric"
        />
        <Pressable
          onPress={handleSubmit}
        >
          <View
            style={{
              backgroundColor: '#D0AF2E',
              width: 300,
              height: 70,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={{ color: '#1F2020', textAlign: 'center', fontSize: 33, fontFamily: 'BlackHanSans' }}>바운티 만들기</Text>
          </View>
        </Pressable>
      </View>
    </View>
  </TouchableWithoutFeedback>
</SafeAreaView>
  )
}

export default ParticipantsSetScreen;