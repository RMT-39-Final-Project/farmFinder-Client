import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";
import React, { useEffect } from "react";
import SafeArea from "../SafeArea";
import BackButton from "../../components/backButton";
import {
  useFonts,
  Poppins_300Light,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_500Medium,
} from "@expo-google-fonts/poppins";
import { Roboto_700Bold } from "@expo-google-fonts/roboto";
import { useSelector, useDispatch } from "react-redux";
import CardItem from "../../components/Card";
import { fetchFarmsSuccess } from "../../store/actions/actionCreator";

export default function allFarm({ navigation }) {
  const dispatch = useDispatch();
  const { farms } = useSelector((state) => {
    return state.farms;
  });

  useEffect(() => {
    dispatch(fetchFarmsSuccess());
  }, []);
  let [fontsLoaded, fontError] = useFonts({
    Poppins_300Light,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_500Medium,
    Roboto_700Bold,
  });
  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <SafeArea>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 10,
          marginBottom: 50,
        }}
      >
        <BackButton navigation={navigation} />
        <Text
          style={{
            fontSize: 24,
            color: "#296F63",
            fontFamily: "Roboto_700Bold",
          }}
        >
          Farms
        </Text>
        <Text></Text>
      </View>
      <View style={{ alignItems: "center", flex: 1 }}>
        <ScrollView stickyHeaderHiddenOnScroll={true}>
          {farms.map((item) => {
            return (
              <View
                style={{
                  backgroundColor: "white",
                  borderRadius: 10,
                  overflow: "hidden",
                  marginBottom: 20,
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
                    width: 370,
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
                <View
                  style={{
                    paddingHorizontal: 17,
                    paddingTop: 5,
                    paddingBottom: 15,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginTop: 10,
                      alignItems: "flex-start",
                    }}
                  >
                    <View>
                      <Text
                        style={{
                          fontSize: 16,
                          fontFamily: "Poppins_600SemiBold",
                        }}
                      >
                        {item.name}
                      </Text>
                      <Text>{item.city}</Text>
                    </View>
                    <Text
                      style={{ fontSize: 16, fontFamily: "Poppins_500Medium" }}
                    >
                      Rp. {item.price}
                    </Text>
                  </View>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </SafeArea>
  );
}

const styles = StyleSheet.create({});
