import React from "react";
import "./AdminHome.css";
import Vendors from "./AdminComponents/Vendors/Vendors";
import {Link } from "react-router-dom";
function AdminVendors({setLoginUser }) {
  return (
    <>
      <div className="adminhome_container">
        <div className="sidebar">
          <h2>Admin Dashboard</h2>
          <Link to="/">
            <div className="sidebar_object">
              <span>Home</span>
            </div>
          </Link>
          <Link to="/Vendors">
            <div className="sidebar_object">
              <span>Vendors</span>
            </div>
          </Link>
          <Link to="/Users">
            <div className="sidebar_object">
              <span>Users</span>
            </div>
          </Link>
          <Link to="/">
            <div
                      onClick={() => {
                        setLoginUser(null);
                        sessionStorage.clear();
                      }}
              className="sidebar_object"
            >
              <span>Logout</span>
            </div>
          </Link>
        </div>
        <div className="admin_content">
          <h1>Vendors</h1>
          <Vendors />
        </div>
      </div>
    </>
  );
}

export default AdminVendors;
