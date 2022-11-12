import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import "./SignUp.css";


const SignUp = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const collectData = async () => {
    console.warn(name, email, password);
    let result = await fetch("http://localhost:4200/register",{
      method:"post",
      body: JSON.stringify({name, email, password}),
      headers:{
        "Content-Type":"application/json"
      },
    });
    result = await result.json()
      console.warn(result);
      localStorage.setItem("users",JSON.stringify(result));
      if(result){
        navigate('/');
      };
      
  };

  return (
    <div className="registration">
      <h1>Registration</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Full name"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <input onClick={collectData} type="submit" value="Submit" />
    </div>
  );
};

export default SignUp;
