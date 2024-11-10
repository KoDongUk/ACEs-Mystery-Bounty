import { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, ScrollView, Pressable } from 'react-native';

const PrizeSetScreen = ({ route, navigation }) => {
  const [prize, setPrizes] = useState<number[] | string[]>([])
  const participantsCount = route.params.participantsCount

  const handleInputChange = (value: string | number, index: number) => {
    const updatedPrizes = [...prize]
    updatedPrizes[index] = value.toString()
    setPrizes(updatedPrizes as string[])
  }

  const handleSubmit = () => {
    navigation.navigate('DrawALotScreen', { prize });
  }

  useEffect(() => {
    setPrizes(() => {
      return Array.from({ length: participantsCount }).map(() => '')
    })
  }, [participantsCount])

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#1F2020' }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView 
          contentContainerStyle={{ justifyContent: 'center', alignItems: 'center', paddingBottom: 20 }} 
          keyboardShouldPersistTaps="always"
          showsVerticalScrollIndicator={true}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ padding: 10, position: 'absolute', top: 0, left: 0, zIndex: 1, marginTop: 15 }}
          >
            <Text style={{ fontSize: 20, color: '#D0AF2E', fontFamily: 'Butler' }}>Back</Text>
          </TouchableOpacity>
          <View style={{marginTop: 50 }} />
          {prize.map((value, index) => (
            <TextInput
              key={index}
              style={{
                width: 300,
                height: 40,
                borderColor: '#D0AF2E',
                borderWidth: 3,
                marginBottom: 20,
                paddingHorizontal: 50,
                color: '#D0AF2E',
                fontSize: 25,
                textAlign: 'center'
              }}
              value={value.toString()}
              onChangeText={(text) => {
                handleInputChange(text === '' ? '' : parseInt(text), index);
              }}
              keyboardType="numeric"
            />
          ))}

          <Pressable onPress={handleSubmit}>
            <View
              style={{
                backgroundColor: '#D0AF2E',
                width: 300,
                height: 103,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
              }}
            >
              <Text style={{ color: '#1F2020', textAlign: 'center', fontSize: 33, fontFamily: 'BlackHanSans' }}>프라이즈 만들기</Text>
            </View>
          </Pressable>
        </ScrollView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  )
}

export default PrizeSetScreen;