import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SliderBox } from "react-native-image-slider-box";

const HomePage = () => {
  const images = [
    "https://source.unsplash.com/1024x768/?earphone",
    "https://source.unsplash.com/1024x768/?charger",
    "https://source.unsplash.com/1024x768/?mobile",
    "https://source.unsplash.com/1024x768/?watch",
  ];

  return (
    <View style={styles.container}>
      <SliderBox
        images={images}
        autoPlay
        circleLoop
        dotColor="#13274F"
        inactiveDotColor="#90A4AE"
        ImageComponentStyle={{
          borderRadius: 6,
          width: "100%", 
          resizeMode: "cover", 
        }}
        sliderBoxHeight={100} 
      />
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
  },
});
