import React from "react";
import { useForm } from "react-hook-form";
import "./Explor.css";

const Explor = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div className="Explor-container">
      <h1 className="my-4 text-light">Find Adventure That Suits Your Needs</h1>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <input
          id="input"
          placeholder="Where To?"
          {...register("WhereTo", { require: true })}
        />
        <input
          id="input"
          placeholder="When ?"
          {...register("When", { require: true })}
        />

        <input
          id="input"
          placeholder="Teavle Type"
          {...register("TeavleType", { required: true })}
        />

        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </div>
  );
};

export default Explor;
