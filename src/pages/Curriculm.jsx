import React, { useRef, useState } from "react";
import edit from "../img/edit.png";
import { Link } from "react-router-dom";

const Detail = () => {
  const imageSrc =
    "https://cdn.inflearn.com/public/courses/332506/cover/c58f00a0-181d-4b2e-a058-6c98a7dca47a/332506-eng.png";
  const numStudents = 22615;
  const courseTitle = "스프링 MVC 1편- 백엔드 웹 개발 핵심 기술";
  const numReviews = 1729;
  const category = "개발,프로그래밍 > 백엔드";
  const price = 69300;

  const [isFavorite, setIsFavorite] = useState(false);
  const [progress, setProgress] = useState(20); // 사용자의 진행률을 0에서 100 사이의 값으로 가정합니다.

  const handleAddToCart = () => {
    console.log("장바구니에 추가되었습니다.");
  };

  const handleCheckout = () => {
    console.log("결제하기 버튼이 클릭되었습니다.");
  };

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const renderStar = () => {
    return isFavorite ? "⭐️" : "☆";
  };

  const instructorSectionRef = useRef(null);
  const reviewsSectionRef = useRef(null);
  const curriculumSectionRef = useRef(null);

  const handleScrollToInstructor = () => {
    if (instructorSectionRef.current) {
      instructorSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToCurriculum = () => {
    if (curriculumSectionRef.current) {
      curriculumSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToReviews = () => {
    if (reviewsSectionRef.current) {
      reviewsSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="app-container">
      <div className="box-container">
        <div className="course-details">
          <div className="image-container">
            <img src={imageSrc} alt="Course Image" />
          </div>
          <div className="course-info">
            <h1>{courseTitle}</h1>
            <p>{numReviews}개의 수강평</p>
            <p>{category}</p>
            <p>가격: {price.toLocaleString()}원</p>
          </div>
          <div className="action-buttons">
            <button onClick={handleAddToCart}>장바구니</button>
            <button onClick={handleCheckout}>결제하기</button>
          </div>
          <div className="favorite-button">
            <button onClick={handleToggleFavorite}>{renderStar()}</button>
          </div>
        </div>
        {/* 프로그레스 바 */}
        <div className="progress-bar-container">
          <progress id="progress" value={progress} max="100"></progress>
        </div>
      </div>

      {/* 네비게이션 버튼 */}
      <div className="nav-buttons">
        <button onClick={handleScrollToInstructor}>강의소개</button>
        <button onClick={handleScrollToCurriculum}>커리큘럼</button>
        <button onClick={handleScrollToReviews}>수강평</button>
      </div>
      {/* 강사소개 섹션 */}
      <div
        id="instructor-section"
        ref={instructorSectionRef}
        className="instructor-section"
      >
        <h2>강사소개</h2>
        <p>
          강사 소개 내용........ <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </p>
      </div>

      {/* 커리큘럼 섹션 */}
      <div
        id="curriculum-section"
        ref={curriculumSectionRef}
        className="curriculum-section"
      >
        <h2>커리큘럼</h2>
        <p>
          커리큘럼 내용...
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </p>
      </div>

      {/* 수강평 섹션 */}
      <div
        id="reviews-section"
        ref={reviewsSectionRef}
        className="reviews-section"
      >
        <h2>수강평</h2>
        <p>수강평 내용...</p>
      </div>
    </div>
  );
};

export default Detail;
