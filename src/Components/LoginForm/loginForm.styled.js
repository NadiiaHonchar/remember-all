const { default: styled } = require("@emotion/styled");
const { Field, Form, ErrorMessage } = require("formik");

export const StyledForm = styled(Form)`
  width: 500px;
  margin-left: auto;
  margin-right: auto;
  border: ${({ theme }) => `3px double ${theme.colors.outline}`};
  border-radius: 10px;
  padding: 10px;
  :hover,: focus, :active {
    cursor: pointer;
    border: ${({ theme }) => `3px double ${theme.colors.outlineHover}`};
  }
`;
export const Label = styled.label`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 12px;
  position: relative;
`;
export const Input = styled(Field)`
  border-radius: 10px;
  border: ${({ theme }) => `3px double ${theme.colors.outline}`};
  padding: 4px;
  outline: none;
`;
export const StyledButton = styled.button`
  width: 100%;
  border-radius: 10px;
  padding: 4px;
  outline: none;
  border: none;
  background-color: #77ed77;
  color: #fff;
  font-weight: 800;
  text-transform: uppercase;

  :hover,: focus, :active {
    background-color: #5bc35b;
    cursor: pointer;
  }
`;

export const StyledErrorMessage = styled(ErrorMessage)`
  color: #dd2020;
  position: absolute;
  top: 16px;
  animation: 2s show ease;
  @keyframes show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
