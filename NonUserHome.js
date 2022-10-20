import React from "react";
import "./NonUserHome.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home">
      <div className="text">Home Page</div>
      <br />
      <div>Welcome User</div>
      <Link to={`/login`}>
        {" "}
        <div className="button"> Login </div>{" "}
      </Link>
      <Link to={`/signup`}>
        {" "}
        <div className="button"> Signup </div>{" "}
      </Link>
    </div>
  );
};
export default Home;
