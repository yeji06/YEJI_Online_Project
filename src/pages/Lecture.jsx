import React from "react";

const Lecture = ({ product }) => {
  return (
    <li className="productItem">
      {/* Product details go here */}
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <span>{product.price}원</span>
      {/* Add more details as needed */}
    </li>
  );
};

export default Lecture;
