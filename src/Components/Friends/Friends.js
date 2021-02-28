import React, { useState } from "react";
import FriendsCart from "../FriendsCart/FriendsCart";
import SingleFriend from "../SingleFriend/SingleFriend";
import "./Friends.css";

const Friends = (props) => {
  const allFriends = props.fakeData;
  const [friendsNow, setFriendsNow] = useState([]);

  const addThisFriend = (props) => {
    const currentFriends = [...friendsNow, props];
    setFriendsNow(currentFriends);
  };

  return (
    <div className="friendsTotalInfo">
      <div className="friendsInfoShow">
        {allFriends.map((friend) => (
          <SingleFriend
            friendInfo={friend}
            key={friend.email}
            addThisFriend={addThisFriend}
          ></SingleFriend>
        ))}
      </div>
      <div className="friendsAdded">
        <FriendsCart friendsNow={friendsNow}></FriendsCart>
      </div>
    </div>
  );
};

export default Friends;
