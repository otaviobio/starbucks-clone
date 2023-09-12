import React, { useLayoutEffect } from "react";
import { View, FlatList, Pressable, TouchableWithoutFeedback, SafeAreaView } from "react-native";
import { menuItems } from "../../assets/data/menuItems";
import {
  CategoryButton,
  Container,
  HeaderBackButton,
  HeaderContainer,
  ItemContainer,
  ItemImage,
  ItemName,
  SubCategoryContainer,
  SubCategoryHeader,
  SubCategoryName,
  VerticalSeparator,
} from "./styles";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { CartSummary } from "../../components/CartSummary";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const OrderSubcategories = ({ route, navigation }) => {
  const { category } = route.params;

  const matchingCategory = menuItems.find(
    (menuItem) => menuItem.category === category
  );

  const handleOrderItemPress = (item) => {
    navigation.navigate("OrderItem", { item });
  };

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
            [0, 75],
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
      marginBottom: interpolate(
        y.value,
        [0, 100],
        [-100, -230],
        Extrapolation.CLAMP
      ),
    };
  });

  const headerAnimated = useAnimatedStyle(() => {
    return {
      zIndex: y.value > 0 ? 0 : 1,
    };
  });

  const renderItem = ({ item }) => (
    <ItemContainer onPress={() => handleOrderItemPress(item)}>
      <ItemImage source={item.img} />
      <ItemName>{item.name}</ItemName>
    </ItemContainer>
  );

  const renderSubCategory = ({ item }) => (
    <SubCategoryContainer>
      <SubCategoryHeader>
        <SubCategoryName>{item.name}</SubCategoryName>
        <Pressable>
          <CategoryButton>See all</CategoryButton>
        </Pressable>
      </SubCategoryHeader>

      <FlatList
        data={item.items}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        horizontal
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 24 }}
        ItemSeparatorComponent={() => <VerticalSeparator />}
      />
    </SubCategoryContainer>
  );

  // use useLayoutEffect to set the header title
  useLayoutEffect(() => {
    navigation.setOptions({ title: matchingCategory.category });
  }, [navigation, matchingCategory]);

  return (
    <SafeAreaView>
      <FlatList
        data={matchingCategory.subCategories}
        renderItem={renderSubCategory}
        keyExtractor={(item) => item.name}
        ListHeaderComponent={
          <Animated.View
            style={[
              {
                zIndex: 1,
              },
              headerAnimated,
            ]}
          >
            <HeaderContainer>
              <HeaderBackButton onPress={() => navigation.goBack()}>
                <MaterialCommunityIcons
                  name="chevron-left"
                  size={40}
                  color="#7C7C8A"
                  style={{ marginLeft: -8 }}
                />
              </HeaderBackButton>
              <Animated.Text
                style={[
                  {
                    fontSize: 25,
                    fontWeight: "bold",
                    color: "black",
                    marginTop: 80,
                    marginLeft: -275,
                    marginBottom: 0,
                  },
                  textAnimated,
                ]}
              >
                {matchingCategory.category}
              </Animated.Text>
              <HeaderBackButton onPress={() => navigation.goBack()}>
                <Ionicons
                  name="md-search-outline"
                  size={32}
                  color="#7C7C8A"
                  style={{ marginLeft: -8 }}
                />
              </HeaderBackButton>
            </HeaderContainer>
          </Animated.View>
        }
      />
      <CartSummary />
    </SafeAreaView>
  );
};

export default OrderSubcategories;
