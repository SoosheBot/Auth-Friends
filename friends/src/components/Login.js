import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Login = props => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const handleChange = e => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // if (credentials.username && credentials.password === "") {
    //   // create a message state to pull into here
    // } else {
    //   //error
    // }
    axiosWithAuth()
      .post("api/login", credentials)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/protected");
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="login-form">
      <form data-testid="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter login name..."
          name="username"
          value={credentials.username}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter password..."
          name="password"
          value={credentials.password}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
