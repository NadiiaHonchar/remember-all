import { Item, Avatar, ItemName, IsOnlineLabel } from "./ContactCard.styled";
import { FaTripadvisor } from "react-icons/fa";

export const ContactCard = ({ avatar, name, isOnline }) => {
  console.log("avatar", avatar);
  console.log("name", name);
  console.log("isOnline", isOnline);
  return (
    <Item>
      <FaTripadvisor size={25} />
      <IsOnlineLabel eventType={isOnline}></IsOnlineLabel>
      {/* <span className={css[isOnline]}></span> */}
      <Avatar src={avatar} alt="User avatar" />
      <ItemName>{name}</ItemName>
    </Item>
  );
};
