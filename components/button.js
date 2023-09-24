import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

export default function Button({ navigation, screen, text, bg }) {
  return (
    <View style={styles.containerButton}>
      <Pressable
        style={styles.button}
        onPress={() => {
          navigation.push(screen);
        }}
      >
        <Text
          style={{
            backgroundColor: bg,
            textAlign: "center",
            paddingVertical: 13,
            fontSize: 20,
            fontFamily: "Poppins_600SemiBold",
            color: "white",
          }}
        >
          {text}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  containerButton: {
    flex: 0.1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: -10,
  },
  button: {
    flex: 0.95,
    borderRadius: 15,
    overflow: "hidden",
  },
});
