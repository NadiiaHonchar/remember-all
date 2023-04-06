import Section from "components/Section";
import { BookTitle } from "components/BookTitle/BookTitle";

export const App = () => {
  return (
    <>
      <BookTitle text="My contacts" />
      <Section title="First section" />
      <Section title="Second section">Hello</Section>
    </>
  );
};
