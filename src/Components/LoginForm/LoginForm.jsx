import { Formik } from "formik";
import * as yup from "yup";
import {
  Input,
  StyledForm,
  Label,
  StyledButton,
  StyledErrorMessage,
} from "./loginForm.styled";

const personSchema = yup.object({
  login: yup.string().required(),
  password: yup.string().min(6).max(20).required(),
});

const initialValues = {
  login: "",
  password: "",
};

export const LoginForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    // console.log(actions);
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={personSchema}
      onSubmit={handleSubmit}
    >
      <StyledForm autoComplete="off">
        <Label htmlFor="login">
          Login
          <Input type="text" name="login" />
          <StyledErrorMessage name="login" component="div" />
        </Label>
        <Label htmlFor="password">
          Password
          <Input type="password" name="password" />
          <StyledErrorMessage name="password" component="div" />
        </Label>
        <StyledButton type="submit">Submit</StyledButton>
      </StyledForm>
    </Formik>
  );
};
