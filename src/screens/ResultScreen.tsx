import { useRef } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, TouchableOpacity, TouchableWithoutFeedback, Keyboard, StatusBar, Image, Animated, Easing } from 'react-native';
import { useFonts } from 'expo-font';

const ResultScreen = ({ route, navigation }) => {
  const prize = route.params.prize;

  const slideAnimation = useRef(new Animated.Value(10)).current; // 애니메이션 초기값 설정

  const handlePress = () => {
    // 첫 번째 애니메이션: 중간 위치까지 이동
    Animated.timing(slideAnimation, {
      toValue: 120, // 중간 위치
      duration: 1000, // 애니메이션 지속 시간
      easing: Easing.ease, // 애니메이션 속도 조절
      useNativeDriver: true, // 네이티브 드라이버 사용
    }).start(() => {
      setTimeout(() => {
        // 두 번째 애니메이션: 최종 위치로 이동
        Animated.timing(slideAnimation, {
          toValue: 200, // 최종 위치
          duration: 1500, // 애니메이션 지속 시간
          easing: Easing.ease, // 애니메이션 속도 조절
          useNativeDriver: true, // 네이티브 드라이버 사용
        }).start();
      }, 1000);
    });
  }

  return (
  <SafeAreaView style={{ flex: 1, backgroundColor: '#1F2020' }}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ flex: 1, marginTop: StatusBar.currentHeight || 0, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ padding: 10, position: 'absolute', top: 0, left: 0 }}
        >
          <Text style={{ fontSize: 20, color: '#D0AF2E', fontFamily: 'Butler' }}>Back</Text>
        </TouchableOpacity>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 70, marginBottom: 50 }}>
          <Image source={require('../../assets/logo.png')} style={{ width: 150, height: 150 }} />
          <Text style={{ fontSize: 20, marginTop: 5, color: '#D0AF2E', fontFamily: 'Butler' }}>Mystery Bounty</Text>
        </View>
        <View style={{ flex: 2, alignItems: 'center' }}>
        <Text style={{ fontSize: 25, marginTop: 20, color: '#D0AF2E', fontFamily: 'Butler' }}>BOUNTY PRIZE</Text>
        </View>
        <TouchableWithoutFeedback onPress={handlePress}>
      <View style={{ 
        flex: 7,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
      }}>
        <Animated.View style={{ 
          backgroundColor: '#D0AF2E', 
          width: 250, 
          height: 250,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
        }}>
          <Text style={{ fontFamily: 'Butler', fontSize: 70, textAlign: 'center', color: '#1F2020', marginRight: prize < 10 ? 40 : 0}}>{prize}</Text>
        </Animated.View>
        
        <Animated.View style={{ 
          backgroundColor: '#1F2020', 
          width: 250, 
          height: 250,
          justifyContent: 'center',
          alignItems: 'center',
          transform: [{ translateX: slideAnimation }],
          position: 'absolute',
          borderColor: '#D0AF2E',
          borderWidth: 1,
        }}>
          <Image source={require('../../assets/logo.png')} style={{ width: 100, height: 100 }} />
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
      </View>
    </TouchableWithoutFeedback>
  </SafeAreaView>
  )
}

export default ResultScreen;