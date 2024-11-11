import { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StatusBar, Image, TouchableWithoutFeedback } from 'react-native';

const DrawALotScreen = ({ route, navigation }) => {
  const prize = route.params.prize;
  const [pickedPrizeIndexs, setPickedPrizeIndexs] = useState([])

  const handleSubmit = () => {
    if (pickedPrizeIndexs.length === prize.length) {
      return
    }

    let randomIndex = -1

    do {
      randomIndex = Math.floor(Math.random() * prize.length);
      if (pickedPrizeIndexs.includes(randomIndex)) {
        randomIndex = -1
      }
    } while (randomIndex === -1)

    const tempPickedPrizeIndexs = [...pickedPrizeIndexs]

    // Prevent re-rendering before the screen is turned over
    tempPickedPrizeIndexs.push(randomIndex)
    setTimeout(() => {
      setPickedPrizeIndexs(tempPickedPrizeIndexs)
    }, 700)

    navigation.navigate('ResultScreen', { prize: prize[randomIndex] });
  }

  const handleBack = () => {
    let tempPickedPrizeIndexs = [...pickedPrizeIndexs]
    tempPickedPrizeIndexs = tempPickedPrizeIndexs.slice(0, -1)
    setPickedPrizeIndexs(tempPickedPrizeIndexs)
  }

  return (
<SafeAreaView style={{ flex: 1, backgroundColor: '#1F2020' }}>
  <View style={{ flex: 1, marginTop: StatusBar.currentHeight || 0 }}>
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={{ padding: 10, position: 'absolute', top: 0, left: 0 }}
    >
      <Text style={{ fontSize: 20, color: '#D0AF2E', fontFamily: 'Butler' }}>Back</Text>
    </TouchableOpacity>

    <TouchableOpacity
      onPress={() => handleBack()}
      style={{ padding: 10, position: 'absolute', top: 10, right: 10 }}
    >
      <Text style={{ fontSize: 20, color: '#D0AF2E', fontFamily: 'BlackHanSans' }}>되돌리기</Text>
    </TouchableOpacity>
    
    <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center', marginTop: 50, marginBottom: 50 }}>
      
      <Image source={require('../../assets/logo.png')} style={{ width: 150, height: 150 }} />
      <Text style={{ fontSize: 20, marginTop: 5, color: '#D0AF2E', fontFamily: 'Butler' }}>Mystery Bounty</Text>
    </View>

    <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', flexWrap: 'wrap' }}>
      {prize.map((value, index) => (
        <View
          key={index}
          style={{
            height: 40,
            marginBottom: 20,
            marginHorizontal: 5,
            justifyContent: 'center',
            alignItems: 'center',
            width: '20%',
            borderColor: '#D0AF2E',
            borderWidth: 2,
            backgroundColor: pickedPrizeIndexs.includes(index) ? '#D0AF2E' : '#1F2020',
          }}
        >
          <Text style={{ color: pickedPrizeIndexs.includes(index) ? '#1F2020' : '#D0AF2E', fontSize: 20 }}>
            {value}
          </Text>
        </View>
      ))}
    </View>

    <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 10 }}>
      <TouchableWithoutFeedback onPress={handleSubmit}>
      <View
        style={{
          backgroundColor: '#D0AF2E',
          width: 200,
          height: 70,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
        }}
      >
        <Text style={{ color: '#1F2020', textAlign: 'center', fontSize: 30, fontFamily: 'BlackHanSans' }}>바운티 뽑기</Text>
      </View>
      </TouchableWithoutFeedback>
    </View>
  </View>
</SafeAreaView>
  )
}

export default DrawALotScreen;