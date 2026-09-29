import { Text } from "react-native";
import {
  CategoryChip,
  CategoryList,
  Header,
  ScreenContainer,
  ScreenTitle,
  SearchInput,
} from "./styles";

export const CATEGORY_MOCK = [
  { id: 1, name: "Todos", species: "Dog" },
  { id: 2, name: "Eletronicos", species: "Cat" },
  { id: 2, name: "Acessorios", species: "Cat" },
  { id: 2, name: "Roupas", species: "Cat" },
];

export function Home() {
  return (
    <ScreenContainer>
      <Header>
        <ScreenTitle>FakeStore TWO!</ScreenTitle>
        <SearchInput placeholder="Buscar Produtos" />

        <CategoryList
          horizontal
          data={CATEGORY_MOCK}
          renderItem={({ item }) => (
            <CategoryChip>
              <Text>{item.name}</Text>
            </CategoryChip>
          )}
          keyExtractor={(item) => item.id}
        />
      </Header>
    </ScreenContainer>
  );
}
