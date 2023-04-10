import { BookTitle } from "components/BookTitle/BookTitle";
import { ContactBoard } from "components/ContactBoard/ContactBoard";
import { Counter } from "components/Counter/Counter";
import { Container } from "./App.styled";
import friends from "../../friends.json";

export const App = () => {
  return (
    <>
      <Container>
        <BookTitle text="My contacts" />
        <ContactBoard events={friends} />
        <Counter />
      </Container>
    </>
  );
};
