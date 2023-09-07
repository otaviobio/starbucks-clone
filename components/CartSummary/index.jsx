import { useNavigation } from "@react-navigation/native";
import {
  CartButton,
  CartSummaryContainer,
  CartSummaryStore,
  OrderQuantity,
  StoreHeader,
  StoreName,
} from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { View } from "react-native";
import { useContext } from "react";
import { OrderContext } from "../../Context/OrderContext";

export function CartSummary() {
  const navigation = useNavigation();
  const { orderItemQuantity } = useContext(OrderContext);

  return (
    <CartSummaryContainer>
      <CartSummaryStore>
        <View>
          <StoreHeader>Pickup store</StoreHeader>
          <StoreName>150 Park Lawn Road &#183; 0.9km</StoreName>
        </View>
        <MaterialCommunityIcons name="chevron-down" size={24} color="white" style={{marginLeft: 70}} />
      </CartSummaryStore>
      <CartButton onPress={() => navigation.navigate("Cart")}>
        {orderItemQuantity === 0 ? <SimpleLineIcons name="bag" size={32} color="#C4C4CC"/> : <MaterialIcons
          name="shopping-bag"
          size={42}
          color="#00a862"
          style={{ marginRight: -2 }}
        />}
        <OrderQuantity style={orderItemQuantity === 0 ? {top: 7, right: 6, backgroundColor: "transparent"} : orderItemQuantity === 1 ? {right:11} : ""}>{orderItemQuantity}</OrderQuantity>
      </CartButton>
    </CartSummaryContainer>
  );
}
