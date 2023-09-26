import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

const FarmCard = ({ farmData, navigation }) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: farmData.mainImgUrl,
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.productTitle}>{farmData.name}</Text>
        <Text style={styles.description}>{farmData.city}</Text>
        <Text style={styles.description}>{farmData.category}</Text>
        <Text style={styles.description}>{farmData.status}</Text>

        <TouchableOpacity
          style={styles.detailsButton}
          onPress={() =>
            navigation.navigate("Farm Details", {
              farmId: farmData.id,
            })
          }
        >
          <Text
            style={styles.detailsButtonText}
          >
            See Details
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 16,
    marginTop: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
  imageContainer: {
    padding: 14,
    borderRadius: 10,
  },
  image: {
    width: "100%",
    height: 250,
  },
  contentContainer: {
    padding: 16,
  },
  productTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 12,
  },
  detailsButton: {
    position: "absolute",
    bottom: 10,
    right: 10,
    backgroundColor: "green",
    padding: 8,
    borderRadius: 5,
  },
  detailsButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default FarmCard;
