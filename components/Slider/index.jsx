import React from "react";
import { View, FlatList, StyleSheet, Dimensions, Image, Text } from "react-native";
import { homeSlides } from "../../assets/data/homeSlides";
import SliderItem from "../SliderItem";

const { width, height } = Dimensions.get("screen");

export default function Slider({ data, ...props }) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      horizontal
      renderItem={({ item }) => (
        <View style={styles.container}>
          <Image source={item.img} resizeMode="cover" style={styles.image} />
          <Text style={styles.description}>{item.description}</Text>
        </View>
      )}
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      snapToInterval={width * 0.8 + 40}
      snapToAlignment="start"
      style={{ paddingRight: 40 }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: width * 0.8,
    height: width / 2.2,
    marginHorizontal: 20,
  },

  image: {
    height: "100%",
    width: "100%",
    borderRadius: 12,
  },

  description: {
    marginTop: 32,
  }
});

// switch to styled components and add props to render the different kinds of sliders