// import React from 'react'
// import { AppBar, Toolbar, Typography, IconButton } from '@mui/material'
// import HomeIcon from '@mui/icons-material/Home'
// import AboutIcon from '@mui/icons-material/InfoOutlined'
// import ContactIcon from '@mui/icons-material/ContactPage'
// import { Link } from 'react-router-dom';

// export default function Appbar() {
//     return (
//         <AppBar position='fixed' sx={{
//             top: "auto",
//             bottom: "0",
//             backgroundColor: "white",
//             padding: "3px",
//             height: "60px"
//         }}>
//             <Toolbar variant='dense' sx={{ display: "flex", justifyContent: "space-around" }}>
//                 <IconButton LinkComponent={Link} to={'/'}>
//                     <HomeIcon />
//                     <Typography>
//                         Home
//                     </Typography>
//                 </IconButton>
//                 <IconButton LinkComponent={Link} to={'/about'}>
//                     <AboutIcon />
//                     <Typography>
//                         About Us
//                     </Typography>
//                 </IconButton>
//                 <IconButton LinkComponent={Link} to={'/contact-us'}>
//                     <ContactIcon />
//                     <Typography>
//                         Contact Us
//                     </Typography>
//                 </IconButton>
//             </Toolbar>
//         </AppBar>
//     )
// }
import React, { useState } from "react";
import {
    BottomNavigation,
    BottomNavigationAction,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import PolicyIcon from "@mui/icons-material/Policy";
import BackspaceIcon from "@mui/icons-material/Backspace";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { ShoppingBag, } from "@mui/icons-material";
import { Link } from "react-router-dom";
import useAppStore from "../../store/global";

const AppBar = () => {
    const { open, setOpen } = useAppStore();
    const toggleSidebar = () => {
        setOpen(!open);
    };
    return (
        <>
            <Paper
                sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
                elevation={3}
            >
                <BottomNavigation showLabels>
                    <BottomNavigationAction
                        label="Home"
                        icon={<HomeIcon />}
                        component={Link}
                        to="/"
                    />
                    <BottomNavigationAction
                        label="About Us"
                        icon={<ExploreIcon />}
                        component={Link}
                        to="/about"
                    />
                    <BottomNavigationAction
                        label="Contact Us"
                        icon={<ContactPageIcon />}
                        component={Link}
                        to="/contact-us"
                    />
                    <BottomNavigationAction
                        label="More"
                        icon={<MenuIcon fontSize="large" />}
                        onClick={toggleSidebar}
                    />
                </BottomNavigation>
            </Paper>
        </>
    );
};

export default AppBar;