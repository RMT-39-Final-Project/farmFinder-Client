import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import SafeArea from "../SafeArea";
import {
  useFonts,
  Poppins_300Light,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_500Medium,
} from "@expo-google-fonts/poppins";
import InvestList from "../../components/investList";

export default function invest() {
  let [fontsLoaded, fontError] = useFonts({
    Poppins_300Light,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_500Medium,
  });
  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <SafeArea>
      <View>
        <View style={{ marginTop: 20, marginBottom: 25 }}>
          <Text
            style={{
              fontFamily: "Poppins_600SemiBold",
              fontSize: 26,
              color: "#296F63",
            }}
          >
            My Invest
          </Text>
        </View>
        <InvestList />
      </View>
    </SafeArea>
  );
}

const styles = StyleSheet.create({});
