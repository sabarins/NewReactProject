import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  Stack,
  TextField,
  Typography,
  Grid2 as Grid,
  Grid2,
} from "@mui/material";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import register from "../../assets/register.jpg";
import Form from "../Form/Form";
import MobileForm from "../Form/MobileForm";
import { Formdata } from "../../App";


function Register(props) {

  const {setFormdatas,formdatas} = useContext(Formdata);

  console.log(formdatas);

  return (
    <Stack
      sx={{
        width: "100%",
      }}
    >
      <Grid container columnSpacing={2} p={2} height={"100vh"}>
        {/* first layout  */}
        <Grid size={{ lg: 5.5, xs: 12 }}>
          <Box
            sx={{
              // position: "relative",
              width: "100%",
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
              height: { xs: "100%", md: "100%", lg: "100%" },
            }}
          >
            <img
              src={register}
              // width="100%"
              style={{
                borderRadius: "10px",
                objectFit: "cover",
                width: "100%",
                height: "100%",
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              }}
            />
          </Box>
        </Grid>

        {/* Second layout  */}
        <Grid size={{ lg: 6.5, xs: 12 }}>
          <Box
            sx={{
              display: "grid",
              rowGap: "30px",
              mt: 1,
            }}
          >
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold",mt:{xs:2,md:0,lg:0} }}
              fontSize={{ xs: "30px" }}
            >
              Welcome to Bow and Baan
              <WavingHandIcon
                sx={{
                  color: "#ffde6f",
                  fontSize: { xs: "30px", lg: "35px", md: "35px" },
                  ml: 1,
                }}
              />
            </Typography>

            <Box sx={{width:"100%",display:"grid",justifyContent:"center"}}>
              <Typography variant="h5" sx={{mb:0.5}}>Registration Form</Typography>
              <Box sx={{borderBottom:"5px solid #fe7140",width:"50%",display:"flex",justifyContent:"center",ml:5,}}></Box>
            </Box>
            {/* <Divider sx={{color:"#fe7140",mt:-8}} /> */}

            {/* Desktop Form Component  */}
            <Box sx={{ display: { md: "flex", lg: "flex", xs: "none" } }}>
              <Form setFormdatas={setFormdatas} />
            </Box>

            {/* Mobile Form Component  */}
            <MobileForm setFormdatas={setFormdatas} />
          </Box>
        </Grid>
      </Grid>
    </Stack>
  );
}

export default Register;
