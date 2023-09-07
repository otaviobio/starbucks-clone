import { View, Animated, Easing } from "react-native";
import {
  OrderItemToasterContainer,
  ToasterImage,
  ToasterImageContainer,
  ToasterMessage,
} from "./styles";
import { useEffect, useState } from "react";

export function OrderItemToaster({ message, image, showToaster }) {
  const position = new Animated.Value(20);

  // const [showToaster, setShowToaster] = useState(false)

  useEffect(() => {
    showToaster && show()
  }, [showToaster])

  function show() {
    clearTimeout(2300);
    Animated.timing(position, {
      toValue: 0,
      useNativeDriver: true,
      duration: 200,
      easing: Easing.linear,
    }).start();
    setTimeout(() => {
      hide();
    }, 2300)
  }

  function hide() {
    Animated.timing(position, {
      toValue: 20,
      useNativeDriver: true,
      duration: 200,
      easing: Easing.linear,
    }).start();
  }
  
  return (
    <Animated.View style={{zIndex: 1, transform: [{translateY: position}]}}>
      <OrderItemToasterContainer>
        <ToasterMessage>{message}</ToasterMessage>
        {image && (
          <View
            style={{ position: "relative", marginRight: -11, marginTop: -65 }}
          >
            <ToasterImageContainer />
            <ToasterImage source={image} />
          </View>
        )}
      </OrderItemToasterContainer>
    </Animated.View>
  );
}
