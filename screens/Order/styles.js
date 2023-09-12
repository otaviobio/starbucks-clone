import styled from "styled-components/native";

export const HeaderBackButton = styled.Pressable`
  /* margin-top: 20px; */
`;

export const HeaderContainer = styled.View`
  /* background-color: ${({theme}) => theme.COLORS.GREEN_700}; */
  position: absolute;
  top: 20px;
  right: 0;
  left: 0;
  padding: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const TabMenuButton = styled.Pressable`
  padding-bottom: 5px;
`;

export const TabMenuText = styled.Text`
  font-size: 15px;
  font-weight: 600;
  color: ${({theme}) => theme.COLORS.GRAY_300};
  margin: 0 10px 10px;
`;

export const Container = styled.SafeAreaView`
  /* margin-top: -40px; */
`;

export const CategoryContainer = styled.View`
  background-color: transparent;
  padding: 15px;
`;

export const CategoryHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const CategoryTitle = styled.Text`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const CategoryButton = styled.Text`
  color: ${({ theme }) => theme.COLORS.GREEN_500};
  font-size: 16px;
  font-weight: 600;
`;

export const Category = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
  background-color: transparent;
`;

export const CategoryName = styled.Text`
  font-size: 22px;
  font-weight: 400;
  margin-left: 8px;
`;

export const CategoryImage = styled.Image`
  height: 70px;
  width: 70px;
  margin-right: 10px;
  border-radius: 5px;
`;
