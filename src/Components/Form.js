import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Form(props) {
  const [usr, setUsr] = useState([]);
  const [email, setEmail] = useState([]);

  const [err, setErr] = useState();

  const [pwd, setPwd] = useState([]);

  const validatemail = (e)=>
  {
      const mailidreg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return mailidreg.test(e);
  }

  const splchar = (e)=>
  {
    const splcharctersexp = /[^a-zA-Z0-9]/;
    return splcharctersexp.test(e);
  }

  const handleChange = (e) => {
    setUsr(e.target.value);
    setEmail(e.target.value);
    setPwd(e.target.value);

    // if(!validatemail(e.target.value))
    // {
    //     setErr("please enter valid email")
    // }
    // else
    // {
    //   setErr([]);
    // }
  };

  // const handleChange2 = (e) => {
  //   setEmail(e.target.value);
  // };

  const handleChange3 = (e) => {
    setPwd(e.target.value);
  };

  const handleChangepwd = (e) => {
    setPwd(e.target.value);
  };

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
        name:usr,
        email:email,
        pass:pwd
    }
    const pwdlength = pwd.length;

    // navigate(`formdetail?usr=${usr}&mail=${email}&pass=${pwd}`,{state:data});
    if(!validatemail(email))
    {
        alert("Email not entered correctly");
    }
    else if(pwdlength < 9)
    {
      alert("enter password atleast 8 characters")
    }
    else if(!splchar(pwd))
    {
      alert("enter atleat one special character");
    }
    
    // if(validatemail(email))
    // {
    //   alert("Submitted successfully")
    // }
   
  };

  // console.log(pwd,email);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} ></input>
        <input type="email" onChange={(e)=>{setEmail(e.target.value)}} ></input>
        <input type="password" onChange={(e)=>{setPwd(e.target.value)}} ></input>

        <input type="submit" />
      </form>
    </div>
  );
}

export default Form;
