import React from "react";
import { View, StyleSheet, Text } from "react-native";
import {
  useFonts,
  Poppins_300Light,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_500Medium,
} from "@expo-google-fonts/poppins";
import { Roboto_700Bold } from "@expo-google-fonts/roboto";
import RecentList from "./recentList";

const Recent = () => {
  let [fontsLoaded, fontError] = useFonts({
    Poppins_300Light,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_500Medium,
    Roboto_700Bold,
  });
  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <View>
      <Text
        style={{
          fontSize: 22,
          fontFamily: "Poppins_600SemiBold",
          color: "#296F63",
          marginBottom: 40,
        }}
      >
        Recent Activities
      </Text>
      <RecentList />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Recent;
