import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = ({ setLoginUser, user }) => {
  return (
    <div className="Home">
      <div className="text"> User Home Page</div>
      <br />
      <div>Welcome {user.name}</div>
      <div
        className="button"
        onClick={() => {
          setLoginUser(null);
          sessionStorage.clear();
        }}
      >
        {" "}
        Logout{" "}
      </div>
      <Link to={`/profile`}>
        {" "}
        <div className="button"> Profile </div>{" "}
      </Link>
    </div>
  );
};

export default Home;
