import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AppBar, Tab, Tabs, Toolbar, Button } from "@mui/material";

const Navbar = () => {
   const styles = {
      contactBtn: {
         "&:hover": {
            background: "#2DB68F",
            boxShadow: "0",
         },
         background: "#2DB68F",
         boxShadow: "0",
         textTransform: "capitalize",
         fontSize: "1.2rem",
         marginRight: "30px",
      },
   };

   return (
      <AppBar sx={{ background: "#F5F5F5" }} elevation={0}>
         <Toolbar>
            <img src="./Images/Logo.png" alt="logo" className="logo" />

            <div className="navLink-container">
               <Link to="" className="active-link">
                  Home
               </Link>
               <Link to="/about">About</Link>
               <Link to="">Blog</Link>
               <Link to="">Programs</Link>
            </div>

            <Button
               sx={styles.contactBtn}
               variant="contained"
               className="contact-btn"
            >
               Contact Us
            </Button>
         </Toolbar>
      </AppBar>
   );
};

export default Navbar;
