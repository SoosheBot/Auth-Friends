import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";


const AddFriends = props => {
  const [info, setInfo] = useState({ name: "", age: "", email: "" });

  const handleChange = e => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    // e.preventDefault();
    axiosWithAuth()
      .post("api/friends", info)
      .then(res => {
        setInfo({
          ...info,
          name: "",
          age: "",
          email: ""
        });
      })
      .catch(err => console.log("submit error", err.response));
  };

  return (
    <div>
      <form
        className="friend-form"
        data-testid="friend-form"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="name"
          value={info.name}
          placeholder="Add friend's name..."
          onChange={handleChange}
        />
        <input
          type="text"
          name="age"
          value={info.age}
          placeholder="Add friend's age"
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          value={info.email}
          placeholder="Add friend's email..."
          onChange={handleChange}
        />
        <button type="submit">Add New Friend</button>
        
      </form>
    </div>
  );
};

export default AddFriends;
