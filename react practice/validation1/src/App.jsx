import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { productFormSchema } from "./schema/productfrom";

const App = () => {
  const [suppliers, setSuppliers] = useState([]);
  const getSuppliers = async () => {
    const res = await axios("http://localhost:3000/users");
    setSuppliers(res?.data);
  };

  useEffect(() => {
    getSuppliers();
  }, []);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(productFormSchema),
  });

  const createProduct = async (values) => {
    await axios.post("http://localhost:3000/users", values);
  };
  return (
    <form onSubmit={handleSubmit(createProduct)}>
      <input type="text" {...register("name")} placeholder="name" />
      {errors.name?.message && (
        <p style={{ color: "red" }}>{errors.name?.message}</p>
      )}
      <input type="text" {...register("password")} placeholder="password" />
      {errors.password?.message && (
        <p style={{ color: "red" }}>{errors.password?.message}</p>
      )}
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default App;
