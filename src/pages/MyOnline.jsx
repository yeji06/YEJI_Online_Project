import React, { useState } from "react";
import { Link } from "react-router-dom";

const MyOnline = () => {
  const [courses, setCourses] = useState([
    {
      id: 1,
      imageSrc:
        "https://cdn.inflearn.com/public/courses/332506/cover/c58f00a0-181d-4b2e-a058-6c98a7dca47a/332506-eng.png",
      title: "일타강사의 실전 자바-기본편",
      progress: "30",
    },
    {
      id: 2,
      imageSrc:
        "https://cdn.inflearn.com/public/courses/326674/cover/4657d793-56a4-42f3-9d44-dc88d125a49e",
      title: "스프링MVC편",
      progress: "23.9",
    },
    {
      id: 3,
      imageSrc:
        "https://cdn.inflearn.com/public/courses/331324/cover/f09739a9-e3aa-4170-b630-6b9f58134c01/331324-eng.png",
      title: "Node.js 노드 빠르게 훑어보기:서버부터 DB까지",
      progress: "15.4",
    },
    {
      id: 4,
      imageSrc:
        "https://cdn.inflearn.com/public/courses/324951/course_cover/510c265a-6de2-456d-8e6a-351b9ce29608/nodeReactbasic.png",
      title: "따라하며 배우는 노드,리액트 시리즈",
      progress: "70",
    },
    {
      id: 5,
      imageSrc:
        "https://cdn.inflearn.com/public/courses/332506/cover/c58f00a0-181d-4b2e-a058-6c98a7dca47a/332506-eng.png",
      title: "일타강사의 실전 자바-기본편",
      progress: "80",
    },
    {
      id: 6,
      imageSrc:
        "https://cdn.inflearn.com/public/courses/326674/cover/4657d793-56a4-42f3-9d44-dc88d125a49e",
      title: "스프링MVC편",
      progress: "90",
    },
    {
      id: 7,
      imageSrc:
        "https://cdn.inflearn.com/public/courses/331324/cover/f09739a9-e3aa-4170-b630-6b9f58134c01/331324-eng.png",
      title: "Node.js 노드 빠르게 훑어보기:서버부터 DB까지",
      progress: "10.2",
    },
    {
      id: 8,
      imageSrc:
        "https://cdn.inflearn.com/public/courses/324951/course_cover/510c265a-6de2-456d-8e6a-351b9ce29608/nodeReactbasic.png",
      title: "따라하며 배우는 노드,리액트 시리즈",
      progress: "5",
    },
  ]);

  return (
    <div className="MyOnline" style={{ height: "550px", display: "flex" }}>
      <div className="infonav">
        <ul
          style={{
            backgroundColor: "#fff",
            borderRadius: "10px",
            marginTop: "45px",
            paddingLeft: "0",
          }}
        >
          <li>
            <Link className="link" to={"/profile"}>
              내 정보
            </Link>
          </li>
          <br />
          <li>
            <Link className="link" to={"/myonline"}>
              수강 내역
            </Link>
          </li>
          <br />
          <li>
            <Link className="link" to={"/wishlist"}>
              찜 목록
            </Link>
          </li>
          <br />
          <li>
            <Link className="link" to={"/paymentlist"}>
              결제 내역
            </Link>
          </li>
          <br />
        </ul>
      </div>
      <div className="content">
        <h2>내 강의</h2>
        <div className="img">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between", // 아이템들 간의 간격을 최대한 벌리기 위해 추가
            }}
          >
            {courses.map((course) => (
              <div
                key={course.id}
                style={{
                  margin: "10px",
                  textAlign: "center",
                  width: "200px",
                }}
              >
                <img
                  src={course.imageSrc}
                  alt={course.title}
                  style={{ width: "100%", height: "120px", objectFit: "cover" }}
                />
                <progress
                  id="progress"
                  value={course.progress}
                  max="100"
                ></progress>
                <p>{course.title}</p>
                <br />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOnline;
