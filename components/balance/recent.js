import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import {
  useFonts,
  Poppins_300Light,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_500Medium,
} from "@expo-google-fonts/poppins";
import { Roboto_700Bold } from "@expo-google-fonts/roboto";
import RecentList from "./recentList";
import axios from "axios";
import { useSelector } from "react-redux";

const Recent = () => {
  const { access_token } = useSelector((state) => {
    return state.user;
  });
  const [recent, setRecent] = useState([]);
  let [fontsLoaded, fontError] = useFonts({
    Poppins_300Light,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_500Medium,
    Roboto_700Bold,
  });
  useEffect(() => {
    axios
      .get("https://114f-180-241-183-225.ngrok-free.app/balances", {
        headers: { access_token },
      })
      .then(({ data }) => setRecent(data));
  }, []);
  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <View style={{}}>
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
      <ScrollView>
        {recent.map((el) => {
          return <RecentList item={el} />;
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Recent;
