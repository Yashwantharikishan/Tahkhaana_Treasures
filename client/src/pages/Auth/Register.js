import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "../../styles/AuthStyles.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();
  //form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/register", {
        name,
        email,
        password,
        phone,
        address,
        answer,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
     
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };
  //Validate Email
  const validateEmail = (e) => {
    const emailRegex = /^.+@.+\..+$/;
    if (!emailRegex.test(e.target.value)) {
      alert("Please Enter a valid Email Id.");
    }
  };

  //validate Numbers
  const validateNumber = (e) => {
    if (e.target.value.length < 10) {
      alert("Phone Number Should be Of Length 10..");
    }
  };

  //validate Password
  const validatePassword = (e) => {
    if (e.target.value.length < 8) {
      alert("Password Should be Of Length 8..");
    }
  };
  //handleNumberInput
  const handleNumberInput = (e) => {
    if (e.target.value.length === 10 && !(e.which == 8 || e.which == 46)) {
      e.preventDefault();
    }
  };

  return (
    <Layout title={"Register -Tahkhaana"}>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h4 className="title">Register Here!</h4>
          <div className="mb-3">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              placeholder="Enter Your Name "
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              value={email}
              onBlur={validateEmail}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Email "
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={password}
              onBlur={validatePassword}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Password "
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="number"
              value={phone}
              onKeyDown={handleNumberInput}
              onBlur={validateNumber}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control"
              placeholder="Enter Your Phone "
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="form-control"
              placeholder="Enter Your Address "
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="form-control"
              placeholder="What is Your Secret"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
