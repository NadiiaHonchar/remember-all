import { Item, Avatar, ItemName, IsOnlineLabel } from "./ContactCard.styled";
import { FaTripadvisor } from "react-icons/fa";

export const ContactCard = ({ avatar, name, isOnline }) => {
  return (
    <Item>
      <FaTripadvisor size={25} />
      <IsOnlineLabel eventType={isOnline}></IsOnlineLabel>
      <Avatar src={avatar} alt="User avatar" />
      <ItemName>{name}</ItemName>
    </Item>
  );
};
