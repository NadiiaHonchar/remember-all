import css from "./ContactBoard.module.css";

export const ContactBoard = ({ events }) => {
  return (
    <div className={css.contactBoard}>
      {events.map((event) => (
        <div key={event.id}>{event.name}</div>
      ))}
    </div>
  );
};
