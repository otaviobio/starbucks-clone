import React, {
  useLayoutEffect,
  useState,
  useCallback,
  useContext,
  useEffect,
  useRef,
} from "react";
import { menuItems } from "../../assets/data/menuItems";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import Short from "../../assets/images/short.svg";
import ShortActive from "../../assets/images/short-active.svg";
import Tall from "../../assets/images/tall.svg";
import TallActive from "../../assets/images/tall-active.svg";
import Grande from "../../assets/images/grande.svg";
import GrandeActive from "../../assets/images/grande-active.svg";
import Venti from "../../assets/images/venti.svg";
import VentiActive from "../../assets/images/venti-active.svg";

import {
  Container,
  CustomizationContainer,
  CustomizeButton,
  CustomizeButtonText,
  Description,
  Divider,
  HeaderButtonsContainer,
  IncludedItem,
  IncludedText,
  ItemCustomHeader,
  ItemHeaderImage,
  ItemHeaderName,
  NutritionalInfo,
  OptionHeader,
  OptionHeaderTitle,
  OrderBtn,
  OrderTxt,
  SelectionBall,
  SizeName,
  SizeOption,
  SizeOptionContainer,
  SizeQuantity,
  SummaryButton,
  SummaryButtonText,
  SummaryContainer,
  WhatsIncludedContainer,
} from "./styles";
import CustomModal from "../../components/CustomModal";
import { OrderContext } from "../../Context/OrderContext";
import { CartSummary } from "../../components/CartSummary";
import { Pressable, Text, View, Easing } from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { OrderItemToaster } from "../../components/OrderItemToaster";

