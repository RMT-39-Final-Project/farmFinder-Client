import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FarmDetail from "../screens/FarmerScreens/FarmDetail";
import Home from "../screens/FarmerScreens/Home";
import AddFarmForm from "../screens/FarmerScreens/addForm";
const Stack = createNativeStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="My Farms" component={Home} />
      <Stack.Screen name="Farm Details" component={FarmDetail} />
      <Stack.Screen name="Add Farm Form" component={AddFarmForm}/>
    </Stack.Navigator>
  );
}
