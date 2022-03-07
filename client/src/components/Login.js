import React from "react";
import {useNavigate} from 'react-router-dom';
import { get, post } from "../https/service";

const Login = () => {
  const [username, setUsername] = React.useState("jimmybutler23");
  const [password, setPassword] = React.useState("12345678");
  const navigate = useNavigate();
  const loginUser = (e) => {
    e.preventDefault();
    post("/api/auth/login", {
      username,
      password,
    })
      .then((results) => {
        console.log("You are logged in!!!", results.data);
        localStorage.setItem("token", results.data);

        navigate('/welcome')
    

        // let thing = localStorage.getItem("token");
        // console.log("This was stored in our localStorage", thing);
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

//   const checkToken = () => {
//     let thing = localStorage.getItem("token");
//     console.log("This was stored in our localStorage", thing);
//   };

//   const checkIfLoggedIn = (e) => {
//     e.preventDefault();
//     get("/api/auth/loggedin")
//       .then((results) => {
//         console.log("Are you logged in?", results.data);
//       })
//       .catch((err) => {
//         console.error(err.message);
//       });
//   };

  const logout = () => {
    localStorage.removeItem("token");
    console.log("You have logged out");
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={loginUser}>
        <label>Username</label>
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
        <label>Password</label>
        <input value={password} type="password" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Log in</button>
      </form>
      {/* <button onClick={checkIfLoggedIn}>See if you are logged in</button> */}
      {/* <button onClick={checkToken}>check if token is stored</button> */}
      <button onClick={logout}>Log Out</button>
    </div>
  );
};

export default Login;