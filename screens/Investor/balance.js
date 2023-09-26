import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
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
import { useSelector } from "react-redux";
import axios from "axios";

const Balance = ({ navigation }) => {
  const [user, setUser] = useState({});
  const { userId } = useSelector((state) => {
    return state.user;
  });
  let [fontsLoaded, fontError] = useFonts({
    Poppins_300Light,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_500Medium,
    Roboto_700Bold,
  });

  useEffect(() => {
    axios
      .get(
        "https://114f-180-241-183-225.ngrok-free.app/users/investors/" + userId
      )
      .then(({ data }) => setUser(data));
  }, []);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <SafeArea>
      {/* <ScrollView> */}
      <View style={{ justifyContent: "center" }}>
        <View
          style={{
            marginTop: 70,
            alignItems: "center",
            marginBottom: 60,
            justifyContent: "flex-end",
          }}
        >
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
            Rp. {user.balance},00
          </Text>
          <View
            style={{
              borderRadius: 10,
              overflow: "hidden",
            }}
          >
            <Pressable onPress={() => navigation.navigate("topup")}>
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
            </Pressable>
          </View>
        </View>
        <Recent />
      </View>
      {/* </ScrollView> */}
    </SafeArea>
  );
};

const styles = StyleSheet.create({});

export default Balance;
