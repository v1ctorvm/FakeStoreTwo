import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const ScreenContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: green;
`;

export const Header = styled.View`
  margin: 10px;
`;

export const ScreenTitle = styled.Text`
  font-size: 24px;
  background-color: yellow;
  padding: 10px;
  font-weight: bold;
`;

export const SearchInput = styled.TextInput`
  background-color: white;
  margin: 10px;
  height: 40px;
  border-radius: 5px;
  padding: 10px;
`;

export const CategoryList = styled.FlatList`
  background-color: blue;
`;

export const CategoryChip = styled.Pressable`
  background-color: red;
  border-radius: 20px;
  padding: 8px;
`;
