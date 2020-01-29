import React, { useState, useEffect } from "react";
import AddFriends from "./AddFriends";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Friends = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("api/friends")
      .then(res => {
        console.log("the response", res);
        setFriends(res.data);
      })
      .catch(err => console.log("Axios call for friends list error", err));
  }, []);

  const deleteFriend = deleted => {
    axiosWithAuth()
      .delete(`/api/friends/${deleted.id}`, deleted)
      .then(res => {
        setFriends(res.data);
        console.log("delete response", res.data);
      })
      .catch(err => console.log("delete error", err.response));
  };

  const updateFriend = updated => {
    axiosWithAuth()
    .put(`/api/friends/${updated.id}`, updated)
    .then(res => {

    })
    .catch(err => console.log("update error", err.response));
  }

  return (
    <div className="friends">
      <h1>Friends</h1>
      <AddFriends />
      {friends.map(friend => (
        <div key={friend.id} friend={friend}>
          <h4>Name: {friend.name}</h4>
          <h4>Age: {friend.age}</h4>
          <h4>Email: {friend.email}</h4>
          {/* <span> */}
          <button className="delete" onClick={() => deleteFriend(friend)}>
            X
          </button>
        </div>
      ))}
    </div>
  );
};

export default Friends;
