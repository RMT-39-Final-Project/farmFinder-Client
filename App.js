import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Intro from "./screens/Intro";
import InvestorHome from "./screens/Investor/InvestorHome";
import FarmerHome from "./screens/Farmer/FarmerHome";
import registerInvestor from "./screens/Investor/register";
import registerFarmer from "./screens/Farmer/register";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Intro"
          component={Intro}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="registerInvest"
          component={registerInvestor}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="registerFarmer"
          component={registerFarmer}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
