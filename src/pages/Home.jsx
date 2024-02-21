import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import banner from "../img/newbanner.jpg";
import axios from "axios";

const Home = () => {
  const [newlist, setnewlist] = useState([]);
  const [hotlist, sethotlist] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
     try {
       const res = await axios.get(`/api/firstmain`);
        console.log(res.data);

       if (res.data.code === "200") {
         setnewlist(res.data.newlectures);
         sethotlist(res.data.popularlectures);

         console.log(newlist)
         console.log(hotlist)
       }
      } catch (err) {
         console.log(err);
      }     
    };
    fetchData();
    
  }, [] );
  



  return (
    <div className="home">
      <img className="banner" src={banner} alt="banner" />

      <div>
        <h2>신규 강의</h2>
        <div className="course-list">
          {newlist.map((course) => (
            <div key={course.LectureID} className="course-card">
              <Link to={`/course/${course.LectureID}`}>
                <img src={course.LecturesImageURL} alt={course.Title} />
                <h3>{course.Title}</h3>
              </Link>
              <p>{course.Instructor}</p>
              <p>{course.price}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2>인기 강의</h2>
        <div className="course-list">
          {hotlist.map((course) => (
            <div key={course.LectureID} className="course-card">
              <Link to={`/course/${course.LectureID}`}>
                <img src={course.LecturesImageUrl} alt={course.Title} />
                <h3>{course.title}</h3>
              </Link>
              <p>{course.Instructor}</p>
              <p>{course.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
