import React, { useState, useRef } from "react";
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
  Alert,
  Image as RNImage,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import MapView, { Marker } from "react-native-maps";
import axios from "axios";
import { Picker } from "@react-native-picker/picker";

const categoryOptions = [
  "Chicken",
  "Beef",
  "Dairy",
  "Open-Land",
  "Crops",
  "Pork",
];
const cityOptions = [
  "Surabaya",
  "Bandung",
  "Semarang",
  "Jakarta",
  "Denpasar",
  "Malang",
];

const AddFarmForm = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [videoUrl, setVideoUrl] = useState("");
  const [benefits, setBenefits] = useState("");
  const [sharePercent, setSharePercent] = useState("");
  const [price, setPrice] = useState("");
  const [photo, setPhoto] = useState(null);
  const [additionalImages, setAdditionalImages] = useState([]);
  const [markerPosition, setMarkerPosition] = useState(null);

  const mapRef = useRef(null);

  const handleSearchAddress = async () => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
          address
        )}&key=AIzaSyC9IYssL81GPbX2DA0U1wP9qKAiFrKbUUs`
      );

      if (response.data.results.length > 0) {
        const { lat, lng } = response.data.results[0].geometry.location;
        setLatitude(lat);
        setLongitude(lng);
        setMarkerPosition({ latitude: lat, longitude: lng });
        mapRef.current.animateToRegion(
          {
            latitude: lat,
            longitude: lng,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          },
          500
        );
      } else {
        Alert.alert("Error", "Address not found");
      }
    } catch (error) {
      Alert.alert("Error", "An error occurred while geocoding the address");
    }
  };

  const handleMarkerDragEnd = (e) => {
    const { latitude, longitude } = e.nativeEvent.coordinate;
    setLatitude(latitude);
    setLongitude(longitude);
  };

  const handleImagePicker = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setPhoto(result.uri);
    }
  };

  const handleDeleteImage = (index) => {
    const updatedImages = [...additionalImages];
    updatedImages.splice(index, 1);
    setAdditionalImages(updatedImages);
  };

  const handleAdditionalImagePicker = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setAdditionalImages([...additionalImages, result.uri]);
    }
  };

  const handleSubmit = async () => {
    if (!name) {
      Alert.alert("Error", "Please input Farm Name");
      return;
    }

    if (!category) {
      Alert.alert("Error", "Please select a Category");
      return;
    }

    if (!city) {
      Alert.alert("Error", "Please select a City");
      return;
    }

    if (!address) {
      Alert.alert("Error", "Please input Address");
      return;
    }

    if (!latitude || !longitude) {
      Alert.alert(
        "Error",
        "Please press the Search button after inputting Address"
      );
      return;
    }

    if (!videoUrl) {
      Alert.alert("Error", "Please input Video URL");
      return;
    }

    if (!benefits) {
      Alert.alert("Error", "Please input Benefits");
      return;
    }

    const sharePercentValue = parseInt(sharePercent);
    if (
      !sharePercentValue ||
      sharePercentValue < 1 ||
      sharePercentValue > 100
    ) {
      Alert.alert(
        "Error",
        "Share Percent should be an integer between 1 and 100"
      );
      return;
    }

    const priceValue = parseInt(price);
    if (!priceValue || priceValue !== parseFloat(price)) {
      Alert.alert("Error", "Price should be an integer");
      return;
    }

    if (!photo) {
      Alert.alert("Error", "Please add your main farm Image");
      return;
    }

    if (additionalImages.length === 0) {
      Alert.alert("Error", "Please add additional images of your farm");
      return;
    }



    const formData = new FormData();
    formData.append("name", name);
    formData.append("category", category);
    formData.append("city", city);
    formData.append("address", address);
    formData.append("latitude", latitude);
    formData.append("longitude", longitude);
    formData.append("videoUrl", videoUrl);
    formData.append("benefits", benefits);
    formData.append("sharePercent", sharePercent);
    formData.append("price", price);

    if (photo) {
      formData.append("photoUrl", {
        uri: photo,
        type: "image/jpeg",
        name: "farm_photo.jpg",
      });
    }

    for (let i = 0; i < additionalImages.length; i++) {
      formData.append("additionalImages", {
        uri: additionalImages[i],
        type: "image/jpeg",
        name: `additional_image_${i}.jpg`,
      });
    }

    try {
      const response = await fetch(
        "https://79fa-118-137-50-14.ngrok-free.app/farms/my-farms/farm",
        {
          method: "POST",
          body: formData,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 201) {
        Alert.alert("Farm Added", "The farm has been successfully added.");
        setName("");
        setCategory("");
        setCity("");
        setAddress("");
        setLatitude(null);
        setLongitude(null);
        setVideoUrl("");
        setBenefits("");
        setSharePercent("");
        setPrice("");
        setPhoto(null);
        setAdditionalImages([]);
      } else {
        Alert.alert("Error", "Failed to add the farm.");
      }
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "An error occurred while adding the farm.");
    }

    
  };

  return (
    <ScrollView>
      <View>
        <Text>Farm Name</Text>
        <TextInput onChangeText={setName} value={name} />

        <Text>Category</Text>
        <Picker
          selectedValue={category}
          onValueChange={(itemValue) => {
            setCategory(itemValue);
          }}
        >
          {categoryOptions.map((option) => (
            <Picker.Item key={option} label={option} value={option} />
          ))}
        </Picker>

        <Text>City</Text>
        <Picker
          selectedValue={city}
          onValueChange={(itemValue) => {
            setCity(itemValue);
          }}
        >
          {cityOptions.map((city) => (
            <Picker.Item key={city} label={city} value={city} />
          ))}
        </Picker>

        <Text>Address (press search after finishing input)</Text>
        <TextInput
          onChangeText={(text) => {
            setAddress(text);
            setLatitude(null);
            setLongitude(null);
          }}
          value={address}
        />
        <Text>Point to be displayed in page</Text>
        <MapView
          style={{ width: "100%", height: 200 }}
          initialRegion={{
            latitude: -2.5489,
            longitude: 118.0149,
            latitudeDelta: 10,
            longitudeDelta: 10,
          }}
          ref={mapRef}
        >
          {markerPosition && (
            <Marker
              draggable
              coordinate={markerPosition}
              onDragEnd={handleMarkerDragEnd}
            />
          )}
        </MapView>
        <Button title="Search" onPress={handleSearchAddress} />

        <Text>Video URL (Youtube Link)</Text>
        <TextInput onChangeText={setVideoUrl} value={videoUrl} />

        <Text>Benefits</Text>
        <TextInput onChangeText={setBenefits} value={benefits} />

        <Text>Share Percent (range 1 - 100)</Text>
        <TextInput
          onChangeText={(text) => {
            const parsedValue = parseInt(text);
            if (!isNaN(parsedValue) && parsedValue >= 1 && parsedValue <= 100) {
              setSharePercent(parsedValue.toString());
            } else {
              setSharePercent("");
            }
          }}
          value={sharePercent}
          placeholder="range 1 - 100"
          keyboardType="numeric"
        />

        <Text>Price in Rp</Text>
        <TextInput
          onChangeText={(text) => {
            const parsedValue = parseInt(text);
            if (!isNaN(parsedValue)) {
              setPrice(parsedValue.toString());
            } else {
              setPrice("");
            }
          }}
          value={price}
          placeholder="Price per share in rupiah"
          keyboardType="numeric"
        />
        <Button title="Pick Farm Photo" onPress={handleImagePicker} />
        {photo && (
          <View>
            <RNImage
              source={{ uri: photo }}
              style={{ width: 200, height: 200 }}
            />
            <Button title="Delete" onPress={() => setPhoto(null)} />
          </View>
        )}

        <Button
          title="Pick Additional Images"
          onPress={handleAdditionalImagePicker}
        />
        {additionalImages.map((image, index) => (
          <View key={index}>
            <RNImage
              source={{ uri: image }}
              style={{ width: 200, height: 200 }}
            />
            <Button title="Delete" onPress={() => handleDeleteImage(index)} />
          </View>
        ))}
        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </ScrollView>
  );
};

export default AddFarmForm;
