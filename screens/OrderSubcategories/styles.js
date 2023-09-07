import styled from "styled-components/native";

export const HeaderBackButton = styled.Pressable`
  margin-top: 20px;
`;

// Before it was (SafeAreaView).attrs({edges:["top"]})
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

export const Container = styled.View`
  flex: 1;
  margin-top: 30px;
  background-color: #f1f1f1;
`;

export const SubCategoryContainer = styled.View`
  margin: 15px 0;
  border-bottom-width: 1.5px;
  border-bottom-color: ${({theme}) => theme.COLORS.GRAY_200};
`;

export const SubCategoryHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  padding: 0 15px;
`;

export const SubCategoryName = styled.Text`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const CategoryButton = styled.Text`
  color: ${({theme}) => theme.COLORS.GREEN_500};
  font-size: 16px;
  font-weight: 600;
`;

export const VerticalSeparator = styled.View`
  width: 12px;
`;

export const ItemContainer = styled.Pressable`
  margin-right: 8px;
`;

export const ItemImage = styled.Image`
  width: 175px;
  height: 175px;
  margin-bottom: 8px;
`;

export const ItemName = styled.Text`
  font-weight: 400;
  text-align: center;
  font-size: 14px;
`;
