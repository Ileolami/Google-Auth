import React, { useState } from "react";
import axios from "axios";
import { useGoogleLogin } from "@react-oauth/google";

import { FcGoogle } from "react-icons/fc";
const Login = () => {
  //const [detailsDisplayed, setDetailsDisplayed] = useState(false);
  //const [userData, setUserData] = useState(null);


  const login = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: { Authorization: `Bearer ${response.access_token}` },
          }
        );
        console.log(res.data);
        //setUserData(res.data); // Store response data in state
        //setDetailsDisplayed(true); // Set detailsDisplayed to true after displaying details
        /// Navigate to profile details page
      } catch (err) {
        console.log(err);
      }
    },
  });
 
  return (
    <div className="flex justify-center items-center my-[300px]">
        <button onClick={login} className="flex bg-black rounded-xl">
          <FcGoogle style={{ fontSize: "30px", marginRight: "10px" }} />
          Login with Google
        </button>
      {/* {!detailsDisplayed && (
      )} */}
     
    </div>
  );
};

export default Login;
