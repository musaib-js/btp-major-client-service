import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { doctorInfo } from "../Doctor-info";

const SideNavBar = () => {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        justifyItems: "center",
        alignItems: "center",
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
        },
      }}
    >
      <List sx={{ mt: 10 }}>
        <Box
          sx={{
            backgroundColor: "#098fff",
            borderRadius: "10px",
            margin: "10px",
            padding: "5px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
          }}
        >
          <ListItemIcon sx={{ ml: 3 }}>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText sx={{ color: "MenuText" }} primary={localStorage.getItem("username")} />
        </Box>
        <Box
          sx={{
            height: 540,
            mt: "1",
            borderRadius: "10px",
            mx: 1.5,
            padding: "5px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.4)",
            textAlign: "center",
          }}
        >
          <ListItem
            sx={{
              marginBottom: "10px",
              borderRadius: "10px",
              "&:hover": {
                backgroundColor: "#E3F2FD",
              },
            }}
            component={Link}
            to="/doctor-dashboard"
          >
            <ListItemText
              sx={{
                color: "#098fff", // Blue color
                fontWeight: "700",
              }}
              primary="Home"
            />
          </ListItem>
          <ListItem
            sx={{
              marginBottom: "10px",
              borderRadius: "10px",
              "&:hover": {
                backgroundColor: "#E3F2FD",
              },
            }}
            component={Link}
            to="/about"
          >
            <ListItemText
              sx={{
                color: "#098fff",
                fontWeight: "700",
              }}
              primary="About"
            />
          </ListItem>
          <ListItem
            sx={{
              marginBottom: "10px",
              borderRadius: "10px",
              "&:hover": {
                backgroundColor: "#E3F2FD",
              },
            }}
            component={Link}
            to="/contact"
          >
            <ListItemText
              sx={{
                color: "#098fff",
                fontWeight: "700",
              }}
              primary="Contact"
            />
          </ListItem>
        </Box>
      </List>
    </Drawer>
  );
};

export default SideNavBar;
