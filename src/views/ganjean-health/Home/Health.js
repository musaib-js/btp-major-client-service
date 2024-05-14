import { Grid, Toolbar, Button, Card, CardMedia, CardContent, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import Bg from "../../../assets/images/banner.png";
import Bg2 from "../../../assets/images/banner2.png";
import BgM from '../../../assets/images/bannerMobile.png'
import NavBar from "../../../layout/NavBar/index";
import Testmonials from "../Testmonials/index.js";
import WhyChooseUs from '../whyChooseUs/index.js';
import { Packages } from '../TestPackages/Index.js';
import Slider from "../../../components/Slider/Carousel.js"
import {useNavigate} from "react-router-dom"
export default function Main() {
  const navigate = useNavigate()
  const role = localStorage.getItem("role")
  if(role==="doctor"){
    navigate("/doctor-dashboard")
  }
  const images = [Bg, Bg2];
  const imagesMobile = [BgM, BgM, BgM];
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down(600));
  return (
    <Grid container>
      <NavBar />
      <Card
        sx={{
          width: "100%",
          borderRadius: "0!important"
        }}>
        <Slider>
          {(isSmallScreen ? imagesMobile : images).map((image, index) => {
            return (
              <img
                key={image}
                draggable={false}
                alt="text"
                style={{ width: "100%", height: "100%", minHeight: "220px" }}
                src={image}
              />

            );
          })}
        </Slider>
      </Card>




      {/* packages */}
      <Packages />
      {/* why choose us */}
      <WhyChooseUs />

      {/* Testmonials */}
      <Testmonials />
    </Grid>
  )
}
