import React, { useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/authContext";

const Login = () => {
  const [inputs, setInputs] = useState({
   
  });
  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);


  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value}));
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handleSubmit");
    try {
      await login(inputs)
      navigate("/")
    }catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className="auth">
      <h1>로그인</h1>
      <form>

      <input
                    required
                    type="text"
                    placeholder="email"
                    name="UserID"
                    onChange={handleChange}
                />
       <input
                    required
                    type="password"
                    placeholder="password"
                    name="PassWord"
                    onChange={handleChange}
                />
        <button onClick={handleSubmit} >Login</button>
        {err && <p>{err}</p>}
                <span>
                    Do you have an account? <Link to="/login">Login</Link>
                </span>
        <div className="links-container">
          <span>
            <Link to="/register">회원가입</Link>
          </span>
          <span>
            <Link to="/forgot-email">이메일 찾기</Link>
          </span>
          <span>
            <Link to="/forgot-password">비밀번호 찾기</Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
