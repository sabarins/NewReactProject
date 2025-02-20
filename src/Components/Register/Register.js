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
  Grid2,
} from "@mui/material";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import register from "../../assets/register.jpg";
import Form from "../Form/Form";
import MobileForm from "../Form/MobileForm";

function Register(props) {

  return (
    <Stack
      sx={{
        width: "100%",
      }}
    >
      <Grid container p={2} sx={{ display: "flex" }} columnSpacing={2}>

        {/* first layout  */}
        <Grid size={{ lg: 5.5, xs: 12 }}>
          <Box sx={{ display: "flex", alignContent: "center" }}>
            <img
              src={register}
              width="100%"
              height="100%"
              style={{
                border: "0px solid grey",
                borderRadius: "10px",
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
              sx={{ fontWeight: "bold" }}
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

            <Typography variant="h5">Registration Form</Typography>
            {/* <Divider sx={{color:"#fe7140",mt:-8}} /> */}

            {/* Desktop Form Component  */}
            <Form />

            {/* Mobile Form Component  */}
            <MobileForm />
           
          </Box>
        </Grid>

      </Grid>
    </Stack>
  );
}

export default Register;
