import React from "react";
import {Link} from "react-router-dom"

function Error({user,setLoginUser}) {
  return <h1>Looks like you are lost. Head back to <Link to="/"> Home </Link> or Login <Link to="/login">here</Link> </h1>
}

export default Error;
