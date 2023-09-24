import React from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

const Intro = () => {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaProvider>
      <View
        style={{
          flex: 1,
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingHorizontal: 15,
        }}
      >
        <Text>intro</Text>
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // paddingTop: insets.top,
    // paddingBottom: insets.bottom,
    // paddingLeft: insets.left,
    // paddingRight: insets.right,
  },
});

export default Intro;
