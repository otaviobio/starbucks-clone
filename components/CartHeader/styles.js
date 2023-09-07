import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const HeaderContainer = styled(SafeAreaView).attrs({edges:["top"]})`
  background-color: ${({theme}) => theme.COLORS.GREEN_700};
`;

export const Title = styled.Text`
  font-size: 32px;
  text-align: center;
  color: #ffffff;
  margin-bottom: 20px;
`;

export const Footer = styled.View`
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
  /* THIS MAKES IT TAKE 100% OF THE GIVEN SCREEN */
  width: 100%;
`;