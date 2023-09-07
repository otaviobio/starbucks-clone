import styled from "styled-components/native";

export const LeftButtons = styled.View`
  flex-direction: row;
`;

export const Title = styled.Text`
  /* flex: 1; */
  font-size: 32px;
  text-align: center;
  /* color: ${({theme}) => theme.COLORS.GOLD_500} */
  /* color: #fff; */
  /* margin-bottom: 20px; */
`;

export const Footer = styled.View`
  /* flex: 1; */
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
  /* THIS MAKES IT TAKE 100% OF THE GIVEN SCREEN */
  width: 100%;
`;

export const HeaderButton = styled.Pressable`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const HeaderButtonText = styled.Text`
  font-size: 16px;
  color: ${({theme}) => theme.COLORS.GRAY_400};
`