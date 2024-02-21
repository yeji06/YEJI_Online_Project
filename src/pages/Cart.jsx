// Cart.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import PaymentPopup from "./PaymentPopup";
import tossImage from "../img/tosspay.png";
import creditCardImage from "../img/creditCard.png";
import kakaoPayImage from "../img/kakaopay.png";
import axios from "axios";

Modal.setAppElement("#root");

const Cart = () => {
  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState([]);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState([]);

  const [courses, setCourses] = useState([
    {
      id: 1,
      imageSrc:
        "https://cdn.inflearn.com/public/courses/332506/cover/c58f00a0-181d-4b2e-a058-6c98a7dca47a/332506-eng.png",
      title: "일타강사의 실전 자바-기본편",
      instructor: "일타강사",
      price: 60000,
      isChecked: false,
    },
    {
      id: 2,
      imageSrc:
        "https://cdn.inflearn.com/public/courses/326674/cover/4657d793-56a4-42f3-9d44-dc88d125a49e",
      title: "스프링MVC편",
      instructor: "일타강사",
      price: 90000,
      isChecked: false,
    },
  ]);

  const handleCheckboxChange = (courseId) => {
    setCourses((prevCourses) =>
      prevCourses.map((course) =>
        course.id === courseId
          ? { ...course, isChecked: !course.isChecked }
          : course
      )
    );
  };

  const handleAllCheckboxChange = () => {
    setCourses((prevCourses) =>
      prevCourses.map((course) => ({ ...course, isChecked: !isAllChecked }))
    );
  };

  const isAllChecked = courses.every((course) => course.isChecked);

  const handleDeleteSelected = () => {
    setCourses((prevCourses) =>
      prevCourses.filter((course) => !course.isChecked)
    );
  };

  const handleButtonClick = () => {
    setModalIsOpen(true);
  };

  const handlePaymentClose = () => {
    setModalIsOpen(false);
    setSelectedPaymentMethod(null);
  };

  const handlePaymentConfirm = (paymentMethod) => {
    // Handle payment confirmation logic based on the selected payment method
    console.log("Payment method selected:", paymentMethod);
    setSelectedPaymentMethod(paymentMethod);
    // Additional logic if needed
  };

  const calculateTotalPrice = () => {
    return courses.reduce(
      (total, course) => (course.isChecked ? total + course.price : total),
      0
    );
  };

  return (
    <div style={{ padding: "20px", display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <input
            type="checkbox"
            checked={isAllChecked}
            onChange={handleAllCheckboxChange}
            style={{ marginLeft: "10px" }}
          />
          <span style={{ marginLeft: "5px" }}>전체 선택</span>
          <button
            onClick={handleDeleteSelected}
            style={{ marginLeft: "10px", padding: "5px", cursor: "pointer" }}
          >
            선택 삭제
          </button>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <p style={{ marginRight: "10px" }}>
            총 금액: {calculateTotalPrice()}원
          </p>
          <button
            className="bubbly-button"
            onClick={handleButtonClick}
            style={{
              width: "130px",
              height: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            결제하기
          </button>
        </div>
      </div>
      {courses.map((course) => (
        <div
          key={course.id}
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "20px",
            marginLeft: "10px",
            borderBottom: "1px solid #ccc",
            paddingBottom: "10px",
          }}
        >
          <input
            type="checkbox"
            checked={course.isChecked}
            onChange={() => handleCheckboxChange(course.id)}
            style={{ marginRight: "10px" }}
          />
          <img
            src={course.imageSrc}
            alt={course.title}
            style={{ width: "100px", height: "100px", marginRight: "20px" }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <p>강의명: {course.title}</p>
            <p>강사: {course.instructor}</p>
            <p>가격: {course.price}원</p>
          </div>
        </div>
      ))}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handlePaymentClose}
        contentLabel="결제 모달"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
          content: {
            width: "50%",
            margin: "auto",
          },
        }}
      >
        <PaymentPopup
          onClose={handlePaymentClose}
          onConfirm={handlePaymentConfirm}
          tossImage={tossImage}
          creditCardImage={creditCardImage}
          kakaoPayImage={kakaoPayImage}
        />
      </Modal>
    </div>
  );
};

export default Cart;









