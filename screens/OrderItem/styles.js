import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: #f1f1f1;
`;

export const ItemCustomHeader = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* position: absolute;
  top: 0;
  left: 0;
  right: 0; */
`;

export const HeaderButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px 10px;
`

export const ItemHeaderImage = styled.Image`
  width: 175px;
  height: 175px;
  margin: 10px 0 8px;
`;

export const ItemHeaderName = styled.Text`
  font-size: 24px;
  font-weight: 400;
`;

export const CustomizationContainer = styled.View`
  padding: 15px 10px;
`;

export const OptionHeader = styled.View``;

export const Divider = styled.View`
  height: 4px;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.GREEN_50};
  border-radius: 16px;
  margin: 8px 0 16px;
`;

export const OptionHeaderTitle = styled.Text`
  margin-left: 10px;
  font-size: 17px;
  font-weight: 600;
`;

export const SizeOptionContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
`;

export const SizeOption = styled.Pressable`
  width: 62px;
  height: 100px;
  border-radius: 8px;
  /* background-color: ${({ theme }) => theme.COLORS.GREEN_100}; */
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SelectionBall = styled.View`
  position: absolute;
  width: 55px;
  height: 55px;
  border-radius: 50px;
  background-color: rgba(108, 195, 137, 0.2);
  border: 1.5px solid ${({ theme }) => theme.COLORS.GREEN_500};
  right: 4px;
  top: -5px;
`;

export const SizeName = styled.Text`
  margin-top: 10px ;
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const SizeQuantity = styled.Text`
  font-size: 12px;
  /* font-weight: 700; */
  color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const WhatsIncludedContainer = styled.View``;

export const IncludedItem = styled.Pressable`
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 8px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  margin-bottom: 16px;
`;

export const IncludedText = styled.Text`
  font-size: 16px;
`;

export const CustomizeButton = styled.Pressable`
  background-color: ${({ theme }) => theme.COLORS.GREEN_700};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  padding: 14px 22px;
  border-radius: 48px;
`;

export const CustomizeButtonText = styled.Text`
  margin-left: 10px;
  font-size: 17px;
  font-weight: 700;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const SummaryContainer = styled.View`
  padding: 20px 20px 200px;
  background-color: ${({ theme }) => theme.COLORS.GREEN_700};
`;

export const Description = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: 14px;
  font-weight: 600;
`;

export const NutritionalInfo = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  margin: 24px 0;
  font-size: 20px;
  font-weight: 700;
`;

export const SummaryButton = styled.Pressable`
  background-color: transparent;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  padding: 8px 16px;
  border-radius: 48px;
  border: 1.5px solid ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const SummaryButtonText = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const OrderBtn = styled.Pressable`
  position: absolute;
  top: -75px;
  right: 20px;
  background-color: ${({theme}) => theme.COLORS.GREEN_500};
  padding: 16px 28px;
  border-radius: 32px;
  box-shadow: 7px 7px 7px rgba(0, 0, 0, 0.3);
`;

export const OrderTxt = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 19px;
`;
