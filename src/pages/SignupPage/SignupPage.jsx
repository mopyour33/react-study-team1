import React, { useState } from "react";
import {
  Button,
  Form,
  InputGroup,
  FormControl,
  ToggleButtonGroup,
  ToggleButton,
  Dropdown,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./SignupPage.style.css";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    name: "",
    birthDate: "",
    carrier: "",
    gender: "",
    nationality: "",
    phone: "",
    address: "",
    detailAddress: "",
    agreeTerms: false,
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="signup-container">
      <h2 className="text-center mb-4">회원가입</h2>
      <Form onSubmit={handleFormSubmit}>
        <InputGroup className="mb-3 email-input-group">
          <InputGroup.Text>
            <i className="bi bi-person" />
          </InputGroup.Text>
          <FormControl
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            placeholder="아이디"
            required
          />
          <InputGroup.Text className="github-text">@github.com</InputGroup.Text>
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text>
            <i className="bi bi-lock" />
          </InputGroup.Text>
          <FormControl
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="비밀번호"
            required
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text>
            <i className="bi bi-envelope" />
          </InputGroup.Text>
          <FormControl
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="[선택] 이메일주소 (비밀번호 찾기 등 본인 확인용)"
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text>
            <i className="bi bi-person-fill" />
          </InputGroup.Text>
          <FormControl
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="이름"
            required
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text>
            <i className="bi bi-calendar" />
          </InputGroup.Text>
          <FormControl
            name="birthDate"
            value={formData.birthDate}
            onChange={handleInputChange}
            placeholder="생년월일 8자리"
            required
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text>
            <i className="bi bi-broadcast" />
          </InputGroup.Text>
          <Form.Select
            value={formData.carrier}
            onChange={(e) =>
              setFormData({ ...formData, carrier: e.target.value })
            }
            className="custom-select"
            required
          >
            <option value="">통신사 선택</option>
            {[
              "SKT",
              "KT",
              "LGU+",
              "SKT 알뜰폰",
              "KT 알뜰폰",
              "LGU+ 알뜰폰",
            ].map((carrier) => (
              <option key={carrier} value={carrier}>
                {carrier}
              </option>
            ))}
          </Form.Select>
        </InputGroup>

        <div className="d-flex justify-content-between mb-3">
          <ToggleButtonGroup
            type="radio"
            name="gender"
            value={formData.gender}
            onChange={(val) => setFormData({ ...formData, gender: val })}
          >
            <ToggleButton value="male" className="toggle-button">
              남자
            </ToggleButton>
            <ToggleButton value="female" className="toggle-button">
              여자
            </ToggleButton>
          </ToggleButtonGroup>

          <ToggleButtonGroup
            type="radio"
            name="nationality"
            value={formData.nationality}
            onChange={(val) => setFormData({ ...formData, nationality: val })}
          >
            <ToggleButton value="local" className="toggle-button">
              내국인
            </ToggleButton>
            <ToggleButton value="foreigner" className="toggle-button">
              외국인
            </ToggleButton>
          </ToggleButtonGroup>
        </div>

        <InputGroup className="mb-3">
          <InputGroup.Text>
            <i className="bi bi-phone" />
          </InputGroup.Text>
          <FormControl
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="휴대전화번호"
            required
          />
        </InputGroup>

        <Form.Check
          type="checkbox"
          name="agreeTerms"
          label={
            <span>
              <span className="text-danger">[필수]</span> 인증 약관 전체동의
            </span>
          }
          checked={formData.agreeTerms}
          onChange={(e) =>
            setFormData({ ...formData, agreeTerms: e.target.checked })
          }
          className="mb-3"
          required
        />

        <Button variant="success" type="submit" className="w-100">
          회원가입
        </Button>

        <div className="text-center mt-3">
          <Link to="/login" className="text-muted">
            로그인 화면으로
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default SignupPage;
