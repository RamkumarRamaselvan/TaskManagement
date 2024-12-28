import React,{useState,useEffect} from "react";
import Nav from "react-bootstrap/Nav";
import { BiSolidUserCircle } from "react-icons/bi";
import { useNavigate, Link, Outlet } from "react-router-dom";

function TopNavigation(props) {
  const { onLogout } = props;
  const [user,setUser] = useState(localStorage.getItem("username"));
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate("/");
  };
  
  return (
    <section className="navigation">
      <Nav >
        <Nav.Item>
          <Nav.Link as={Link} to="/taskManagement">
            Task Management
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/register">
            Register
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
        </Nav.Item>
        <Nav.Item className="profile_box">
          <Link to="/profile" className="profile_link">
            <BiSolidUserCircle className="profile_icon" />
          </Link>
          <span>
            <div>{user}</div>
            <div>User</div>
          </span>
        </Nav.Item>
      </Nav>
      <div className="wrapper">
        <Outlet />
      </div>
    </section>
  );
}

export default TopNavigation;
