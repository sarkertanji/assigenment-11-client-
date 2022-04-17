import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import "./OrderReview.css";
import { Card } from "react-bootstrap";
import img from "../../img/explor.jpg";

const OrderReview = () => {
  const { id } = useParams();
  const { user } = useAuth();
  // state
  const [selected, setSelected] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/place/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setSelected(data);
      });
  }, [id]);

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.id = id;
    data.name = selected.name;
    data.img = selected.img;
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => alert("request confirm"));
  };
  return (
    <div className="purches-container">
      <form className="detail-from" onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Name" {...register("name")} />
        <input placeholder="Email" {...register("email")} />
        <input placeholder="Phone" {...register("phone")} />
        <input placeholder="City" {...register("city", { required: true })} />
        <input placeholder="Address" {...register("address")} />
        {errors.exampleRequired && <span>This field is required</span>}
        <input type="submit" />
      </form>
      <div className="my-4">
        <Card className="order-card">
          <Card.Img variant="top" src={selected.img} />
          <Card.Body>
            <Card.Title>{selected.name}</Card.Title>
            <Card.Text>{selected.description}</Card.Text>
            <Card.Text>Price:${selected.price}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default OrderReview;
