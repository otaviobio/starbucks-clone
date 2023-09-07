import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const HeaderBackButton = styled.Pressable`
  margin-top: 20px;
`;

// Before it was (SafeAreaView).attrs({edges:["top"]})
export const HeaderContainer = styled.View`
  background-color: ${({theme}) => theme.COLORS.GREEN_700};
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  padding: 10px;
`;

export const Footer = styled.View`
  margin-top: 20px;
  flex-direction: column;
  justify-content: space-between;
  /* THIS MAKES IT TAKE 100% OF THE GIVEN SCREEN */
  width: 100%;
`;

export const PickupOptions = styled.View`
  margin-top: 5px;
  flex-direction: row;
  width: 100%;
`;

export const Option = styled.Pressable`
  /* margin-top: 20px; */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  border: 1px solid ${({theme}) => theme.COLORS.GRAY_200};
  padding: 10px 0;
`;

export const OptionText = styled.Text`
  color: #ffffff;
  font-size: 12px;
  font-weight: 300;
`

export const MainContentContainer = styled.View`
  flex: 1;
  background-color: #ffffff;
`

export const EmptyCartContainer = styled.View`
padding: 0 15px;
`

export const EmptyCartImg = styled.Image`
  max-height: 40%;
  /* object-fit: contain; */
  height: 100%;
  width: 100%;
`

export const EmptyCartHeader = styled.Text`
  font-size: 24px;
  font-weight: 600;
  margin: 10px 0;
`

export const EmptyCartText = styled.Text`
  font-size: 15px;
  line-height: 22px;
  color: ${({ theme }) => theme.COLORS.GRAY_300};
`

export const ItemContainer = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 15px;
`;

export const ItemInfoContainer = styled.View`
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-left: 20px;
`;

export const ItemImage = styled.Image`
  width: 75px;
  height: 75px;
  margin-bottom: 8px;
`;

export const ItemHeader = styled.Text`
  font-size: 22px;
`;

export const ItemText = styled.Text`
  font-size: 14px;
  font-weight: 300;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const FadedText = styled.Text`
  font-size: 14px;
  font-weight: 300;
  color: ${({ theme }) => theme.COLORS.GRAY_300};
`

export const Divider = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  /* border-radius: 16px; */
  /* margin: 8px 0 16px; */
`;

export const TotalContainer = styled.View`
  margin-top: 20px;
`;

export const TotalText = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;
