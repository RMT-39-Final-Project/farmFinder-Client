import React, { useEffect, useState } from "react";
import { Text, View, Image, ScrollView, StyleSheet } from "react-native";
import axios from "axios";
import Carousel from "react-native-snap-carousel";
import MapView, { Marker } from "react-native-maps";

export default function FarmDetail({ route }) {
  const { farmId } = route.params;
  const [farmData, setFarmData] = useState(null);

  useEffect(() => {
    const apiUrl = `https://61a0-193-37-32-155.ngrok-free.app/farms/my-farms/${farmId}`;
    axios
      .get(apiUrl)
      .then((response) => {
        setFarmData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [farmId]);

  const renderCarouselItem = ({ item }) => (
    <Image source={{ uri: item.imgUrl }} style={{ width: 300, height: 200 }} />
  );

  return (
    <ScrollView style={styles.pageContainer}>
      <View style={styles.cardContainer}>
        {farmData ? (
          <>
            <View style={styles.contentContainer}>
              <Carousel
                data={farmData.Images}
                renderItem={renderCarouselItem}
                sliderWidth={300}
                itemWidth={300}
              />
              <Text style={styles.farmName}>{farmData.name}</Text>
              <Text style={styles.category}>{farmData.category}</Text>
              <Text style={styles.location}>
                {farmData.city}, {farmData.address}
              </Text>
              <Text style={styles.price}>Share Price: Rp {farmData.price}</Text>
              <Text style={styles.benefits}>Benefits: {farmData.benefits}</Text>
              <View>
                <Text style={styles.sharePercent}>
                  Share Percent: {farmData.sharePercent}%
                </Text>
              </View>
            </View>
            <View style={styles.mapContainer}>
              {farmData && (
               <MapView
               style={styles.map}
               initialRegion={{
                 latitude: farmData.latitude,
                 longitude: farmData.longitude,
                 latitudeDelta: 0.02,
                 longitudeDelta: 0.02,
               }}
               contentContainerStyle={{ padding: 10 }} 
             >
               <Marker
                 coordinate={{
                   latitude: farmData.latitude,
                   longitude: farmData.longitude,
                 }}
                 title={farmData.name}
               />
             </MapView>
             
              )}
            </View>
          </>
        ) : (
          <Text>Loading...</Text>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: "green"
  },
  cardContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    marginHorizontal: 16,
    marginTop: 30,
    marginBottom: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    
  },
  contentContainer: {
    padding: 16,
  },
  farmName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  category: {
    fontSize: 16,
    marginBottom: 12,
  },
  location: {
    fontSize: 16,
    marginBottom: 12,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
  },
  benefits: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  sharePercent: {
    fontSize: 16,
  },
  mapContainer: {
    marginTop: 16,
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden",
  },
  map: {
    width: "100",
    height: 200,
    borderRadius: 10,
    overflow: "hidden", 
    marginBottom:10,
    marginLeft:10,
    marginRight:10
  },
});

