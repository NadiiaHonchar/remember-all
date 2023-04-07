import css from "./ContactCard.module.css";
import { FaTripadvisor } from "react-icons/fa";

export const ContactCard = ({ avatar, name, isOnline }) => {
  console.log("avatar", avatar);
  console.log("name", name);
  console.log("isOnline", isOnline);
  return (
    <div className={css.item}>
      <FaTripadvisor className={css.icon} size={25} />
      <span className={css[isOnline]}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </div>
  );
};
