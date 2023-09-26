import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import FarmCard from "../../components/reusableCard";
import axios from "axios";

const Home = ({ navigation }) => {
  const { navigate } = useNavigation();
  const [farmData, setFarmData] = useState([]);
  const handleAddFarmPress = () => {
    navigate("Add Farm Form"); 
  };

  useEffect(() => {
    axios
      .get("https://61a0-193-37-32-155.ngrok-free.app/farms/my-farms/farm")
      .then((response) => {
        setFarmData(response.data.farms);
      })
      .catch((error) => {
        console.error("Error fetching farm data:", error);
      });
  }, []);


  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.header}>
            <View style={styles.titleContainer}>
              <Text style={styles.homeText}>Home</Text>
              <Text style={styles.farmListText}>Farm List.</Text>
            </View>
            <TouchableOpacity
              style={styles.addButton}
              onPress={handleAddFarmPress}
            >
              <Text style={styles.addButtonLabel}>Add Farm</Text>
            </TouchableOpacity>
          </View>
          {farmData.map((farm, index) => (
            <FarmCard
              key={index}
              farmData={farm}
              navigation = {navigation}
            />
          ))}
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft:30,
    marginRight:30,
    marginTop:30
  },
  titleContainer: {
    flex: 1,
  },
  homeText: {
    fontWeight: "bold",
    fontSize: 25,
  },
  farmListText: {
    fontWeight: "300",
    fontSize: 25,
  },
  addButton: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 15,
  },
  addButtonLabel: {
    color: "white",
    fontWeight: "bold",
    padding: 2,
  },
});

export default Home;
