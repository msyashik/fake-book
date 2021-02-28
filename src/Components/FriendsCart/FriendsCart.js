import React from "react";
import "./FriendsCart.css";

const FriendsCart = (props) => {
  const friendsNow = props.friendsNow;
  const totalSalary = friendsNow.reduce(
    (sum, friend) => sum + parseFloat(friend.salary),
    0
  );
  return (
    <div>
      <h2>Listed Friends Info</h2>
      <p>Number of friends added: {friendsNow.length}</p>
      <p>Total salary of the aded friends: {totalSalary.toFixed(2)}</p>
    </div>
  );
};

export default FriendsCart;
