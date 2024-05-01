import * as yup from "yup";

export const productFormSchema = yup.object().shape({
  name: yup.string().trim().required("This field is required"),
  quantityPerUnit: yup.string().required(),
  unitPrice: yup.number().positive().required(),
  unitsOnOrder: yup.number().positive().required(),
  supplierId: yup.string().required(),
});
