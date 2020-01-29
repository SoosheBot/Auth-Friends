import React, { useState, useEffect } from "react";
import AddFriends from "./AddFriends";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import styled from 'styled-components';

const StyledFriends = styled.div`
width:95%;
display:flex;
flex-direction:row;
flex-wrap:wrap;
justify-content:space-around;
align-items:center;
margin:10px;

.friends {
  flex-wrap:nowrap;
  display:flex;
  flex-direction:column;
  align-items: center;
  justify-content: space-around;
};

button {
  background-color: darkred;
  color:white;
  font-weight: bold;
  padding:5px;
  border-radius:5px;
 };
 
 `;

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

  // const updateFriend = updated => {
  //   axiosWithAuth()
  //   .put(`/api/friends/${updated.id}`, updated)
  //   .then(res => {

  //   })
  //   .catch(err => console.log("update error", err.response));
  // }

  return (
    
    <div className="friends">
      <AddFriends />
      <StyledFriends>
      {friends.map(friend => (
        <div key={friend.id} friend={friend}>
          <h4>Name: {friend.name}</h4>
          <h4>Age: {friend.age}</h4>
          <h4>Email: {friend.email}</h4>
          {/* <span> */}
          <button className='delete-button' onClick={() => deleteFriend(friend)}>
            X
          </button>
        </div>
      ))}
    
    </StyledFriends>
    </div>
  );
};

export default Friends;
