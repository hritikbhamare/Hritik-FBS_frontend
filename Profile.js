import React from "react";
import axios from "axios";
import "./Profile.css";
import { useHistory } from "react-router-dom";

function Profile({ user, setLoginUser }) {
  const history = useHistory();
  const callEdit = () => {
    let collection = {
      "email":givenEmail, 
      "oldPassword":givenPassword,
      "newPassword":password, 
      "name": name,
      "contactNumber": contact,
    };
    console.log(collection)
    axios
      .post("http://localhost:9002/api/user/editUser", collection)
      .then((res) => {
        console.log(res);
        if (res.data.success === true) {
          sessionStorage.clear();
          axios
            .post("http://localhost:9002/api/user/login", {"email":givenEmail,"password":password})
            .then((res) => {
              if (res.data.success === true) {
                setLoginUser(res.data.user);
                sessionStorage.setItem("token",res.data.token);
                history.push("/");
              }
            })
          alert(res.data.message);
        }
      });
  };

  const [name, setName] = React.useState(user.name);
  const [givenEmail, setGivenEmail] = React.useState("");
  const [givenPassword, setGivenPassword] = React.useState("");
  const [contact, setContact] = React.useState(user.contactNumber);
  const [password, setPassword] = React.useState("");

  return (
    <div className="ProfileContainer">
      <div style={{ marginTop: "3rem" }} className="ProfileBox row">
        <div className="col s12" style={{ paddingLeft: "11.250px" }}>
          <h4>
            <b>User Details</b>
          </h4>
        </div>

        <img
          className="Profile_picture"
          src={user.profilePicture}
          alt="profile-img"
        />
        <div className="Profile_textBox">
        <div className="input-field col s12">
            <input
              onChange={(e) => setGivenEmail(e.target.value)}
              value={givenEmail}
              type="text"
              name="name"
            />
            <label htmlFor="name">Your Email</label>
          </div>
          <div className="input-field col s12">
            <input
              onChange={(e) => setGivenPassword(e.target.value)}
              value={givenPassword}
              type="text"
              name="name"
            />
            <label htmlFor="name">Old Password</label>
          </div>
          <div className="input-field col s12">
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              name="password"
            />
            <label htmlFor="password">New Password</label>
          </div>
          <div className="input-field col s12">
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              name="name"
            />
            <label htmlFor="name">Name</label>
          </div>

          <div className="input-field col s12">
            <input
              onChange={(e) => setContact(e.target.value)}
              value={contact}
              type="text"
              name="contact"
            />
            <label htmlFor="contact">Contact No.</label>
          </div>
        </div>
      </div>

      <div className="col s12" style={{ paddingLeft: "11.250px" }}>
        <button
          style={{
            width: "150px",
            borderRadius: "3px",
            letterSpacing: "1.5px",
            marginTop: "1rem",
          }}
          className="btn btn-large waves-effect waves-light hoverable blue accent-3"
          onClick={() => {
            callEdit();
          }}
        >
          Update
        </button>
      </div>

      <div className="col s12" style={{ paddingLeft: "11.250px" }}>
        <button
          style={{
            width: "150px",
            borderRadius: "3px",
            letterSpacing: "1.5px",
            marginTop: "1rem",
          }}
          onClick={() => {
            setLoginUser(null);
            sessionStorage.clear();
            history.push('/');
          }}
          className="btn btn-large waves-effect waves-light hoverable blue accent-3"
        >
          Logout
        </button>
      </div>
      <div className="col s12" style={{ paddingLeft: "11.250px" }}>
        <button
          style={{
            width: "150px",
            borderRadius: "3px",
            letterSpacing: "1.5px",
            marginTop: "1rem",
          }}
          onClick={() => {
            history.push("/");
          }}
          className="btn btn-large waves-effect waves-light hoverable blue accent-3"
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default Profile;
