import styled from "@emotion/styled";

export const TodoItem = styled.li`
  display: flex;
  align-item: center;
  justify-content: space-between;
  padding: 20px;
  border: ${({ theme }) => `3px double ${theme.colors.outline}`};
`;

export const TodoText = styled.p`
  margin-right: 5px;
`;
