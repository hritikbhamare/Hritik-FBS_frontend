import React, { useState } from "react";
import "./SignUp.css";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";

const SignUp = ({setLoginUser}) => {
  const History = useHistory();
  const [user, setUser] = React.useState({
    name: "",
    email: "",
    password: "",
    repassword: "",
    contactNumber:"",
    bool:""
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = () => {
    const { name, email, password, repassword} = user;
    if (name && email && password && repassword) {
      if (email.includes(".com")) {
        if (password === repassword)
          axios
            .post("http://localhost:9002/api/user/signup",user)
            .then((res) => {
              console.log(res.data);
              if (res.data.success === true) {
                setLoginUser(res.data.data)
                History.push("/");
              }
            });
        else {
          alert("Passwords do not match");
        }
      } else {
        alert("Enter Valid Email");
      }
    } else {
      alert("Please enter all details");
    }
  };

  return (
    <div className="signup_body">
      <div className="signup_container">
      <div className="signup_containerBox">
        <div style={{ marginTop: "2rem" }} className="row">
          <div className="col s8 offset-s2">
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Register</b>
              </h4>
              <p className="grey-text text-darken-1">
                Already have an account? <Link to="/login">Login</Link>
              </p>
            </div>

            <div className="input-field col s12">
              <input
                onChange={handleChange}
                value={user.name}
                type="text"
                name="name"
              />
              <label htmlFor="name">Full Name</label>
            </div>

            <div className="input-field col s12">
              <input
                onChange={handleChange}
                value={user.email}
                type="text"
                name="email"
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className="input-field col s12">
              <input
                onChange={handleChange}
                value={user.password}
                type="password"
                name="password"
              />
              <label htmlFor="password">Password</label>
            </div>
            <div className="input-field col s12">
              <input
                onChange={handleChange}
                value={user.repassword}
                type="password"
                name="repassword"
              />
              <label htmlFor="repassword">Re-Enter Password</label>
            </div>
            <div className="input-field col s12">
              <input
                onChange={handleChange}
                value={user.contactNumber}
                type="text"
                name="contactNumber"
              />
              <label htmlFor="contactNumber">Contact Number</label>
            </div>
            <div className="input-field col s12">
              <input
                onChange={handleChange}
                value={user.bool}
                type="text"
                name="bool"
              />
              <label htmlFor="bool">Are you a Vendor Company</label>
            </div>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <button
                style={{
                  width: "150px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginTop: "1rem",
                }}
                onClick={register}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                SignUp
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default SignUp;
