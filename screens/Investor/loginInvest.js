import { Pressable, StyleSheet, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
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
import axios from "axios";
import Toast from "react-native-toast-message";
import { useDispatch, useSelector } from "react-redux";
import { fetchInvestorSuccess } from "../../store/actions/actionCreator";

const LoginInvest = ({ navigation }) => {
  const dispatch = useDispatch();
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
        const { data: investors } = await axios({
          url: "https://088f-180-241-183-225.ngrok.io/users/investors/login",
          method: "post",
          data,
        });
        const token = investors.access_token;
        await AsyncStorage.multiSet([
          ["access_token", token],
          ["role", "investor"],
        ]);
        const value = await AsyncStorage.getItem("access_token");
        dispatch(fetchInvestorSuccess(investors, token, "investor"));
        if (value) navigation.push("investorHome");
      }
    } catch (err) {
      console.log(err.response.data.message);
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
            Welcome home
          </Text>
          <Text style={{ fontSize: 26, fontFamily: "Poppins_300Light" }}>
            glad you still alive.
          </Text>
        </View>
        <View style={{ marginBottom: 30 }}>
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
        <Button text={"Login"} bg={"#296F63"} pres={() => handleSubmit()} />
        <Text style={{ marginTop: 15, fontSize: 14, alignItems: "center" }}>
          Dont Have a account?
          <Pressable
            style={{ marginBottom: -3 }}
            onPress={() => navigation.navigate("registerInvest")}
          >
            <Text
              style={{ fontFamily: "Poppins_600SemiBold", color: "#296F63" }}
            >
              {" "}
              Sign up{" "}
            </Text>
          </Pressable>
        </Text>
      </View>
    </SafeArea>
  );
};

const styles = StyleSheet.create({});

export default LoginInvest;
