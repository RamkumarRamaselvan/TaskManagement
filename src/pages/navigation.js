
import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { TbLogout } from 'react-icons/tb';
import user from "../image/user.png";

function TopNavigation(props) {
  const { onLogout } = props;
  const { username, email } = JSON.parse(localStorage.getItem('userDetails')) || {};
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Item>
              <Nav.Link as={Link} to="/taskManagement">Task Management</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/register">Register</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>

        <div className="d-flex align-items-center profile_box">
          <span className="d-none d-lg-block">
            <div>{username}</div>
            <div>{email}</div>
          </span>
          <Link to="/profile" className="profile_link" title="Profile">
            <img
              src={user}
              alt="Profile"
              className="profile_image"
            />
            <TbLogout className="logout_icon" onClick={handleLogout} title="Logout" />
          </Link>
        </div>
      </Container>
    </Navbar>
  );
}

export default TopNavigation;

