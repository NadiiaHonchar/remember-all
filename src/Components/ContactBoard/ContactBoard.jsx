import { ContactCard } from "components/ContactCard/ContactCard";
import { Board } from "./ContactBoard.styled";

export const ContactBoard = ({ events }) => {
  return (
    <Board>
      {events.map(({ id, avatar, name, isOnline }) => (
        <ContactCard key={id} avatar={avatar} name={name} isOnline={isOnline} />
      ))}
    </Board>
  );
};
