import styled from "styled-components/native";

export const OrderItemToasterContainer = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GREEN_500};
  height: 50px;
  padding: 0 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* z-index: 1; */
`;

export const ToasterMessage = styled.Text`
  font-size: 14px;
  color: #ffffff;
  font-weight: 500;
`;

export const ToasterImageContainer = styled.View`
  display: inline-block;
  background-color: #ffffff;
  transform: rotate(135deg);
  border: 1px solid white;
  width: 60px;
  height: 60px;
  border-top-left-radius: 50%;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
`;

export const ToasterImage = styled.Image`
  position: absolute;
  right: 5px;
  top: 3px;
  width: 50px;
  height: 50px;
  z-index: 1;
`;

export const OrderQuantity = styled.Text`
  font-size: 19px;
  /* width: 20px; */
  padding: 2px 4px 0;
  font-weight: 600;
  color: #ffffff;
  position: absolute;
  top: 12px;
  right: 9px;
  background-color: #00a862;
`;
