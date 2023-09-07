import styled from "styled-components/native";

export const ModalContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  background-color: rgba(0, 98, 65, 0.2);
`
export const CloseModal = styled.TouchableWithoutFeedback`
  flex: 1;
`

export const ChoicesContainer = styled.SafeAreaView`
  background-color: #fff;
  width: 100%;
  border-top-right-radius: 24px;
  border-top-left-radius: 24px;
`

export const Content = styled.View`
  padding: 0 32px 16px;
`

export const Header = styled.View`
  padding: 16px 0;
  border-bottom-width: 3px;
  border-bottom-color: ${({theme}) => theme.COLORS.GREEN_50};
`

export const HeaderTitle = styled.Text`
  text-align: center;
  font-size: 14px;
  font-weight: 500;
`

export const Choice = styled.Pressable`
  padding: 16px 0;
  border-top-width: 1px;
  border-top-color: ${({theme}) => theme.COLORS.GRAY_100};
`

export const ChoiceText = styled.Text`
  color: ${({theme}) => theme.COLORS.GRAY_500};
  font-size: 17px;
  font-weight: 600;
`