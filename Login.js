import React from "react";
import "./Login.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = ({ setLoginUser }) => {
  const History = useHistory();
  console.log();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = () => {
    const { email, password } = user;
    if (email && password) {
      axios.post("http://localhost:9002/api/user/login", user).then((res) => {
        if (res.data.success === true) {
          setLoginUser(res.data.user);
          sessionStorage.setItem("token",res.data.token);
          History.push("/");
        }
        if (res.data.success === false) {
          alert(res.data.message);
        }
      });
    } else {
      alert("Error: Email and/or password field is empty!");
    }
  };

  return (
    <div className="login_body">
      <div className="login_container">
      <div className="login_containerBox">
        <div style={{ marginTop: "3rem" }} className="row">
          <div className="col s8 offset-s2">
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Login</b>
              </h4>
              <p className="grey-text text-darken-1">
                Don't have an account? <Link to="/signup">Sign-Up</Link>
              </p>
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
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <button
                style={{
                  width: "150px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginTop: "1rem",
                }}
                onClick={login}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Login;
