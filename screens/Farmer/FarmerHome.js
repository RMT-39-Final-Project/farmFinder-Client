import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import SafeArea from "../SafeArea";
import axios from "axios";
import FarmCard from "../../components/farmCard";
import { useSelector } from "react-redux";
import {
  useFonts,
  Poppins_300Light,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_500Medium,
} from "@expo-google-fonts/poppins";
import { Roboto_700Bold } from "@expo-google-fonts/roboto";
import CardItem from "../../components/Card";

const FarmerHome = ({ navigation }) => {
  const [farmData, setFarmData] = useState([]);
  const { access_token } = useSelector((state) => {
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
      .get("https://114f-180-241-183-225.ngrok-free.app/farms/my-farms/farm", {
        headers: { access_token },
      })
      .then(({ data }) => {
        setFarmData(data);
      })
      .catch((error) => {
        console.error("Error fetching farm data:", error);
      });
  }, []);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  console.log(farmData);
  return (
    <SafeArea>
      <ScrollView style={{ paddingHorizontal: 10 }}>
        <View style={{ marginTop: 20, marginBottom: 15 }}>
          <Text
            style={{
              fontSize: 24,
              fontFamily: "Poppins_700Bold",
              color: "#767676",
            }}
          >
            Welcome
          </Text>
          <Text
            style={{
              fontSize: 38,
              fontFamily: "Poppins_700Bold",
              marginTop: -15,
              color: "#296F63",
            }}
          >
            Farmer
          </Text>
        </View>
        {farmData.length ? (
          farmData.map((farm, index) => (
            <FarmCard key={index} item={farm} navigation={navigation} />
          ))
        ) : (
          <Text>You dont have a property</Text>
        )}
      </ScrollView>
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flex: 1,
  },
  homeText: {
    // fontWeight: "bold",
    fontSize: 25,
  },
  farmListText: {
    fontWeight: "300",
    fontSize: 25,
  },
  addButton: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 15,
  },
  addButtonLabel: {
    color: "white",
    fontWeight: "bold",
    padding: 2,
  },
});

export default FarmerHome;
