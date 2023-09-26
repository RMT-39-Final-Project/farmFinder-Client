import React from "react";
import { View, Text, StyleSheet } from "react-native";
import SafeArea from "../SafeArea";
import {
  useFonts,
  Poppins_300Light,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_500Medium,
} from "@expo-google-fonts/poppins";
import { Roboto_700Bold } from "@expo-google-fonts/roboto";
import Recent from "../../components/balance/recent";

const Balance = () => {
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
    <SafeArea>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <View style={{ alignItems: "center", marginBottom: 60 }}>
          <Text
            style={{
              fontFamily: "Poppins_300Light",
              fontSize: 24,
              marginBottom: 10,
            }}
          >
            Total Balance
          </Text>
          <Text
            style={{
              fontFamily: "Roboto_700Bold",
              fontSize: 36,
              color: "#296F63",
            }}
          >
            Rp. 3.000.000,00
          </Text>
          <View
            style={{
              borderRadius: 10,
              overflow: "hidden",
            }}
          >
            <Text
              style={{
                backgroundColor: "#2D6A4F4D",
                fontSize: 20,
                paddingHorizontal: 50,
                paddingVertical: 8,
                color: "#296F63",
                marginTop: 20,
                fontFamily: "Poppins_300Light",
              }}
            >
              Add amount
            </Text>
          </View>
        </View>
        <Recent />
      </View>
    </SafeArea>
  );
};

const styles = StyleSheet.create({});

export default Balance;
