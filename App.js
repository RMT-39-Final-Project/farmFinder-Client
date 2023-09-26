import { PaperProvider } from "react-native-paper";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Intro from "./screens/Intro";
import registerInvestor from "./screens/Investor/registerInvestor";
import registerFarmer from "./screens/Farmer/registerFarmer";
import LoginInvest from "./screens/Investor/loginInvest";
import loginFarmer from "./screens/Farmer/loginFarmer";
import InvestorHome from "./screens/Investor/InvestorHome";
import { Provider } from "react-redux";
import store from "./store";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import InvestorNav from "./components/investorNav";
import allFarm from "./screens/Investor/allFarm";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  const [isInvestor, setIsInvestor] = useState(false);
  const [isFarmer, setIsFarmer] = useState(false);
  useEffect(() => {
    AsyncStorage.multiGet(["access_token", "role"]).then((res) => {
      if (res[0][1] && res[1][1] === "investor") {
        setIsInvestor(true);
      } else if (res[0][1] && res[1][1] === "farmer") {
        setIsFarmer(true);
      }
    });
  }, []);
  return (
    <PaperProvider>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            {isInvestor ? (
              <>
                <Stack.Screen
                  name="RootInvestor"
                  component={InvestorNav}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="allFarm"
                  component={allFarm}
                  options={{ headerShown: false }}
                />
              </>
            ) : (
              <>
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
                <Stack.Screen
                  name="loginFarmer"
                  component={loginFarmer}
                  options={{ headerShown: false }}
                />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
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
