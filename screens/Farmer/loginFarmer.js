import { View, Text, Pressable } from "react-native";
import Input from "../../components/input";
import Button from "../../components/button";
import {
  useFonts,
  Poppins_300Light,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import React, { useState } from "react";
import SafeArea from "../SafeArea";

export default function loginFarmer({ navigation }) {
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
              color: "#A5D255",
            }}
          >
            Welcome home
          </Text>
          <Text style={{ fontSize: 26, fontFamily: "Poppins_300Light" }}>
            glad you still alive.
          </Text>
        </View>
        <View style={{ marginBottom: 30 }}>
          <Input
            bg={"#A5D255"}
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
            bg={"#A5D255"}
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
        <Button text={"Login"} bg={"#A5D255"} pres={() => handleSubmit()} />
        <Text style={{ marginTop: 15, fontSize: 14, alignItems: "center" }}>
          Dont Have a account?
          <Pressable
            style={{ marginBottom: -3 }}
            onPress={() => navigation.navigate("registerFarmer")}
          >
            <Text
              style={{ fontFamily: "Poppins_600SemiBold", color: "#A5D255" }}
            >
              {" "}
              Sign up{" "}
            </Text>
          </Pressable>
        </Text>
      </View>
    </SafeArea>
  );
}
