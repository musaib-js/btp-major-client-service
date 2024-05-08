import React from 'react'
import { AppBar, Toolbar, IconButton, Typography, useMediaQuery, useTheme, Container, Button, Box, Tooltip } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu'
import Logo from '../../assets/images/Logo.svg'
import { Link } from 'react-router-dom'
import useAppStore from '../../store/global';
import PhoneIcon from '@mui/icons-material/Phone'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { toast } from 'react-toastify'

const Header = () => {
  const phoneNumber = "+919090813814";
  const { open, setOpen } = useAppStore();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down(450));
  const handlePhoneClick = () => {
    const telUrl = `tel:${phoneNumber}`;
    window.location.href = telUrl;
  };
  const isTabletOrBelow = useMediaQuery('(max-width: 960px)');
  const accessToken = localStorage.getItem('access_token');
  const refreshToken = localStorage.getItem('refresh_token');

  const handleLogout = () => {
    localStorage.clear();
    toast.success("Logged Out");
    window.location.href = '/';
  };

  return (

    <>
      <AppBar
        position='static'
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: "white",
          padding: "3px",
          zIndex: "150"
        }}
      >
        <Toolbar variant='dense'>
          {!isTabletOrBelow && (
            <IconButton
              sx={{}}
              onClick={() => (setOpen(true))}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography sx={{ display: "flex", flexGrow: 1 }}>
            <Button LinkComponent={Link} to={'/'}>
              <img
                src={Logo}
                alt='Logo'
                width="110px"
              />
            </Button>
          </Typography>
          <IconButton sx={{ mr: 2 }} onClick={handlePhoneClick}>
            <PhoneIcon fontSize={isSmallScreen ? 'small' : 'medium'} sx={{ mr: 1, color: "#098fff" }} />
            <Typography fontSize={isSmallScreen ? "12px" : "16px"}>
              9090813814
            </Typography>
          </IconButton>
          {/* <Link to={refreshToken && accessToken ? ('/dashboard') : ('/login')} style={{ textDecoration: "none" }}>
            <AccountCircleIcon sx={{ width: "35px", height: "35px", color: "#098fff" }} />
          </Link> */}
          <Box>
            {refreshToken && accessToken ? (
              <Box sx={{display: "flex", alignItems: "center"}}>
                <Link to="/dashboard" style={{ textDecoration: "none", display:"flex" }}><DashboardIcon sx={{ width: "30px", height: "30px", color: "#098fff" }} /></Link>
                <LogoutIcon color="primary" onClick={handleLogout} sx={{ marginLeft: "12px" }} />
              </Box>

            ) : (
              <Tooltip title="sign in">
                <Link to="/login" style={{ textDecoration: "none" }}><AccountCircleIcon sx={{ width: "35px", height: "35px", color: "#098fff" }} /></Link>
              </Tooltip>
            )}
          </Box>
        </Toolbar>
      </AppBar >

    </>
  )
}

export default Header;

