import { BookTitle } from "components/BookTitle/BookTitle";
import { ContactBoard } from "components/ContactBoard/ContactBoard";
import { Counter } from "components/Counter/Counter";
import { Dropdown } from "components/Dropdown/Dropdown";
import { Container } from "./App.styled";
import friends from "../../friends.json";

export const App = () => {
  return (
    <>
      <Container>
        <BookTitle text="My contacts" />
        <ContactBoard events={friends} />
        <Counter initialValue={0} />
        <Dropdown />
      </Container>
    </>
  );
};
