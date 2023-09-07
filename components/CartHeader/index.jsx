import { Footer, Title, Container, HeaderContainer } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  CartSummaryStore,
  StoreHeader,
  StoreName,
} from "../CartSummary/styles";
import { useContext } from "react";
import { OrderContext } from "../../Context/OrderContext";
import { View } from "react-native";

export function CartHeader() {
  const navigation = useNavigation();
  const { orderItemQuantity } = useContext(OrderContext);

  return (
    <HeaderContainer>
      <Title>Review Order ({orderItemQuantity})</Title>
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
        <View>
          <StoreHeader>Pickup options</StoreHeader>
        </View>
      </Footer>
    </HeaderContainer>
  );
}
