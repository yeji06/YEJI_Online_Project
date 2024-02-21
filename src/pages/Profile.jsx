import React, { useState } from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  const [userInfo, setUserInfo] = useState({
    UserImg:
      "https://thumb.mt.co.kr/06/2023/07/2023071512152962355_2.jpg/dims/optimize/",
    UserName: "김예지",
    UserEmail: "kimyegy@example.com",
    UserPhone: "010-1234-5678",
    UserPassword: "1234",
  });

  const [passwordInfo, setPasswordInfo] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const [passwordError, setPasswordError] = useState("");
  const [isCurrentPasswordValid, setCurrentPasswordValid] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
    setPasswordError(""); // 입력이 변경될 때마다 비밀번호 오류를 초기화합니다.
    setCurrentPasswordValid(true); // 현재 비밀번호 확인 결과도 초기화합니다.
  };

  const handleCurrentPasswordCheck = () => {
    // 현재 비밀번호 확인 로직
    if (passwordInfo.currentPassword !== userInfo.UserPassword) {
      setCurrentPasswordValid(false);
    } else {
      setCurrentPasswordValid(true);
    }
  };

  const handlePasswordChange = () => {
    if (passwordInfo.newPassword !== passwordInfo.confirmNewPassword) {
      setPasswordError("새로운 비밀번호와 확인 비밀번호가 일치하지 않습니다.");
    } else {
      console.log("비밀번호 변경 로직이 이곳에 들어갑니다");
      // 성공 시에는 오류 메시지 초기화
      setPasswordError("");
    }
  };

  return (
    <div className="myinfo" style={{ height: "550px", display: "flex" }}>
      <div className="infonav">
        <ul
          style={{
            backgroundColor: "#fff",
            borderRadius: "10px",
            marginTop: "45px",
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
      <h1 style={{ marginBottom: "20px" }}>내 정보</h1>
      <div className="infoview" style={{ padding: "10px", margin: "auto" }}>
        <div
          style={{
            backgroundColor: "#fff",
            height: "500px",
            marginTop: "13px",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            className="userinfo"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                style={{ margin: "30px", width: "200px" }}
                src={userInfo.UserImg}
                alt="프로필 이미지"
              />
              <button>이미지 변경</button>
            </div>

            <form style={{ marginTop: "30px" }}>
              <table>
                <tbody>
                  <tr>
                    <td>이름 : </td>
                    <td>
                      <input
                        type="text"
                        name="UserName"
                        value={userInfo.UserName}
                        onChange={handleChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>이메일 : </td>
                    <td>{userInfo.UserEmail}</td>
                  </tr>
                  <tr>
                    <td>연락처 : </td>
                    <td>
                      <input
                        type="text"
                        name="UserPhone"
                        value={userInfo.UserPhone}
                        onChange={handleChange}
                      />
                    </td>
                    <td>
                      <button>변경</button>
                    </td>
                  </tr>
                  <tr>
                    <td>현재 비밀번호: </td>
                    <td style={{ position: "relative" }}>
                      <input
                        type="password"
                        name="currentPassword"
                        value={passwordInfo.currentPassword}
                        onChange={handleChange}
                      />
                      <button
                        onClick={handleCurrentPasswordCheck}
                        style={{ position: "absolute", right: "50px" }}
                      >
                        확인
                      </button>
                      {!isCurrentPasswordValid && (
                        <span style={{ color: "red" }}>
                          현재 비밀번호가 일치하지 않습니다.
                        </span>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>새로운 비밀번호: </td>
                    <td>
                      <input
                        type="password"
                        name="newPassword"
                        value={passwordInfo.newPassword}
                        onChange={handleChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>새로운 비밀번호 확인: </td>
                    <td>
                      <input
                        type="password"
                        name="confirmNewPassword"
                        value={passwordInfo.confirmNewPassword}
                        onChange={handleChange}
                      />{" "}
                      <button
                        onClick={handlePasswordChange}
                        style={{ right: "0px" }}
                      >
                        비밀번호 변경
                      </button>
                    </td>
                  </tr>
                  {/* 비밀번호 오류 메시지 */}
                  <tr>
                    <td colSpan="2" style={{ color: "red" }}>
                      {passwordError}
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
