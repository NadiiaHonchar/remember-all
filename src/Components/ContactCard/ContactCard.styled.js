import styled from "@emotion/styled";

export const Item = styled.li`
  border: 3px double var(--color-outline);
  border-radius: 10px;
  display: flex;
  padding: 10px;
  align-items: center;
  svg {
    margin-right: 25px;
  }
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 25px;
`;

export const ItemName = styled.p`
  color: var(--color-secondary-text);
`;

export const IsOnlineLabel = styled.span`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  margin-right: 25px;
  background-color: ${(props) =>
    props.eventType ? "var(--color-grin)" : "var(--color-red)"};
`;
