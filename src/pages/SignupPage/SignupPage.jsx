import React, { useState } from "react";
import {
  Button,
  Form,
  InputGroup,
  FormControl,
  ToggleButtonGroup,
  ToggleButton,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./SignupPage.style.css";
import useUserInfo from "../../stores/useUserInfo";

const SignupPage = () => {
  const { addUserInfo } = useUserInfo();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    name: "",
    birthDate: "",
    carrier: "",
    gender: "male",
    nationality: "local",
    phone: "",
    address: "",
    detailAddress: "",
    zipcode: "",
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

  const carrierMap = {
    SKT: "1",
    KT: "2",
    "LGU+": "3",
    "SKT 알뜰폰": "4",
    "KT 알뜰폰": "5",
    "LGU+ 알뜰폰": "6",
  };

  const handleFormSubmit = (e) => {
    console.log("폼 제출 시작!");
    e.preventDefault();

    const newUser = {
      id: formData.username,
      cusInfo: {
        password: formData.password,
        email: formData.email,
        name: formData.name,
        birth: formData.birthDate,
        city: formData.address,
        zipCode: formData.zipcode || "",
        addressDetail: formData.detailAddress,
        phoneNumber: formData.phone,
        mobileCompany: carrierMap[formData.carrier] || "0",
        sex: formData.gender === "male" ? "1" : "2",
        nationality: formData.nationality === "local" ? "1" : "2",
        categoryILike: [],
        myFavoriteNews: [],
      },
    };
    console.log("회원가입 버튼 클릭됨!");
    addUserInfo(newUser);
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
            <ToggleButton
              id="gender-male"
              value="male"
              className="toggle-button"
            >
              남자
            </ToggleButton>
            <ToggleButton
              id="gender-female"
              value="female"
              className="toggle-button"
            >
              여자
            </ToggleButton>
          </ToggleButtonGroup>

          <ToggleButtonGroup
            type="radio"
            name="nationality"
            value={formData.nationality}
            onChange={(val) => setFormData({ ...formData, nationality: val })}
          >
            <ToggleButton
              id="nationality-local"
              value="local"
              className="toggle-button"
            >
              내국인
            </ToggleButton>
            <ToggleButton
              id="nationality-foreigner"
              value="foreigner"
              className="toggle-button"
            >
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
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text>
            <i className="bi bi-geo-alt" />
          </InputGroup.Text>
          <FormControl
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            placeholder="주소 (카카오 API 연동)"
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text>
            <i className="bi bi-map" />
          </InputGroup.Text>
          <FormControl
            name="detailAddress"
            value={formData.detailAddress}
            onChange={handleInputChange}
            placeholder="상세 주소"
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text>
            <i className="bi bi-mailbox" />
          </InputGroup.Text>
          <FormControl
            name="zipcode"
            value={formData.zipcode}
            onChange={handleInputChange}
            placeholder="우편번호"
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
        />

        <Button variant="dark" type="submit" className="w-100">
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
