import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  Stack,
  TextField, 
  Typography,
  Grid2 as Grid,
  Alert,
} from "@mui/material";

import WavingHandIcon from "@mui/icons-material/WavingHand";
import CopyrightIcon from "@mui/icons-material/Copyright";

import loginimg from '../assets/login_img.png'
import { Link, useNavigate } from "react-router-dom";

function Form(props) {

  const navigate = useNavigate();
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

  const handleSignup = () => {
    navigate("/signup");
  };

  // const navigate = useNavigate();

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

  return (
    <Stack
    sx={{
      width: "100%",
    }}
  >
    <Container maxWidth="xl">
      <Grid container columnSpacing={2} p={3} mt={2}>
        <Grid size={{ lg: 5.5, xs: 12 }}>
          <Box sx={{ display: "flex", alignContent: "center" }}>
            <img
              src={loginimg}
              width="100%"
              style={{
                border: "0px solid grey",
                borderRadius: "10px",
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              }}
            />
          </Box>
        </Grid>

        <Grid size={{ lg: 6.5, xs: 12 }} sx={{ textAlign: "left" }}>
          <Grid>
            <Box
              sx={{
                display: "grid",
                rowGap: "20px",
                justifyContent: "center",
                alignContent: "flex-end",
                width: "100%",
                mt: 5,
              }}
            >
              <Typography variant="h4" sx={{ fontWeight: "bold" }} fontSize={{xs:"30px"}}>
                Welcome Back{" "}
                <WavingHandIcon sx={{ color: "#ffde6f", fontSize: {xs:"30px",lg:"35px",md:"35px"} }} />
              </Typography>

              <Box>
                <Typography fontSize={{xs:"15px"}} mb={2}>
                  Today is a new day. It's your day. Your shape it.
                </Typography>
                <Typography fontWeight={"bold"}>
                  Login to start managing your projects.
                </Typography>
              </Box>

              <form
                style={{ display: "grid", rowGap: "20px" }}
                // onSubmit={loginhandleChange}
              >
                {/* Email input  */}
                <Box sx={{ display: "grid" }}>
                  <label>Email</label>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    required
                    type="email"
                    placeholder="Example@gmail.com"
                    sx={{ width: "100%", mt: 1 }}
                    name="email"
                    slotProps={{
                      input: {
                        style: {
                          borderRadius: "10px",
                          backgroundColor: "#F8FAFC",
                        },
                      },
                    }}
                  />
                </Box>

                {/* Password input  */}
                <Box sx={{ display: "grid" }}>
                  <label>Password</label>
                  <TextField
                    id="outlined-basic2"
                    required
                    variant="outlined"
                    placeholder="At least 8 characters"
                    sx={{ width: "100%", mt: 1 }}
                    type="password"
                    name="password"
                    slotProps={{
                      input: {
                        style: {
                          borderRadius: "10px",
                          backgroundColor: "#F8FAFC",
                        },
                      },
                    }}
                  />
                </Box>
                {/* {loginwrong ? (
                  <Box>
                    <Alert severity="error">
                      {"Invalid credentials or account not exists"}
                    </Alert>

                    <Typography color="red"></Typography>
                  </Box>
                ) : null} */}

                {/* forgetpass */}
                <Box sx={{ textAlign: "end" }}>
                  <Button sx={{ textTransform: "none" }}>
                    Forget Password?
                  </Button>
                </Box>

                {/* sign in button  */}
                <Box>
                  <Button
                    type="submit"
                    sx={{
                      bgcolor: "#1C325B",
                      color: "white",
                      width: "100%",
                      borderRadius: "10px",
                      height: "50px",
                      textTransform: "none",
                    }}
                  >
                    Sign in
                  </Button>
                </Box>

                <Box>
                  <Divider spacing={1}>Or</Divider>
                </Box>

                {/* sign up button  */}
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Typography>
                    Don't you have an account?
                    <Link
                      style={{ textDecoration: "none" }}
                      to={'/register'}
                    >
                      Sign up
                    </Link>
                  </Typography>
                </Box>
              </form>

              <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                <CopyrightIcon sx={{ color: "grey" }} />
                <Typography variant="h7" sx={{ color: "grey" }}>
                  {" "}
                  2025 ALL RIGHTS ARE RESERVED
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  </Stack>
  );
}

export default Form;
