import { Footer, LeftButtons, Title, HeaderButton, HeaderButtonText } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { RootTabScreenProps } from "../../types";
import { useNavigation } from "@react-navigation/native";

export function HomeHeader() {
  const navigation = useNavigation();

  return (
    <>
      <Title>It's a great day for coffee ☕</Title>
      <Footer>
        <LeftButtons>
          <HeaderButton style={{ marginLeft: 8, marginRight: 20 }} onPress={() => navigation.navigate('SignIn')}>
            <Ionicons
              name="ios-enter-outline"
              size={24}
              color="#7C7C8A"
              style={{ marginRight: 8 }}
            />
            <HeaderButtonText>Sign in</HeaderButtonText>
          </HeaderButton>
          <HeaderButton>
            <EvilIcons
              name="envelope"
              size={28}
              color="#7C7C8A"
              style={{ marginRight: 8 }}
            />
            <HeaderButtonText>Inbox</HeaderButtonText>
          </HeaderButton>
        </LeftButtons>
        <HeaderButton>
          <MaterialCommunityIcons
            name="account-circle-outline"
            size={24}
            color="#7C7C8A"
            style={{ marginRight: 8 }}
          />
        </HeaderButton>
      </Footer>
    </>
  );
}
