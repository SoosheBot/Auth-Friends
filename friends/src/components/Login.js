import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import styles from 'styled-components';

const StyledLogin = styles.div`
.login-form {
  display:flex;
  flex-direction: column;
  align-items:center;
  justify-content:center;
};

.username {
  margin-right:20px;
  padding:15px;
  border:1px solid
  0 0 1px rgba(0, 0, 0, 0.3), 
  0 3px 7px rgba(0, 0, 0, 0.3), 
  inset 0 1px rgba(255,255,255,1),
  inset 0 -3px 2px rgba(0,0,0,0.25);
  border-radius: 2px;
  background: linear-gradient(#eeefef, #ffffff 10%);
}

.password {
  margin-right:20px;
  padding:15px;
  border:1px solid
  0 0 1px rgba(0, 0, 0, 0.3), 
  0 3px 7px rgba(0, 0, 0, 0.3), 
  inset 0 1px rgba(255,255,255,1),
  inset 0 -3px 2px rgba(0,0,0,0.25);
  border-radius: 2px;
  background: linear-gradient(#eeefef, #ffffff 10%);
}

button {
  background-color:chartreuse;
  padding:15px;
  border-radius:5px;
  font-weight:bold;
}

`;

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
    <StyledLogin>
    <div className="login-form">
      <form data-testid="login-form" onSubmit={handleSubmit}>
        <input
          type="text" className='username'
          placeholder="Enter login name..."
          name="username"
          value={credentials.username}
          onChange={handleChange}
        />
        <input
          type="text" className='password'
          placeholder="Enter password..."
          name="password"
          value={credentials.password}
          onChange={handleChange}
        />
        <button className='login-button' type="submit">Login</button>
      </form>
    </div>
    </StyledLogin>
  );
};

export default Login;
