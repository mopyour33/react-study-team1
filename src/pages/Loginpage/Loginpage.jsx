import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useSignupStore from "../../stores/useSignupStore";
import "./Loginpage.style.css";
import { Link } from "react-router-dom";

const Loginpage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setIsLoggedIn, setUserId } = useSignupStore();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    //수정
    setUserId(username);
    //수정
    navigate("/");
  };

  return (
    <div className="login-page d-flex justify-content-start align-items-center min-vh-100 mt-5">
      <div
        className="login-box p-5 rounded shadow-sm bg-white"
        style={{ width: "350px" }}
      >
        <h2 className="text-center mb-4 fw-bold text-dark">LiveNews</h2>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="text"
              placeholder="아이디"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="custom-input"
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="비밀번호"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="custom-input"
            />
          </Form.Group>

          <Button variant="dark" type="submit" className="w-100 mb-3">
            로그인
          </Button>
        </Form>

        <div className="d-flex justify-content-between small">
          <a href="#" className="text-decoration-none text-muted">
            아이디 찾기
          </a>
          <a href="#" className="text-decoration-none text-muted">
            비밀번호 찾기
          </a>
          <Link to="/signup" className="text-decoration-none text-muted">
            회원가입
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
