import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: flex-start;
  justify-content: flex-start;
  /* background-color: rgba(232,232,232, 0.1); */
  background-color: #fff;
`;

export const Content = styled.View`
  /* flex: 1; */
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const DividerText = styled.Text`
  font-size: 17px;
  font-weight: 600;
  align-self: flex-start;
  margin: 30px 0 10px 25px;
  width: 90%;
`;

export const Divider = styled.View`
  width: 90%;
  height: 4px;
  background-color: ${({theme}) => theme.COLORS.GREEN_50};
  margin-bottom: 20px;
`

export const TermsContainer = styled.View`
  flex-direction: row;
  width: 90%;
  align-items: flex-start;
  margin-left: 20px;
  padding: 20px 0;
`;

export const TermsTextContainer = styled.View`
  flex-direction: column;
  margin-top: -5px;
  margin-left: 10px;
`;

export const TermsHeadline = styled.Text`
  font-size: 15px;
`;

export const TermsSubText = styled.Text`
  color: ${({theme}) => theme.COLORS.GRAY_300};
  font-size: 12px;
  letter-spacing: 0.8px;
  /* width: 60%; */
  margin-top: 5px;
`;

export const JoinBtn = styled.Pressable`
  background-color: ${({theme}) => theme.COLORS.GREEN_500};
  padding: 16px 28px;
  border-radius: 32px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
  align-self: flex-end;
  margin-right: 20px;
`;

export const JoinTxt = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 19px;
`;