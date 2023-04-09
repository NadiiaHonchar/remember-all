import styled from "@emotion/styled";

export const Board = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, auto));
  gap: 24px;
  padding-left: 16px;
  padding-right: 16px;
`;
