import {
  FlatList,
  Pressable,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import { menuCategories } from "../../assets/data/menuCategories";
import {
  Category,
  CategoryButton,
  CategoryContainer,
  CategoryHeader,
  CategoryImage,
  CategoryName,
  CategoryTitle,
  Container,
  HeaderBackButton,
  HeaderContainer,
  TabMenuButton,
  TabMenuText,
} from "./styles";
import { CartSummary } from "../../components/CartSummary";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { Ionicons } from "@expo/vector-icons";

export default function Order({ navigation }) {
  
  const handleCategoryPress = (category) => {
    navigation.navigate("OrderSubcategories", { category });
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
      opacity: interpolate(
        y.value,
        [0, 10, 100],
        [1, 0, 0],
        Extrapolation.CLAMP
      ),
    };
  });
  const iconAnimated = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            y.value,
            [0, 100],
            [0, -100],
            Extrapolation.CLAMP
          ),
        },
      ],
    };
  });

  const backAnimated = useAnimatedStyle(() => {
    return {
      marginTop: interpolate(
        y.value,
        [0, 100],
        [150, 75],
        Extrapolation.CLAMP
      ),
    };
  });

  const headerAnimated = useAnimatedStyle(() => {
    return {
      zIndex: y.value > 0 ? 0 : 1,
    };
  });

  return (
      <Container>
        <FlatList
          data={menuCategories}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <CategoryContainer>
              <CategoryHeader>
                <CategoryTitle>{item.type}</CategoryTitle>
                <Pressable>
                  <CategoryButton>See all</CategoryButton>
                </Pressable>
              </CategoryHeader>
              {item.categories.map((category) => (
                <Pressable
                  key={category.name}
                  onPress={() => handleCategoryPress(category.name)}
                >
                  <Category>
                    <CategoryImage source={category.img} resizeMode="cover" />
                    <CategoryName>{category.name}</CategoryName>
                  </Category>
                </Pressable>
              ))}
            </CategoryContainer>
          )}
          ListHeaderComponent={
            <Animated.View
              style={[
                {
                  zIndex: 1,
                  position: "relative",
                },
                headerAnimated,
              ]}
            >
              <HeaderContainer style={{ height: 100 }}>
                <Animated.Text
                  style={[
                    {
                      fontSize: 30,
                      fontWeight: "bold",
                      color: "black",
                      marginTop: 50,
                    },
                    textAnimated,
                  ]}
                >
                  Order
                </Animated.Text>
                <Animated.View
                  style={[
                    {
                      marginTop: 20,
                    },
                    iconAnimated,
                  ]}
                >
                  <HeaderBackButton onPress={() => navigation.goBack()}>
                    <Ionicons
                      name="md-search-outline"
                      size={32}
                      color="#7C7C8A"
                      style={{ marginLeft: -8 }}
                    />
                  </HeaderBackButton>
                </Animated.View>
              </HeaderContainer>
              <Animated.View
                style={[
                  {
                    flexDirection: "row",
                    borderBottomWidth: 0.5,
                    borderBottomColor: "#7C7C8A",
                    marginTop: 0,
                  },
                  backAnimated,
                ]}
              >
                <TabMenuButton
                  style={{
                    borderBottomWidth: 3,
                    borderBottomColor: "#006241",
                  }}
                >
                  <TabMenuText style={{ color: "#121214" }}>Menu</TabMenuText>
                </TabMenuButton>
                <TabMenuButton>
                  <TabMenuText>Featured</TabMenuText>
                </TabMenuButton>
                <TabMenuButton>
                  <TabMenuText>Previous</TabMenuText>
                </TabMenuButton>
                <TabMenuButton>
                  <TabMenuText>Favourites</TabMenuText>
                </TabMenuButton>
              </Animated.View>
            </Animated.View>
          }
        />
        <CartSummary />
      </Container>
  );
}