export default function OrderItem({ route, navigation }) {
  const { item } = route.params;

  const menuItem = menuItems
    .flatMap((category) => category.subCategories)
    .flatMap((subcategory) => subcategory.items)
    .find((item) => item.name === item.name);

  useLayoutEffect(() => {
    navigation.setOptions({ title: item.name });
  }, [navigation, item.name]);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(2);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [selectedHeader, setSelectedHeader] = useState(null);
  const [selectedChoices, setSelectedChoices] = useState(null);
  const [includedItems, setIncludedItems] = useState(
    menuItem.included.map((item) => ({ choice: item.choices[0] }))
  );
  const [chosenExtras, setChosenExtras] = useState([]);
  const [showToaster, setShowToaster] = useState(false);

  const { addOrder } = useContext(OrderContext);

  const handleSelectIncludedItem = useCallback(
    (index) => {
      setSelectedIndex(index);
      setSelectedChoices(menuItem.included[index].choices);
      setSelectedHeader(menuItem.included[index].modification);
    },
    [menuItem.included]
  );

  const handleCloseModal = useCallback(() => {
    setModalOpen(false);
    setSelectedIndex(null);
    setSelectedChoices(null);
    setSelectedHeader(null);
  }, []);

  const handleSelectedChoice = useCallback(
    (index, choice, includedItems, setIncludedItems) => {
      const newIncludedItems = [...includedItems];
      newIncludedItems[index] = { choice };
      setIncludedItems(newIncludedItems);
      setChosenExtras((prevChosenExtras) => {
        const updatedExtras = [...prevChosenExtras];
        updatedExtras[index] = choice;
        return updatedExtras;
      });
      handleCloseModal();
    },
    []
  );

  const handleCurrentOrder = useCallback(() => {
    const sizeName =
      menuItem.sizeOptions[selectedSizeIndex]?.name ||
      menuItem.sizeOptions[2]?.name;

    const selectedChoicesArray = includedItems.map(
      (includedItem) => includedItem.choice
    );

    const currentOrder = {
      image: item.img,
      name: item.name,
      size: sizeName,
      selectedChoices: chosenExtras,
    };

    return currentOrder;
  }, [item.name, menuItem.sizeOptions, selectedSizeIndex, includedItems]);

  const currentOrder = handleCurrentOrder();

  // animation starts

  const imagePosition = useRef(new Animated.Value(0)).current;
  const mainContentAppear = useRef(new Animated.Value(0)).current;
  const buttonPosition = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    setTimeout(() => {
      showImage()
    }, 500);

    setTimeout(() => {
      showMainContent()
    }, 1500);

    setTimeout(() => {
      showButton()
    }, 2000);
  }, []);

  function showImage() {
    Animated.timing(imagePosition, {
      toValue: 1,
      useNativeDriver: true,
      duration: 500,
      easing: Easing.linear,
    }).start();
  }

  function showMainContent() {
    Animated.timing(mainContentAppear, {
      toValue: 1,
      useNativeDriver: true,
      duration: 500,
      easing: Easing.linear,
    }).start();
  }

  function showButton() {
    Animated.timing(buttonPosition, {
      toValue: 1,
      useNativeDriver: true,
      duration: 500,
      easing: Easing.linear,
    }).start();
  }

  const y = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      ("worklet");
      y.value = event.contentOffset.y - 100;
    },
  });

  const textAnimated = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        y.value,
        [0, 99, 100],
        [0, 0, 1],
        Extrapolation.CLAMP
      ),
    };
  });

  const initialHeaderAnimated = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        y.value,
        [0, 90, 100],
        [1, 0.5, 0],
        Extrapolation.CLAMP
      ),
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
      marginBottom: interpolate(
        y.value,
        [0, 100],
        [0, 100],
        Extrapolation.CLAMP
      ),
    };
  });

  const headerAnimated = useAnimatedStyle(() => {
    return {
      zIndex: y.value > 0 ? 0 : 1,
    };
  });

  // animation ends

  return (
    <>
      <ItemCustomHeader>
        <HeaderButtonsContainer>
          <Pressable onPress={() => navigation.goBack()}>
            <MaterialCommunityIcons
              name="window-close"
              size={24}
              color="#7C7C8A"
            />
          </Pressable>
          <Animated.Text
            style={[{ fontSize: 16, fontWeight: "500" }, textAnimated]}
          >
            {item.name}
          </Animated.Text>
          <Pressable>
            <SimpleLineIcons name="share" size={24} color="#7C7C8A" />
          </Pressable>
        </HeaderButtonsContainer>
        <Animated.View
          style={[
            {
              height: 0.5,
              width: "100%",
              backgroundColor: "#C4C4CC",
              shadowColor: "#171717",
              shadowOffset: { width: -2, height: 3 },
              shadowOpacity: 1,
              shadowRadius: 10,
            },
            textAnimated,
          ]}
        />
        <Animated.View
          style={[
            {
              alignItems: "center",
              height: 230,
              position: "absolute",
              top: 40,
              right: 0,
              left: 0,
            },
            initialHeaderAnimated,
          ]}
        >
          <Animated.View style={{ transform: [{ scale: imagePosition }] }}>
            <ItemHeaderImage source={item.img} />
          </Animated.View>
          <ItemHeaderName>{item.name}</ItemHeaderName>
        </Animated.View>
      </ItemCustomHeader>
      <Animated.ScrollView
        onScroll={scrollHandler}
        contentContainerStyle={{ minHeight: "100%" }}
        scrollEventThrottle={16}
        style={{ opacity: mainContentAppear }}
      >
        <View
          style={{
            height: 230, // Should be same height as Header
            backgroundColor: "transparent",
          }}
        />
        <Container>
          <CustomizationContainer>
            <OptionHeader>
              <OptionHeaderTitle>Size options</OptionHeaderTitle>
              <Divider />
            </OptionHeader>
            <SizeOptionContainer>
              {menuItem.sizeOptions.map((sizeOption, index) => (
                <SizeOption
                  key={sizeOption.name}
                  onPress={() => setSelectedSizeIndex(index)}
                >
                  {sizeOption.icon === "short" &&
                    (selectedSizeIndex === index ? (
                      <ShortActive width={20} height={20} />
                    ) : (
                      <Short width={20} height={20} />
                    ))}
                  {sizeOption.icon === "tall" &&
                    (selectedSizeIndex === index ? (
                      <TallActive width={20} height={24} />
                    ) : (
                      <Tall width={20} height={24} />
                    ))}
                  {sizeOption.icon === "grande" &&
                    (selectedSizeIndex === index ? (
                      <GrandeActive width={20} height={28} />
                    ) : (
                      <Grande width={20} height={28} />
                    ))}
                  {sizeOption.icon === "venti" &&
                    (selectedSizeIndex === index ? (
                      <VentiActive width={20} height={32} />
                    ) : (
                      <Venti width={20} height={32} />
                    ))}
                  <SizeName>{sizeOption.name}</SizeName>
                  <SizeQuantity>{sizeOption.quantity}</SizeQuantity>
                  {selectedSizeIndex === index && <SelectionBall />}
                </SizeOption>
              ))}
            </SizeOptionContainer>
          </CustomizationContainer>

          <CustomizationContainer>
            <OptionHeader>
              <OptionHeaderTitle>Customized recipe</OptionHeaderTitle>
              <Divider />
            </OptionHeader>
            <WhatsIncludedContainer>
              {menuItem.included.map((item, index) => (
                <React.Fragment key={item.modification}>
                  <IncludedItem onPress={() => handleSelectIncludedItem(index)}>
                    <IncludedText>{includedItems[index].choice}</IncludedText>
                    <AntDesign name="downcircleo" size={24} color="#006241" />
                  </IncludedItem>
                </React.Fragment>
              ))}
            </WhatsIncludedContainer>
            {/* Pass the selectedChoices to the CustomModal component */}
            <CustomModal
              visible={selectedIndex !== null}
              choices={selectedChoices}
              onClose={handleCloseModal}
              header={selectedHeader}
              onChoice={(choice) =>
                handleSelectedChoice(
                  selectedIndex,
                  choice,
                  includedItems,
                  setIncludedItems
                )
              }
            />
            <CustomizeButton>
              <SimpleLineIcons name="magic-wand" size={24} color="#cba258" />
              <CustomizeButtonText>Customize</CustomizeButtonText>
            </CustomizeButton>
          </CustomizationContainer>

          <SummaryContainer>
            <Description>{menuItem.description}</Description>
            <NutritionalInfo>{menuItem.nutricionalInfo}</NutritionalInfo>
            <SummaryButton>
              <SummaryButtonText>
                Full nutrition & ingredient list
              </SummaryButtonText>
            </SummaryButton>
          </SummaryContainer>
        </Container>
      </Animated.ScrollView>
      <View style={{ position: "relative" }}>
        <Animated.View style={{ transform: [{ scale: buttonPosition }] }}>
          <OrderBtn
            onPress={() => {
              addOrder(currentOrder);
              setShowToaster(true);
              setTimeout(() => {
                setShowToaster(false);
              }, 2500);
            }}
          >
            <OrderTxt>Add to order</OrderTxt>
          </OrderBtn>
        </Animated.View>
        {showToaster && (
          <OrderItemToaster
            message={`${item.name} added`}
            image={item.img}
            showToaster={showToaster}
          />
        )}
        <View style={{ paddingBottom: 16, backgroundColor: "#1E3932" }}>
          <CartSummary />
          <View
            style={{
              height: 1,
              borderBottomWidth: 1,
              borderBottomColor: "#7C7C8A",
            }}
          ></View>
        </View>
      </View>
    </>
  );
}

// animated view with a fixed height and absolute positioning
// animated scrollview with a view inside with your main content with a view inside same height you fixed earlier

