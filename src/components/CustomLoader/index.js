import React from "react";
import logo from "../../assets/images/logo.png";
import { Box } from "@mui/material";

const Spinner = () => {
  return (
    <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '300px',
      position: 'relative',
      '&::before': {
        content: '""',
        position: 'absolute',
        borderTop: '5px solid #098fff',
        borderRadius: '50%',
        width: '80px',
        height: '80px',
        animation: 'spin 2s linear infinite',
      },
    }}
  >
    <Box
      variant="caption"
      color="hsl(0, 0%, 100%)"
      component="div"
      sx={{
        fontSize: '2rem',
      }}
    >
      <img src={logo} alt="logo" width="70px" />
    </Box>
  </Box>
  );
};

export default Spinner;
