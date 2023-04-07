import { BookTitle } from "components/BookTitle/BookTitle";
import { ContactBoard } from "components/ContactBoard/ContactBoard";
import friends from "../friends.json";

export const App = () => {
  return (
    <>
      <BookTitle text="My contacts" />
      <ContactBoard events={friends} />
    </>
  );
};
