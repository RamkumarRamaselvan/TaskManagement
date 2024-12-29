import React, { useEffect, useState } from 'react';
import Input from "../Component/input.js";
import { registerInput} from "../app/mockData.js";
import { allowNumericOnly } from '../app/helper.js'; 
import { useNavigate } from 'react-router-dom';
const RegisterPage = () => {
  const packageJson = require('../../package.json');
  const proxy = packageJson.proxy;
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    email: '',
    mobile: '',
  });
  const [error, setError] = useState({
    firstName: { error: false, msg: "" },
    lastName: { error: false, msg: "" },
    username: { error: false, msg: "" },
    password: { error: false, msg: "" },
    email: { error: false, msg: "" },
    mobile: { error: false, msg: "" },
  });
  const { username } = JSON.parse(localStorage.getItem("userDetails")) || {};
  const [userData,setUserData] = useState([]);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError((error) => ({
      ...error,
      [name]: { error: false, msg: "" },
    }));
  };
  useEffect(()=>{
    getUserDetails();
  },[]);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validate = () => {
    let valid = true;
    let newErrors = {};

    const setFieldError = (field, msg) => {
      newErrors[field] = { error: true, msg };
    };

    if (formData.firstName.trim() === "") {
      setFieldError("firstName", "Please Enter Your First Name.");
      valid = false;
    }
    if (formData.lastName.trim() === "") {
      setFieldError("lastName", "Please Enter Your Last Name.");
      valid = false;
    }
    if (formData.username.trim() === "") {
      setFieldError("username", "Please Enter Your Username.");
      valid = false;
    }
    if (userData?.some((data) => data.username === formData.username)) {
      setFieldError("username", "Username is already Exist.");
      valid = false;
    }
    if (formData.password.trim() === "") {
      setFieldError("password", "Please Enter Your Password.");
      valid = false;
    }
    if (formData.email.trim() === "") {
      setFieldError("email", "Please Enter Your Email.");
      valid = false;
    } else if (!emailRegex.test(formData.email.trim())) {
      setFieldError("email", "Please Enter Valid Email.");
      valid = false;
    }
    if (formData.mobile.trim() === "") {
      setFieldError("mobile", "Please Enter Your Mobile Number.");
      valid = false;
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      setFieldError("mobile", "Please Enter a valid Mobile Number.");
      valid = false;
    }

    setError((error) => ({ ...error, ...newErrors }));
    return valid;
  };

  const getUserDetails = async () => {
    try {
      const response = await fetch(`http://localhost:${proxy}/users`);

      if (!response.ok) throw new Error("Invalid credentials");
      const data = await response.json();
      localStorage.setItem("registerUser",JSON.stringify(data));
      setUserData(data);

    } catch (error) {
      console.log(error)
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const valid = validate();
    if (valid) {
      try {
        const response = await fetch(`http://localhost:${proxy}/users`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        alert("Registration successful!");
        if (!username) {
          navigate("/");
        }else{
          navigate("/profile");
        }
      } catch (error) {
        alert("An error occurred while registering.");
      }
    }
  };

  return (
    <div className='wrapper'>
      <div className='register_container'>
        <div className='profileCard'>
          <h2>Register</h2>

          <form>
            <div className='row'>
              {registerInput?.map((input) => {
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
                    onKeyPress={(e) => input.type == "tel" && allowNumericOnly(e)}
                    maxLength={input.type == "tel" ? 10 : 50}
                  // disabled={page ? false : isEdit ? false : true}
                  />
                )
              })}
            </div>
            <div className="btn_Cover">
              {!username && (
                <button className='login_btn btn btn-primary'><a href='/'>Back</a></button>
              )}
              <button type="submit" className='login_btn btn btn-primary' onClick={handleSubmit}>
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};



export default RegisterPage;
