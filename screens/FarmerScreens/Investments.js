import React from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Investments = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text>Investments</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({});

export default Investments;