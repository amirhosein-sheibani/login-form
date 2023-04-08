import * as yup from "yup";

export const registerSchema = yup.object().shape({
  username: yup.string().min(4).required("Required"),
  email: yup.string().email().required("Required"),
  password: yup.string().min(6).required("Required"),
});

export const loginSchema = yup.object().shape({
  email: yup.string().email().required("Required"),
  password: yup.string().min(6).required("Required"),
});
