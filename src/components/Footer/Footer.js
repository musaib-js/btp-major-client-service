import React from "react";
import { Container, Typography, Grid, IconButton, Paper } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function Footer() {
  const footerStyle = {
    backgroundColor: "white",
    color: "black",
    padding: "32px 0",
    width: "100%",
    marginTop: "90px",
  };

  const iconStyle = {
    fontSize: 30,
    marginRight: 10,
    color: "black",
  };

  const socialMediaStyle = {
    fontSize: "12px",
    color: "black",
  };

  const spanStyle = {
    marginBottom: 5,
  };

  const containerStyle = {
    maxWidth: "100%",
    marginLeft: 0,
    marginRight: 0,
  };

  const handleClickInstagram = () => {
    window.open(
      "https://www.instagram.com/panunganjean?igsh=MjUxM3pqcGowc2N2",
      "_blank"
    );
  };

  const handleCLickFacebook = () => {
    window.open("https://www.facebook.com/PanunGanjean", "_blank");
  };

  return (
    <Paper elevation={5} style={{ ...footerStyle, boxShadow: 10 }}>
      <Container style={containerStyle}>
        <Grid container spacing={4} justifyContent={'center'}>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography fontSize="12px">
              <div style={spanStyle}>
                <span> Model Town A, Sopore, J&K, 193201</span>
              </div>
              <div style={spanStyle}>
                <span>Phone: +91 9090813814</span>
              </div>
              <div style={spanStyle}>
                <span>WhatsApp: +91 9090813814</span>
              </div>
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography fontSize="12px" sx={{ maxWidth: "60%" }}>
              Welcome to Ganjean Multiventures, where innovation and excellence
              converge in two dynamic business realms – Ganjean Health and
              Ganjean.com.
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom align="left">
              Connect With Us
            </Typography>
            <Grid
              item
              container
              display="flex"
              direction="column"
              justifyContent="flex-start"
            >
              <IconButton
                sx={{ justifyContent: "flex-start", px: 0 }}
                onClick={handleClickInstagram}
                disableRipple
              >
                <InstagramIcon style={iconStyle} />
                <Typography sx={socialMediaStyle} align="left">
                  Instagram
                </Typography>
              </IconButton>
              <IconButton
                sx={{ justifyContent: "flex-start", px: 0 }}
                onClick={handleCLickFacebook}
                disableRipple
              >
                <FacebookIcon style={iconStyle} />
                <Typography sx={socialMediaStyle} align="left">
                  Facebook
                </Typography>
              </IconButton>
            </Grid>
            <Typography align="left" fontSize="12px">
              Follow us on Instagram and Facebook
            </Typography>
          </Grid>
          <Grid item xs={12} md={3} sx={{ width: '100%' }}>
            <Typography variant="h6" gutterBottom align="left">
              Locate Us
            </Typography>
            <iframe
              title="maps"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13183.534113186575!2d74.4457573!3d34.3025121!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e10f85b77a5e3b%3A0x6760ac669ec293d2!2sPanun%20Ganjean!5e0!3m2!1sen!2sin!4v1706517768805!5m2!1sen!2sin"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Grid>
        </Grid>
        <Typography variant="body2" mt={4} fontSize="12px" align="center">
          &copy; 2023 ganjean.com All rights reserved.
        </Typography>
      </Container>
    </Paper>
  );
}
