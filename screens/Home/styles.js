import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #fffafa;
`;

export const Content = styled.View`
  flex: 1;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Title = styled.Text`
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
  margin: 15px 0 30px 20px;
`;

export const JoinBtnAlternate = styled.Pressable`
  background-color: transparent;
  padding: 8px 16px;
  border-radius: 32px;
  border: 1px solid #000;
  margin-bottom: -70px;
  margin-left: 20px;
`;

export const JoinTxtAlternate = styled.Text`
  color: #000;
  font-weight: bold;
  font-size: 16px;
`;

export const JoinContainer = styled.View`
  flex: 1;
  position: relative;
  width: 100%;
  height: 100%;
`;

export const JoinBtn = styled.Pressable`
  position: absolute;
  bottom: 20px;
  right: 20px;
  background-color: ${({theme}) => theme.COLORS.GREEN_500};
  padding: 16px 28px;
  border-radius: 32px;
  box-shadow: 7px 7px 7px rgba(0, 0, 0, 0.3);
`;

export const JoinTxt = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 19px;
`;
