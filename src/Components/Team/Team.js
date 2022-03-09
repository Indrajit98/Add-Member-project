import React, { useState } from "react";
import "./Team.css";

const Team = (props) => {
  const { name, email, picture, phone } = props.User;
  const [mobile, setMobile] = useState("");
  const addMember = props.addMember;

  //   console.log(props);
  const showPhone = () => setMobile(phone);
  return (
    <div className="team">
      <img src={picture.large} alt="" />
      <div className="teamDetail">
        <h2>Name:{name.first} </h2>
        <small>Email: {email} </small>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Phone: {mobile}</p>
        <button onClick={showPhone}>add phone number </button>
        <button onClick={() => addMember(name.first)}>add me</button>
      </div>
    </div>
  );
};

export default Team;
