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
    // 회원가입 로직 처리 후 메인 페이지로 이동
    navigate("/");
  };

  return (
    <div className="signup-container">
      <h2 className="text-center mb-4">회원가입</h2>
      <Form onSubmit={handleFormSubmit}>
        {/* 아이디 입력 */}
        <InputGroup className="mb-3">
          <InputGroup.Text>아이디</InputGroup.Text>
          <FormControl
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            placeholder="아이디를 입력하세요"
            required
          />
        </InputGroup>

        {/* 비밀번호 입력 */}
        <InputGroup className="mb-3">
          <InputGroup.Text>비밀번호</InputGroup.Text>
          <FormControl
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="비밀번호를 입력하세요"
            required
          />
        </InputGroup>

        {/* 이메일 입력 (선택) */}
        <InputGroup className="mb-3">
          <InputGroup.Text>이메일</InputGroup.Text>
          <FormControl
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="이메일을 입력하세요"
          />
        </InputGroup>

        {/* 이름 입력 */}
        <InputGroup className="mb-3">
          <InputGroup.Text>이름</InputGroup.Text>
          <FormControl
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="이름을 입력하세요"
            required
          />
        </InputGroup>

        {/* 생년월일 입력 */}
        <InputGroup className="mb-3">
          <InputGroup.Text>생년월일</InputGroup.Text>
          <FormControl
            type="text"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleInputChange}
            placeholder="YYYYMMDD"
            required
          />
        </InputGroup>

        {/* 휴대전화번호 입력 */}
        <InputGroup className="mb-3">
          <InputGroup.Text>휴대전화</InputGroup.Text>
          <FormControl
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="휴대전화번호"
            required
          />
        </InputGroup>

        {/* 통신사 선택 */}
        <Dropdown className="mb-3">
          <Dropdown.Toggle variant="light" id="dropdown-basic">
            통신사 선택
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item
              onClick={() => setFormData({ ...formData, carrier: "SKT" })}
            >
              SKT
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => setFormData({ ...formData, carrier: "KT" })}
            >
              KT
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => setFormData({ ...formData, carrier: "LGU+" })}
            >
              LGU+
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        {/* 주소 입력 */}
        <InputGroup className="mb-3">
          <FormControl
            placeholder="주소"
            name="address"
            value={formData.address}
            readOnly
            required
          />
          <Button
            variant="outline-secondary"
            onClick={() => {
              new window.daum.Postcode({
                oncomplete: function (data) {
                  setFormData((prev) => ({
                    ...prev,
                    address: data.address,
                  }));
                },
              }).open();
            }}
          >
            주소 검색
          </Button>
        </InputGroup>

        {/* 상세주소 입력란 */}
        <InputGroup className="mb-3">
          <FormControl
            name="detailAddress"
            value={formData.detailAddress || ""}
            placeholder="상세주소를 입력하세요"
            onChange={(e) =>
              setFormData({ ...formData, detailAddress: e.target.value })
            }
            required
          />
        </InputGroup>

        {/* 성별 선택 */}
        <ToggleButtonGroup
          type="radio"
          name="gender"
          value={formData.gender}
          onChange={(val) => setFormData({ ...formData, gender: val })}
          className="mb-3"
        >
          <ToggleButton value="male" className="toggle-button">
            남자
          </ToggleButton>
          <ToggleButton value="female" className="toggle-button">
            여자
          </ToggleButton>
        </ToggleButtonGroup>

        {/* 국적 선택 */}
        <ToggleButtonGroup
          type="radio"
          name="nationality"
          value={formData.nationality}
          onChange={(val) => setFormData({ ...formData, nationality: val })}
          className="mb-3"
        >
          <ToggleButton value="local" className="toggle-button">
            내국인
          </ToggleButton>
          <ToggleButton value="foreigner" className="toggle-button">
            외국인
          </ToggleButton>
        </ToggleButtonGroup>

        {/* 약관 동의 체크박스 */}
        <Form.Check
          type="checkbox"
          name="agreeTerms"
          label="전체 동의"
          checked={formData.agreeTerms}
          onChange={(e) =>
            setFormData({ ...formData, agreeTerms: e.target.checked })
          }
          className="mb-3"
          required
        />

        {/* 회원가입 버튼 */}
        <Button variant="primary" type="submit" className="w-100">
          회원가입
        </Button>
      </Form>

      {/* 로그인 페이지로 이동 링크 */}
      <div className="text-center mt-3">
        <Link to="/login" className="text-muted">
          로그인 화면으로
        </Link>
      </div>
    </div>
  );
};

export default SignupPage;
