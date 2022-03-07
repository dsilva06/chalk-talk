import React from 'react'
import { get, post } from "../https/service";

const Signup = () => {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [name, setName] = React.useState("");

    const createUser = (e) => {
        e.preventDefault();
        post("/api/auth/signup", {
          username,
          password,
          email,
          name,
        })
          .then((results) => {
            console.log("created user", results.data);
    
            localStorage.setItem("token", results.data);
    
            // let thing = localStorage.getItem("token");
            // console.log("This was stored in our localStorage", thing);
          })
          .catch((err) => {
            console.error(err.message);
          });
      };
      const logout = () => {
        localStorage.removeItem("token");
        console.log("You have logged out");
      };
    
      return (
        <div>
          <h2>Sign Up</h2>
          <form onSubmit={createUser}>
            <label>Username</label>
            <input value={username} onChange={(e) => setUsername(e.target.value)} />
           <label>Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} />
             <label>Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <label>Password</label>
            <input value={password} type="password" onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Sign Up</button>
          </form>
          {/* <button onClick={checkIfLoggedIn}>See if you are logged in</button> */}
          {/* <button onClick={checkToken}>check if token is stored</button> */}
          <button onClick={logout}>Log Out</button>
        </div>
      );
}

export default Signup
