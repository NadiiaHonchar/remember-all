import styled from "@emotion/styled";

export const Item = styled.li`
  border: ${({ theme }) => `3px double ${theme.colors.outline}`};
  border-radius: 10px;
  display: flex;
  padding: 10px;
  align-items: center;
  svg {
    margin-right: 25px;
  }
  :hover,: focus, :active {
    cursor: pointer;
    border: ${({ theme }) => `3px double ${theme.colors.outlineHover}`};
  }
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 25px;
`;

export const ItemName = styled.p`
  color: ${({ theme }) => theme.colors.secondaryText};
`;

const setColor = ({ eventType, theme }) =>
  eventType ? theme.colors.green : theme.colors.red;

export const IsOnlineLabel = styled.span`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  margin-right: 25px;
  background-color: ${setColor};
`;
