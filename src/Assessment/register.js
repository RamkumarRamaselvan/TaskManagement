import React, { useEffect, useState } from 'react';
import Input from "../Component/input";
import { registerInput } from "./container.js";
import { useLocation } from 'react-router-dom';
const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    email: '',
    mobile: '',
  });
  const [error, setError] = useState({
    firstName: {error:false,msg:""},
    lastName: {error:false,msg:""},
    username: {error:false,msg:""},
    password: {error:false,msg:""},
    email: {error:false,msg:""},
    mobile: {error:false,msg:""},
  });
  const location = useLocation();
  const [page, setPage] = useState(true);
  const [isEdit, setEdit] = useState(false);
  const [getUserData, setUserData] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3001/users${getUserData ? `/${getUserData.id}` : ''}`, {
        method: getUserData ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      alert("Registration successful!");
    } catch (error) {
      console.error("Error registering user:", error);
      alert("An error occurred while registering.");
    }
  };
  const getUserDetails = async () => {
    const username = localStorage.getItem("username");
    try {
      const response = await fetch(`http://localhost:3001/users?username=${username}`);

      if (!response.ok) throw new Error("Invalid credentials");
      const data = await response.json();
      setUserData(data[0]);

    } catch (error) {
      console.log(error)
    }
  };
  useEffect(() => {
    if (location.pathname == "/register") {
      setPage(true);
    } else {
      setPage(false);
      getUserDetails();
      console.log(formData);
    }
  }, [location.pathname]);
  useEffect(() => {
    console.log(getUserData);
    const {
      firstName,
      lastName,
      username,
      password,
      email,
      mobile
    } = getUserData;
    setFormData({
      ...formData,
      firstName,
      lastName,
      username,
      password,
      email,
      mobile
    });
  }, [getUserData]);
  return (
    <div className='register_container'>
      <div className='profileCard'>
        <h2>{page ? "Register" : "Profile"}</h2>
        {!page && (
          <button className='edit_btn' onClick={() => setEdit(true)}>
            Edit
          </button>
        )}
        <form>
          <div className='row'>
            {registerInput.map((input) => {
              return (
                <Input
                  type={input.type}
                  name={input.name}
                  label={input.lable}
                  value={formData[input.name]}
                  onChange={handleChange}
                  placeholder={"Enter your " + input.lable}
                  coverClassName="col-md-6"
                  error={error[input.name].error}
                  errorMessage={error[input.name].msg}
                  disabled={page ? false : isEdit ? false : true}
                />
              )
            })}
          </div>
          <div className="btn_Cover">
            <button type="submit" className='login_btn' onClick={handleSubmit}>
              {page ? "Register" : "Update"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};



export default RegisterPage;
