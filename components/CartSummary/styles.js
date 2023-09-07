import styled from "styled-components/native";

export const CartSummaryContainer = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GREEN_700};
  height: 60px;
  padding: 0 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const CartSummaryStore = styled.Pressable`
border-bottom-width: 1px;
border-bottom-color:  #565660;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  /* padding: 12px 20px;
  margin-bottom: 16px; */
`

export const SummaryTextContainer = styled.View`
  /* padding: 0 20px; */
  /* flex-direction: row; */
  /* justify-content: space-between;
  align-items: center; */
`

export const StoreHeader = styled.Text`
  font-size: 12px;
  color:  ${({ theme }) => theme.COLORS.GRAY_200};
  margin-bottom: 3px;
`;

export const StoreName = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: #ffffff
  margin-bottom: 3px;
`;

export const CartButton = styled.Pressable`
  position: relative;
  `

  export const OrderQuantity = styled.Text`
    font-size: 19px;
    /* width: 20px; */
    padding: 2px 4px 0;
    font-weight: 600;
    color: #FFFFFF;
    position: absolute;
    top: 12px;
    right:9px;
    background-color: #00a862;
  `;