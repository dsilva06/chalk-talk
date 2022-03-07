import React, { useEffect } from "react";
import {get} from '../../https/service' 
const Welcome = () => {
  useEffect(() => {
    get("/api/auth/loggedin")
      .then((results) => {
        console.log("You are logged in!!!", results.data);
        // let thing = localStorage.getItem("token");
        // console.log("This was stored in our localStorage", thing);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, []);
  return (
    <div>
      <h1>Welcome</h1>
    </div>
  );
};

export default Welcome;
