import React from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaProvider>
      <View>
        <Text>Home</Text>
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({});

export default Home;
