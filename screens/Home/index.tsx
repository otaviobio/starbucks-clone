import { Dimensions, SafeAreaView, StyleSheet } from "react-native";
import { RootTabScreenProps } from "../../types";
import Slider from "../../components/Slider";
import { homeSlides } from "../../assets/data/homeSlides";
import { Text, View, Button } from "react-native";
import {
  Container,
  Content,
  JoinBtn,
  JoinBtnAlternate,
  JoinContainer,
  JoinTxt,
  JoinTxtAlternate,
  Title,
} from "./styles";

const { width, height } = Dimensions.get("screen");

export default function Home({ navigation }: RootTabScreenProps<"Home">) {
  return (
    <Container>
      <Content>
        <Title>Starbucks rewards</Title>
        <Slider data={homeSlides} />
        <JoinBtnAlternate onPress={() => navigation.navigate("SignUp")}>
          <JoinTxtAlternate>Join now</JoinTxtAlternate>
        </JoinBtnAlternate>
      </Content>
      <JoinContainer>
        <JoinBtn onPress={() => navigation.navigate("SignUp")}>
          <JoinTxt>Join now</JoinTxt>
        </JoinBtn>
      </JoinContainer>
    </Container>
  );
}
