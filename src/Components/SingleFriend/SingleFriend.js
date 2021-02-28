import React from "react";
import "./SingleFriend.css";

const SingleFriend = (props) => {
  const addThisFriend = props.addThisFriend;
  const {
    name,
    email,
    salary,
    address,
    image,
    phone_number,
  } = props.friendInfo;
  //console.log(name, email, salary, address, phone_number, image);
  return (
    <div className="allInfo">
      <img src={image} alt="" />
      <div className="detailInfo">
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Address: {address}</p>
        <p>Phone Number: {phone_number}</p>
        <p>Salary: {salary}</p>
        <button
          onClick={() => addThisFriend(props.friendInfo)}
          className="addFriend"
        >
          Add Friend
        </button>
      </div>
    </div>
  );
};

export default SingleFriend;
