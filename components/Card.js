import { Image, StyleSheet, Text, View } from "react-native";
import { Avatar, Surface } from "react-native-paper";
import {
  useFonts,
  Poppins_300Light,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_500Medium,
} from "@expo-google-fonts/poppins";
import React from "react";

export default function CardItem({ item }) {
  let [fontsLoaded, fontError] = useFonts({
    Poppins_300Light,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_500Medium,
  });

  return (
    <View
      style={{
        backgroundColor: "white",
        borderRadius: 10,
        marginRight: 20,
        overflow: "hidden",
        borderWidth: 1,
        borderColor: "#296F63",
        position: "relative",
      }}
    >
      <View
        style={{
          overflow: "hidden",
          borderTopEndRadius: 10,
          borderTopStartRadius: 10,
          width: 300,
          height: 150,
          justifyContent: "center",
        }}
      >
        <Image
          style={{
            width: 450,
            height: 300,
            resizeMode: "contain",
            borderRadius: 20,
          }}
          source={{
            uri: `${item.mainImgUrl}`,
          }}
        />
      </View>
      <Text
        style={{
          position: "absolute",
          right: 5,
          top: 5,
          fontSize: 12,
          borderRadius: 10,
          backgroundColor: "#296F63",
          color: "white",
          paddingHorizontal: 10,
          paddingVertical: 5,
        }}
      >
        {item.category}
      </Text>
      <View style={{ paddingHorizontal: 17, paddingTop: 5, paddingBottom: 15 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10,
            alignItems: "flex-start",
          }}
        >
          <View>
            <Text style={{ fontSize: 16, fontFamily: "Poppins_600SemiBold" }}>
              {item.name}
            </Text>
            <Text>{item.city}</Text>
          </View>
          <Text style={{ fontSize: 16, fontFamily: "Poppins_500Medium" }}>
            Rp. {item.price}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
