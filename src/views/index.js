import {
  Grid,
  Card,
  Typography,
  CardContent,
  CardMedia,
  Toolbar,
  Button,
} from "@mui/material";
import React from "react";
import Bg from "../assets/images/banner.png";
import Bg2 from "../assets/images/banner2.png";
import ExploreMore from "./ganjean-health/explore/index.js";

export default function Index() {
  return (
    <Grid container>
      {/* banner slides */}
      {/* <Card
        sx={{
          width: "100%",
          marginTop: "21px",
        }}>
        <CardMedia
          component="img"
          height="300px"
          image={Bg}
          title="Doctor"
        />
      </Card> */}
      {/* <Banner images={images} /> */}
      <ExploreMore
        sx={{
          width: "100%",
          marginTop: "21px",
        }}
      />
    </Grid>
  );
}
