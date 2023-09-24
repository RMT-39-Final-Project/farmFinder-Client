import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import {
  useFonts,
  Poppins_300Light,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import vector from "../assets/intro.png";
import Button from "../components/button";

const Intro = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  let [fontsLoaded, fontError] = useFonts({
    Poppins_300Light,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <View
        style={{
          flex: 1,
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingHorizontal: 15,
          alignItems: "center",
        }}
      >
        <View style={styles.image}>
          <Image source={vector} style={styles.vector} />
          <Text style={styles.title}>
            Start your{" "}
            <Text style={{ fontFamily: "Poppins_600SemiBold" }}>journey</Text>
            {"\n"} and become what you{" "}
            <Text style={{ fontFamily: "Poppins_600SemiBold" }}>want</Text> to
            be
          </Text>
        </View>
        <Button
          text={"Be a Investor"}
          screen={"registerInvest"}
          navigation={navigation}
          bg={"#296F63"}
        />
        <Button
          text={"Be a Farmer"}
          screen={"registerFarmer"}
          navigation={navigation}
          bg={"#A5D255"}
        />
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 0.8,
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 50,
  },
  vector: {
    justifyContent: "center",
    alignItems: "center",
    width: 390,
    height: 390,
    marginBottom: 50,
  },
  title: {
    fontSize: 18,
    fontWeight: 300,
    textAlign: "center",
    fontFamily: "Poppins_300Light",
  },
});

export default Intro;
