import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';

const {width, height} = Dimensions.get('screen');

export default function SliderItem({item}) {
  return (
    <View style={styles.container}>
      <Image source={item.img} resizeMode="cover" style={styles.image} />
      {/* <View style={styles.content}>
        <Text style={styles.description}>{item.description}</Text>
      </View> */}
    </View>
  )
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
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 12,
  },
});