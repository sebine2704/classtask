import * as yup from "yup";

export const productFormSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required("Name  is required")
    .min(3, "adin uzunlugu azdir")
    .max(6, "adin uzunlugu coxdur"),
  password: yup
    .string()
    .trim()
    .required("Password is required")
    .min(8, "Password too short")
    .matches(/^(?=.*[a-z])/, "Must contain at least one lowercase character")
    .matches(/^(?=.*[A-Z])/, "Must contain at least one uppercase character")
    .matches(/^(?=.*[0-9])/, "Must contain at least one number")
    .matches(/^(?=.*[!@#%&])/, "Must contain at least one special character"),
});
