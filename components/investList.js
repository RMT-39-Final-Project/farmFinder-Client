import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  useFonts,
  Poppins_300Light,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_500Medium,
  Poppins_400Regular,
} from "@expo-google-fonts/poppins";

export default function InvestList() {
  let [fontsLoaded, fontError] = useFonts({
    Poppins_300Light,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_400Regular,
    Poppins_500Medium,
  });
  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <>
      <View
        style={{
          backgroundColor: "white",
          borderWidth: 1,
          borderColor: "#AF3A3A",
          padding: 15,
          borderRadius: 5,
          marginBottom: 10,
        }}
      >
        <View
          style={{
            marginBottom: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontFamily: "Poppins_500Medium",
            }}
          >
            Farm Name
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Poppins_500Medium",
              backgroundColor: "#AF3A3A21",
              color: "#AF3A3A",
              paddingHorizontal: 15,
              paddingVertical: 3,
              borderWidth: 1,
              borderColor: "#AF3A3A",
              borderRadius: 10,
            }}
          >
            Failed
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ marginRight: 35 }}>
            <Text style={{ fontSize: 16, fontFamily: "Poppins_500Medium" }}>
              Ownership:
            </Text>
            <Text>20%</Text>
          </View>
          <View>
            <Text style={{ fontSize: 16, fontFamily: "Poppins_500Medium" }}>
              Total Price:
            </Text>
            <Text>Rp. 300000</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "white",
          borderWidth: 1,
          borderColor: "#296F63",
          padding: 15,
          borderRadius: 5,
          marginBottom: 10,
        }}
      >
        <View
          style={{
            marginBottom: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontFamily: "Poppins_500Medium",
            }}
          >
            Farm Name
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Poppins_500Medium",
              backgroundColor: "#2D6A4F21",
              color: "#2D6A4F",
              paddingHorizontal: 15,
              paddingVertical: 3,
              borderWidth: 1,
              borderColor: "#2D6A4F",
              borderRadius: 10,
            }}
          >
            Success
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ marginRight: 35 }}>
            <Text style={{ fontSize: 16, fontFamily: "Poppins_500Medium" }}>
              Ownership:
            </Text>
            <Text>20%</Text>
          </View>
          <View>
            <Text style={{ fontSize: 16, fontFamily: "Poppins_500Medium" }}>
              Total Price:
            </Text>
            <Text>Rp. 300000</Text>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({});
