import React from "react";
import "./Res.css";

function RestaurentDetail({
  name,
  category,
  image,
  rating,
  reviews,
  votes,
  cost,
  payment_method,
}) {
  return (
    <>
      <div className="">
        <div>
          <img src={image} alt="" width="400px" height="300px" />
          <div style={{ display: "flex", gap: "20px" }}>
            <p>Name: {name}</p>
            <p>Category: {category}</p>
          </div>
          <div style={{ display: "flex", gap: "20px" }}>
            <p>Rating: {rating}</p>
            <p>Reviews: {reviews}</p>
            <p>Votes: {votes}</p>
          </div>
          <div style={{ display: "flex", gap: "20px" }}>
            <p>Cost: {cost}</p>
            <p>Payment-Method: {payment_method}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default RestaurentDetail;
