import React, { useContext, useState } from "react";
import {
  Divider,
  EmptyCartContainer,
  EmptyCartHeader,
  EmptyCartImg,
  EmptyCartText,
  FadedText,
  Footer,
  HeaderBackButton,
  HeaderContainer,
  ItemContainer,
  ItemHeader,
  ItemImage,
  ItemInfoContainer,
  ItemText,
  MainContentContainer,
  Option,
  OptionText,
  PickupOptions,
} from "./styles";
import { OrderContext } from "../../Context/OrderContext";
import emptyCart from "../../assets/images/empty-cart.png";
import { Pressable, Text, TouchableWithoutFeedback, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import {
  CartSummaryStore,
  StoreHeader,
  StoreName,
} from "../../components/CartSummary/styles";

export default function Cart({ navigation }) {
  const { orders, orderItemQuantity, duplicateOrderItem, deleteOrderItem } = useContext(OrderContext);
  const [driveThruOption, setDriveThruOption] = useState(false);
  const y = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      ("worklet");
      y.value = event.contentOffset.y;
    },
  });

  const textAnimated = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(y.value, [0, 100], [1, 0.75], Extrapolation.CLAMP),
        },
        {
          translateX: interpolate(
            y.value,
            [0, 100],
            [0, 0],
            Extrapolation.CLAMP
          ),
        },
        {
          translateY: interpolate(
            y.value,
            [0, 100],
            [0, -71],
            Extrapolation.CLAMP
          ),
        },
      ],
    };
  });

  const backAnimated = useAnimatedStyle(() => {
    return {
      marginBottom: interpolate(y.value, [0, 100], [-100, -230], Extrapolation.CLAMP),
    };
  });

  const headerAnimated = useAnimatedStyle(() => {
    return {
      zIndex: y.value > 0 ? 0 : 1,
    };
  });

  return (
    <>
      <Animated.View
        style={[
          {
            zIndex: 1,
          },
          headerAnimated,
        ]}
      >
        <HeaderContainer style={{ height: 330 }}>
          <HeaderBackButton onPress={() => navigation.goBack()}>
            <MaterialCommunityIcons
              name="chevron-down"
              size={40}
              color="white"
              style={{ marginLeft: -8 }}
            />
          </HeaderBackButton>
          <Animated.Text
            style={[
              {
                fontSize: 25,
                fontWeight: "bold",
                color: "white",
                marginTop: 20,
                marginBottom: 30,
              },
              textAnimated,
            ]}
          >
            Review Order ({orderItemQuantity})
          </Animated.Text>
          <CartSummaryStore>
            <View>
              <StoreHeader>Pickup store</StoreHeader>
              <StoreName>150 Park Lawn Road &#183; 0.9km</StoreName>
            </View>
            <MaterialCommunityIcons
              name="chevron-down"
              size={24}
              color="white"
              style={{ marginLeft: 70 }}
            />
          </CartSummaryStore>
          <Footer>
            <StoreHeader>Pickup options</StoreHeader>
            <PickupOptions>
              <Option
                onPress={() => setDriveThruOption(!driveThruOption)}
                style={
                  !driveThruOption
                    ? {
                        borderTopLeftRadius: 4,
                        borderBottomLeftRadius: 4,
                        backgroundColor: "#d4e9e2",
                      }
                    : { borderTopLeftRadius: 4, borderBottomLeftRadius: 4 }
                }
              >
                <MaterialCommunityIcons
                  name="door-sliding"
                  size={24}
                  color={driveThruOption ? "white" : "#006241"}
                  style={{ marginBottom: 4 }}
                />
                <OptionText style={!driveThruOption && { color: "#006241" }}>
                  In store
                </OptionText>
              </Option>
              <Option
                onPress={() => setDriveThruOption(!driveThruOption)}
                style={
                  driveThruOption
                    ? {
                        borderTopRightRadius: 4,
                        borderBottomRightRadius: 4,
                        backgroundColor: "#d4e9e2",
                      }
                    : { borderTopRightRadius: 4, borderBottomRightRadius: 4 }
                }
              >
                <MaterialCommunityIcons
                  name="car-outline"
                  size={24}
                  color={!driveThruOption ? "white" : "#006241"}
                  style={{ marginBottom: 4 }}
                />
                <OptionText style={driveThruOption && { color: "#006241" }}>
                  Drive-thru
                </OptionText>
              </Option>
            </PickupOptions>
          </Footer>
        </HeaderContainer>
      </Animated.View>
      <Animated.ScrollView
        style={{ marginTop: 100 }}
        onScroll={scrollHandler}
        contentContainerStyle={{ minHeight: "100%" }}
        scrollEventThrottle={16}
      >
        <TouchableWithoutFeedback
          onPress={() => {
            // scroll to top
            console.log("scroll to top");
          }}
        >
          <Animated.View
            style={[{
              height: 330, // Should be same height as Header
              backgroundColor: "transparent",
              marginBottom: -100,
              // marginBottom: -230,
            }, backAnimated]}
          />
        </TouchableWithoutFeedback>
        <MainContentContainer>
          {orders.length === 0 ? (
            <EmptyCartContainer>
              <EmptyCartImg
                source={emptyCart}
                alt="Starbucks items you can order"
              />
              <EmptyCartHeader>Start your next order</EmptyCartHeader>
              <EmptyCartText>
                As you add menu items the, they'll appear here. You'll have a
                chance to review before placing your order.
              </EmptyCartText>
            </EmptyCartContainer>
          ) : (
            orders.map((order, index) => (
              <React.Fragment key={index}>
                <ItemContainer>
                  <ItemImage source={order.image} />
                  <ItemInfoContainer>
                    <ItemHeader>{order.name}</ItemHeader>
                    <View style={{ marginTop: 20, marginBottom: 10 }}>
                      <ItemText>{order.size}</ItemText>
                      {order.selectedChoices.length > 0 ? (
                        order.selectedChoices.map((selected) => (
                          <ItemText key={selected}>{selected}</ItemText>
                        ))
                      ) : (
                        <FadedText>50 calories</FadedText>
                      )}
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <Pressable onPress={() => duplicateOrderItem(index)}>
                        <MaterialIcons
                          name="add-circle-outline"
                          size={26}
                          color="#7c7c8a"
                        />
                      </Pressable>
                      <Pressable style={{ marginLeft: 25 }} onPress={() => deleteOrderItem(index)}>
                        <MaterialCommunityIcons
                          name="minus-circle-outline"
                          size={26}
                          color="#7c7c8a"
                        />
                      </Pressable>
                    </View>
                  </ItemInfoContainer>
                </ItemContainer>
                <Divider />
              </React.Fragment>
            ))
          )}
        </MainContentContainer>
      </Animated.ScrollView>
    </>
  );
}
