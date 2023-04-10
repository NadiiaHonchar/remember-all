import styled from "@emotion/styled";

export const CounterWrapper = styled.div`
  width: 500px;
  margin: 0px auto;
  border: ${({ theme }) => `3px double ${theme.colors.outline}`};
  border-radius: 10px;
  padding: 10px;
  :hover,: focus, :active {
    cursor: pointer;
    border: ${({ theme }) => `3px double ${theme.colors.outlineHover}`};
  }
`;

export const CounterValue = styled.span`
  display: block;
  text-align: center;
  color: ${({ theme }) => theme.colors.secondaryText};
`;

export const CounterControls = styled.div`
  display: flex;
  justify-content: space-around;
  min-width: 200px;
`;

export const CounterButton = styled.button`
  width: 75px;
  heigth: 50px;
`;
