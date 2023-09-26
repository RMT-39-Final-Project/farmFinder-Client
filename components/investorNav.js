import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import InvestorHome from "../screens/Investor/InvestorHome";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { fetchInvestorSuccess } from "../store/actions/actionCreator";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import allFarm from "../screens/Investor/allFarm";
import invest from "../screens/Investor/invest";
import Balance from "../screens/Investor/balance";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const InvestorNav = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => {
    return state;
  });
  useEffect(() => {
    AsyncStorage.multiGet(["access_token", "role"]).then((res) => {
      dispatch(fetchInvestorSuccess({}, res[0][1], res[1][1]));
    });
  }, []);
  return (
    <>
      {/* <NavigationContainer> */}
      <Tab.Navigator>
        <Tab.Screen
          name="investorHome"
          component={InvestorHome}
          options={{
            headerShown: false,
            title: "Home",
          }}
        />
        <Tab.Screen
          name="invest"
          component={invest}
          options={{
            headerShown: false,
            title: "My Invest",
          }}
        />
        <Tab.Screen
          name="balance"
          component={Balance}
          options={{
            headerShown: false,
            title: "Balance",
          }}
        />
      </Tab.Navigator>
      {/* </NavigationContainer> */}
    </>
  );
};

const styles = StyleSheet.create({});

export default InvestorNav;
