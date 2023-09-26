import { Text,View } from "react-native";

export default function FarmDetail({route}){
  const{farmId} = route.params
  return <View style={{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }}>
    <Text>
      Ini Farm Detail {farmId}
    </Text>
  </View>
}