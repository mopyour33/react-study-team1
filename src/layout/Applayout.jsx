import React, { useState, useEffect } from "react";
import { Navbar, Container, Button, Nav } from "react-bootstrap";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import useSignupStore from "../stores/useSignupStore";
import "./Applayout.style.css";
import logoImage from "../assets/news_logo.png";

const Applayout = () => {
  const { isLoggedIn, setIsLoggedIn, userId } = useSignupStore();
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);

  const location = useLocation();
  const isMypage = location.pathname === "/mypage";

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <div>
      <div className="nav-wrap">
        <Navbar
          expand="lg"
          className="px-3 bg-white custom-navbar"
          expanded={expanded}
          onToggle={() => setExpanded(!expanded)}
        >
          <Container fluid>
            <Navbar.Brand as={Link} to="/" className="me-auto">
              <img
                src={logoImage}
                alt="Logo"
                height="40"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="main-navbar-nav" />
            <Navbar.Collapse id="main-navbar-nav">
              <Nav className="ms-auto align-items-lg-center">
                {isLoggedIn ? (
                  <>
                    <Nav.Link
                      as="span"
                      onClick={() => {
                        navigate("/news");
                        setExpanded(false);
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      리스트
                    </Nav.Link>

                    <Nav.Link
                      as="span"
                      onClick={() => {
                        navigate("/mypage", { state: { userId } });
                        setExpanded(false);
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      마이페이지
                    </Nav.Link>

                    {isMypage && isMobile && (
                      <>
                        <Nav.Link
                          as="span"
                          onClick={() => {
                            window.dispatchEvent(
                              new CustomEvent("changeMypageMenu", {
                                detail: "favorites",
                              })
                            );
                            setExpanded(false);
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          내가 찜한 뉴스
                        </Nav.Link>
                        <Nav.Link
                          as="span"
                          onClick={() => {
                            window.dispatchEvent(
                              new CustomEvent("changeMypageMenu", {
                                detail: "interest",
                              })
                            );
                            setExpanded(false);
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          내 카테고리 뉴스
                        </Nav.Link>
                        <Nav.Link
                          as="span"
                          onClick={() => {
                            window.dispatchEvent(
                              new CustomEvent("changeMypageMenu", {
                                detail: "profile",
                              })
                            );
                            setExpanded(false);
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          정보 변경
                        </Nav.Link>
                      </>
                    )}

                    <Nav.Link
                      as="span"
                      onClick={() => {
                        handleLogout();
                        setExpanded(false);
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      로그아웃
                    </Nav.Link>
                  </>
                ) : (
                  <Nav.Link
                    as={Link}
                    to="/login"
                    onClick={() => setExpanded(false)}
                  >
                    로그인
                  </Nav.Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <div className="main-logo-container">
          <Link to="/" className="main-logo-text">
            Live News
          </Link>
        </div>
      </div>

      <div className="page-content"></div>
      <Outlet />
    </div>
  );
};

export default Applayout;
