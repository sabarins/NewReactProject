import React, { useState } from "react";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";

import {
  Box,
  Button,
  TextField,
  Grid2 as Grid,
  Typography,
  Container,
  InputAdornment,
} from "@mui/material";

const MobileForm = () => {
  const currentyear = new Date().getFullYear();
    const maxdate = `${currentyear - 18}-12-31`;
  
    const [passwordmatch, setPasswordmatch] = useState([]);
    const [mailformaterr, setMailformaterr] = useState([]);
    const [dobage, setDobage] = useState([]);
  
    const [fnamerequired, setFnamerequired] = useState([]);
    const [lnamerequired, setLnamerequired] = useState([]);
    const [emailrequired, setEmailrequired] = useState([]);
    const [dobrequired, setDobrequired] = useState([]);
    const [passwordrequired, setPasswordrequired] = useState([]);
    const [confirmpasswordrequired, setConfirmpasswordrequired] = useState([]);
  
    // all user input data stored here 
    const [regusers, setRegusers] = useState([]);
  
    // validation function 
    const handleValidation = (formdata) => {
  
      const validationchecks = {};
      const mailidreg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
      if (mailidreg.test(formdata.email) == false) {
        setMailformaterr("Invalid email format");
        validationchecks.mailformat = 'not valid';
      } 
      else{
        setMailformaterr([]);
      }
  
      if (formdata.password != formdata.confirmpassword) {
        setPasswordmatch("Passwords must match");
        validationchecks.passwordmatch = 'not valid'
      } else if (formdata.password == formdata.confirmpassword) {
        setPasswordmatch([]);
      }
  
      if (currentyear - 18 < formdata.dob?.split("-")[0]) {
        setDobage("Must be 18 years old");
        validationchecks.dobage = 'not valid'
      } else {
        setDobage([]);
      }
  
      if (formdata.fname == '') {
        setFnamerequired("First Name is required");
        validationchecks.fname = 'not valid'
      } else if (formdata.fname.length != 0) {
        setFnamerequired([]);
      }
  
      if (formdata.lname == "") {
        setLnamerequired("Last Name is required");
        validationchecks.lname = 'not valid'
      } else if (formdata.lname.length != 0) {
        setLnamerequired([]);
      }
  
      if (formdata.email == "") {
        setEmailrequired("Email is required");
        validationchecks.email = 'not valid'
      } else if (formdata.email.length != 0) {
        setEmailrequired([]);
      }
  
      if (formdata.dob == "") {
        setDobrequired("Date of birth is required");
        validationchecks.dob = 'not valid'
      } else if (formdata.dob.length != 0) {
        setDobrequired([]);
      }
  
      if (formdata.password == "") {
        setPasswordrequired("Password is required");
        validationchecks.password = 'not valid'
      } else if (formdata.password.length != 0) {
        setPasswordrequired([]);
      }
  
      if (formdata.confirmpassword == "") {
        setConfirmpasswordrequired("Confirm Password is required");
        validationchecks.confirmpassword = 'not valid'
      } else if (formdata.confirmpassword.length != 0) {
        setConfirmpasswordrequired([]);
      }
  
      return Object.keys(validationchecks).length == 0
    };
  
    // Submit function 
    const handleSubmit = (event) => {
      try {
        event.preventDefault();
        const data = new FormData(event.target);
  
        // creating object for form datas
        const formdatas = Object.fromEntries(data.entries());
  
        console.log(Object.fromEntries(data.entries()));
  
        // check validation
        if(handleValidation(formdatas))
        {
          console.log("Success validated!");
          setRegusers((users)=>[...users,formdatas])
          event.target.reset();
        }
  
      } catch (error) {
        console.log(error);
      }
    };
  
    console.log(regusers);
  
  return (
    <>
      {/* Mobile form layout  */}
      <form onSubmit={handleSubmit} style={{ display: "grid", rowGap: "20px" }}>
        <Container
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            // marginTop: "10px",
            // width: "100%",
            // columnGap: "20px",
          }}
        >
          <Grid
            size={{ xs: 12 }}
            sx={{
              textAlign: "left",
              display: { md: "none", lg: "none", xs: "grid" },
              rowGap: "10px",
            }}
          >
            {/* firstname input  */}
            <Box>
              <label htmlFor="moboutlined-basic">First Name</label>
              <TextField
                id="moboutlined-basic"
                variant="outlined"
                // required
                type="text"
                // placeholder="Example@gmail.com"
                sx={{ width: "100%", mt: 1 }}
                name="fname"
                //   value={emailid}
                slotProps={{
                  input: {
                    style: {
                      borderRadius: "10px",
                      backgroundColor: "#F8FAFC",
                      height: "50px",
                    },
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonOutlineIcon sx={{ color: "black" }} />
                      </InputAdornment>
                    ),
                  },
                  htmlInput: { maxLength: 50 },
                }}
              />
              <div style={{ height: "10px", marginTop: "5px" }}>
                {fnamerequired && (
                  <Typography color="red" fontSize={"13px"} ml={1}>
                    {fnamerequired}
                  </Typography>
                )}
              </div>
            </Box>

            {/* Last Name input  */}
            <Box>
              <label htmlFor="moboutlined-basic2">Last Name</label>
              <TextField
                id="moboutlined-basic2"
                variant="outlined"
                //   required
                type="text"
                // placeholder="your last name"
                sx={{ width: "100%", mt: 1 }}
                name="lname"
                //   value={emailid}
                slotProps={{
                  input: {
                    style: {
                      borderRadius: "10px",
                      backgroundColor: "#F8FAFC",
                      height: "50px",
                    },
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonOutlineIcon sx={{ color: "black" }} />
                      </InputAdornment>
                    ),
                  },
                  htmlInput: { maxLength: 50 },
                }}
              />
              {lnamerequired && (
                <div style={{ height: "10px", marginTop: "5px" }}>
                  <Typography color="red" fontSize={"13px"} ml={1}>
                    {lnamerequired}
                  </Typography>
                </div>
              )}
            </Box>

            {/* Email input  */}
            <Box>
              <label htmlFor="moboutlined-basic3">Email</label>
              <TextField
                id="moboutlined-basic3"
                variant="outlined"
                //   required
                type="text"
                // placeholder="Example@gmail.com"
                sx={{ width: "100%", mt: 1 }}
                name="email"
                //   value={emailid}
                slotProps={{
                  input: {
                    style: {
                      borderRadius: "10px",
                      backgroundColor: "#F8FAFC",
                      height: "50px",
                    },
                    startAdornment: (
                      <InputAdornment position="start">
                        <MailOutlineIcon sx={{ color: "black" }} />
                      </InputAdornment>
                    ),
                  },
                }}
              />
              {emailrequired && (
                <div style={{ height: "10px", marginTop: "5px" }}>
                  <Typography color="red" fontSize={"13px"} ml={1}>
                    {emailrequired.length == 0 ? mailformaterr : emailrequired}
                  </Typography>
                </div>
              )}
            </Box>

            {/* DateOfBirth input  */}
            <Box sx={{ display: "grid" }}>
              <label htmlFor="mobdob">Date of Birth</label>
              <input
                type="date"
                id="mobdob"
                name="dob"
                //   required
                style={{
                  height: "48px",
                  textIndent: "3px",
                  padding: "0px 5px",
                  fontSize: "15px",
                  borderRadius: "10px",
                  backgroundColor: "#F8FAFC",
                  border: "0.5px solid lightgrey",
                  marginTop: "8px",
                  width: "98%",
                }}
              />
              {dobrequired && (
                <div style={{ height: "10px", marginTop: "5px" }}>
                  <Typography color="red" fontSize={"13px"} ml={1}>
                    {dobrequired.length == 0 ? dobage : dobrequired}
                  </Typography>
                </div>
              )}
            </Box>

            {/* Password input  */}
            <Box>
              <label htmlFor="moboutlined-basic4">Password</label>
              <TextField
                id="moboutlined-basic4"
                //   required
                variant="outlined"
                placeholder="atleast 8 characters"
                sx={{ width: "100%", mt: 1 }}
                // value={password}
                type="password"
                name="password"
                slotProps={{
                  input: {
                    style: {
                      borderRadius: "10px",
                      backgroundColor: "#F8FAFC",
                      height: "50px",
                    },
                    startAdornment: (
                      <InputAdornment position="start">
                        <HttpsOutlinedIcon sx={{ color: "black" }} />
                      </InputAdornment>
                    ),
                  },
                  htmlInput: { minLength: 8 },
                }}
                //   onChange={(e) => {
                //     setPassword(e.target.value);
                //   }}
              />
              {passwordrequired && (
                <div style={{ height: "10px", marginTop: "5px" }}>
                  <Typography color="red" fontSize={"13px"} ml={1}>
                    {passwordrequired}
                  </Typography>
                </div>
              )}
            </Box>

            {/* confirm Password input  */}
            <Box>
              <label htmlFor="moboutlined-basic5">Confirm Password</label>
              <TextField
                id="moboutlined-basic5"
                //   required
                variant="outlined"
                placeholder="same as entered password"
                sx={{ width: "100%", mt: 1 }}
                type="password"
                // value={confirmpassword}
                name="confirmpassword"
                slotProps={{
                  input: {
                    style: {
                      borderRadius: "10px",
                      backgroundColor: "#F8FAFC",
                      height: "50px",
                    },
                    startAdornment: (
                      <InputAdornment position="start">
                        <HttpsOutlinedIcon sx={{ color: "black" }} />
                      </InputAdornment>
                    ),
                  },
                  htmlInput: { minLength: 8 },
                }}
              />
              {passwordmatch && (
                <div style={{ height: "10px", marginTop: "5px" }}>
                  <Typography color="red" fontSize={"13px"} ml={1}>
                    {passwordmatch}
                  </Typography>
                </div>
              )}
            </Box>
          </Grid>
        </Container>

        {/* submit button  */}
        <Box sx={{display:{md:'none',lg:'none',xs:'grid'}}}>
          <Button
            sx={{
              bgcolor: "#fe7140",
              color: "white",
              borderRadius: "5px",
              textTransform: "none",
              padding: "10px 20px",
            }}
            type="submit"
          >
            Submit
          </Button>
        </Box>
      </form>
    </>
  );
};

export default MobileForm;
