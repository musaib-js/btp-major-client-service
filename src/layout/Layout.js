// layout.js
import React from "react";
import Footer from "../components/Footer";
import Header from "./Header";
import { useLocation } from "react-router-dom";
import { Box, Container } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = ({ children }) => {
  const location = useLocation();

  // Check if the current route is the login route
  const isLoginRoute = location.pathname === "/login";
  const isBooking = location.pathname === "/booking-test";
  const isDoctor = location.pathname === "/doctor-dashboard";
  const isPatientDetails = location.pathname.startsWith("/patient-details/");

  return (
    <>
      <Header />
      <ToastContainer />
      <Box sx={{ marginTop: "20px", mx: "20px", marginBottom: "100px" }}>
        {children}
      </Box>
      {!isLoginRoute && !isDoctor && !isPatientDetails && <Footer />}
    </>
  );
};

export default Layout;
