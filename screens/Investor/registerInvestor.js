import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import {
  useFonts,
  Poppins_300Light,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import React, { useState } from "react";
import SafeArea from "../SafeArea";
import Button from "../../components/button";
import Input from "../../components/input";

export default function registerInvestor({ navigation }) {
  const [data, setData] = useState({});
  const [errors, setErr] = useState({});
  let [fontsLoaded, fontError] = useFonts({
    Poppins_300Light,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const onChange = (name, value) => {
    setData({
      ...data,
      [name]: value,
    });
    console.log(data);
  };

  const handleError = (msg, name) => {
    setErr((prev) => ({
      ...prev,
      [name]: msg,
    }));
  };

  const handleSubmit = async () => {
    try {
      let valid = true;

      if (!data.username) {
        handleError("Please input username", "username");
        valid = false;
      }
      if (!data.phoneNumber) {
        handleError("Please input phone number", "phoneNumber");
        valid = false;
      }

      if (!data.email) {
        handleError("Please input email", "email");
        valid = false;
      } else if (!data.email.match(/\S+@\S+\.\S+/)) {
        handleError("Please input valid email", "email");
        valid = false;
      }

      if (!data.password) {
        handleError("Please input password", "password");
        valid = false;
      }

      if (valid) {
        console.log(data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <SafeArea>
      <View
        style={{ flex: 1, justifyContent: "center", paddingHorizontal: 10 }}
      >
        <View style={{ marginBottom: 30 }}>
          <Text
            style={{
              fontSize: 24,
              fontFamily: "Poppins_700Bold",
              color: "#296F63",
            }}
          >
            Get Started
          </Text>
          <Text style={{ fontSize: 26, fontFamily: "Poppins_300Light" }}>
            by register here.
          </Text>
        </View>
        <View style={{ marginBottom: 30 }}>
          <Input
            bg={"#296F63"}
            label="Username"
            onChangeText={(e) => {
              onChange("username", e);
            }}
            error={errors.username}
            onFocus={() => {
              handleError(null, "username");
            }}
          />
          <Input
            bg={"#296F63"}
            label="Phone number"
            onChangeText={(e) => {
              onChange("phoneNumber", e);
            }}
            error={errors.phoneNumber}
            onFocus={() => {
              handleError(null, "phoneNumber");
            }}
            keyboardType="numeric"
          />
          <Input
            bg={"#296F63"}
            label="Email"
            onChangeText={(e) => {
              onChange("email", e);
            }}
            error={errors.email}
            onFocus={() => {
              handleError(null, "email");
            }}
            keyboardType="email-address"
          />
          <Input
            bg={"#296F63"}
            label="Password"
            error={errors.password}
            onFocus={() => {
              handleError(null, "password");
            }}
            onChangeText={(e) => {
              onChange("password", e);
            }}
            secureTextEntry={true}
          />
        </View>
        <Button text={"Register"} bg={"#296F63"} pres={() => handleSubmit()} />
        <Text style={{ marginTop: 15, fontSize: 14, alignItems: "center" }}>
          Already have an account?
          <Pressable
            style={{ marginBottom: -3 }}
            onPress={() => navigation.navigate("loginInvest")}
          >
            <Text
              style={{ fontFamily: "Poppins_600SemiBold", color: "#296F63" }}
            >
              {" "}
              Sign in{" "}
            </Text>
          </Pressable>
        </Text>
      </View>
    </SafeArea>
  );
}