import styled from "@emotion/styled";

export const DropDownWrapper = styled.div`
  box-sizing: border-box;
  width: 250px;
  margin: 0px auto;
  border: ${({ theme }) => `3px double ${theme.colors.outline}`};
  border-radius: 10px 10px 0px 0px;
  padding: 10px;
  position: relative;
  margin-bottom: 10px;
  :hover,: focus, :active {
    cursor: pointer;
    border: ${({ theme }) => `3px double ${theme.colors.outlineHover}`};
  }
`;

export const DropDownButton = styled.button`
  width: 200px;
  border-radius: 10px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

export const DropDownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: -2px;
  box-sizing: border-box;
  width: 250px;
  padding: 25px;
  text-align: center;
  border-radius: 0px 0px 10px 10px;
  border: ${({ theme }) => `3px double ${theme.colors.outline}`};
  background-color: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.alternativeText};
`;
