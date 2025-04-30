import React from "react";
import { Navbar, Container, Form, FormControl, Button } from "react-bootstrap";
import { Link, Outlet, useNavigate } from "react-router-dom";
import useSignupStore from "../stores/useSignupStore";
import "./Applayout.style.css";

const Applayout = () => {
  const { isLoggedIn, setIsLoggedIn } = useSignupStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <div>
      <Navbar expand="lg" fixed="top" className="shadow-sm px-3 bg-white">
        <Container
          fluid
          className="d-flex justify-content-end align-items-center"
        >
          <Form
            className="d-flex ms-auto align-items-center"
            style={{ maxWidth: "600px", gap: "0.5rem", whiteSpace: "nowrap" }}
          >
            <FormControl
              type="search"
              placeholder="Search news..."
              className="me-2 custom-input"
              aria-label="Search"
            />
            <Button variant="outline-dark" className="me-3">
              Search
            </Button>

            {/* 로그인 여부에 따라 링크 다르게 보이기 */}
            {isLoggedIn ? (
              <>
                <Link
                  to="/mypage"
                  className="text-dark text-decoration-none me-3"
                >
                  마이페이지
                </Link>
                <span
                  onClick={handleLogout}
                  className="text-dark text-decoration-none"
                  style={{
                    cursor: "pointer",
                    marginRight: "0.5rem",
                  }}
                >
                  로그아웃
                </span>
              </>
            ) : (
              <Link
                to="/login"
                className="align-self-center text-dark text-decoration-none"
                style={{ whiteSpace: "nowrap", marginLeft: "8px" }}
              >
                로그인
              </Link>
            )}
          </Form>
        </Container>
      </Navbar>

      <Outlet />
    </div>
  );
};

export default Applayout;
