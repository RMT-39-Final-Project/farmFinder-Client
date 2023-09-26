import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Investments from "./screens/FarmerScreens/Investments";
import Profile from "./screens/FarmerScreens/Profile";
import MainStack from "./navigators/MainStack";
import { FontAwesome, AntDesign, Entypo } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home" 
      >
        <Tab.Screen
          name="Investments"
          component={Investments}
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              return <Entypo name="documents" size={24} color="black" />;
            },
            tabBarLabel: "Investments",
          }}
        />
        <Tab.Screen
          name="Home"
          component={MainStack}
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              return <FontAwesome name="home" size={24} color="black" />;
            },
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              return <AntDesign name="profile" size={24} color="black" />;
            },
            tabBarLabel: "Profile",
          }}
        />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

