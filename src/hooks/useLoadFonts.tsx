import { useFonts } from "expo-font";

export const useLoadFonts = () => {
  const [isLoadedFonts] = useFonts({
    Butler: require('../../assets/fonts/Butler.otf'),
    BlackHanSans: require('../../assets/fonts/BlackHanSans-Regular.ttf')
  })

  return isLoadedFonts;
}