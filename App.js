import React from "react";
import axios from "axios";
import "./App.css";
import AdminHome from "./AdminScreens/AdminHome";
import AdminUsers from "./AdminScreens/AdminUsers";
import AdminVendors from "./AdminScreens/AdminVendors";
import Home from "./components/Home/Home";
import VendorHome from "./components/VendorHome/VendorHome";
import NonUserHome from "./components/NonUserHome/NonUserHome";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import Error from "./components/Error";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [user, setLoginUser] = useState(null);
  React.useEffect(() => {
    axios.post("http://localhost:9002/api/user/verify",{"token" : sessionStorage.getItem('token')})
    .then((res) => {
    console.log(res)  
    if (res.data.success === true) {
        setLoginUser(res.data.authData.user);
      }
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {" "}
            {user && user.role === "admin" ? (
              <AdminHome user={user} setLoginUser={setLoginUser} />
            ) : user && user.role === "vendor" ? (
              <VendorHome user={user} setLoginUser={setLoginUser} />
            ) : user && user.role === "user" ? (
              <Home user={user} setLoginUser={setLoginUser} />
            ) : (
              <NonUserHome user={user} setLoginUser={setLoginUser} />
            )}
          </Route>
          <Route exact path="/Users">
            {user && user.role === "admin" ? (
              <AdminUsers user={user} setLoginUser={setLoginUser} />
            ) : (
              <Error/>
            )}
          </Route>
          <Route exact path="/Vendors">
            {user && user.role === "admin" ? (
              <AdminVendors user={user} setLoginUser={setLoginUser} />
            ) : (
              <Error />
            )}
          </Route>
          <Route exact path="/profile">
            {user ? (
              <Profile user={user} setLoginUser={setLoginUser} />
            ) : (
              <Error />
            )}
          </Route>
          <Route path="/signup">
            {user ? <Error /> : <SignUp setLoginUser={setLoginUser} />}
          </Route>
          <Route path="/login">
            {user ? (
              <Home user={user} setLoginUser={setLoginUser} />
            ) : (
              <Login setLoginUser={setLoginUser} />
            )}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
