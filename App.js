import { PaperProvider } from "react-native-paper";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Intro from "./screens/Intro";
import registerInvestor from "./screens/Investor/registerInvestor";
import registerFarmer from "./screens/Farmer/registerFarmer";
import LoginInvest from "./screens/Investor/loginInvest";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Intro"
            component={Intro}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="loginInvest"
            component={LoginInvest}
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
    </PaperProvider>
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
