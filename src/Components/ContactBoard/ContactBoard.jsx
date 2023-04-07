import { ContactCard } from "components/ContactCard/ContactCard";
import css from "./ContactBoard.module.css";

export const ContactBoard = ({ events }) => {
  return (
    <div className={css.contactBoard}>
      {events.map(({ id, avatar, name, isOnline }) => (
        <ContactCard key={id} avatar={avatar} name={name} isOnline={isOnline} />
      ))}
    </div>
  );
};
