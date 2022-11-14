
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AppBar, Tab, Tabs, Toolbar, Button } from "@mui/material";

const Navbar = ()=> {
    const theme = useTheme();
    const mobileView = useMediaQuery(theme.breakpoints.down('md'))

    const styles = {
        contactBtn: {
            '&:hover': {
                background: '#2DB68F',
                boxShadow: '0'
            },
            
            background: '#2DB68F',
            boxShadow: '0',
            textTransform: 'capitalize',
            fontSize: '1.2rem', 
            marginRight: '30px'
        },
    }
    
    return (
        <div >
            <AppBar
                sx={{background: '#F5F5F5'}}
                elevation={0}
                position='relative'
            >
                <Toolbar>
                    <img src="./Images/Logo.png" alt="logo" className='logo' />
                        { mobileView ? (
                            <DrawerComponent />
                        ) : (
                            <>
                                <div className='navLink-container'>
                                    <Link to='' className="active-link">Home</Link>
                                    <Link to=''>About</Link>
                                    <Link to=''>Blog</Link>
                                    <Link to=''>Programs</Link>
                                </div>

                                <Link to='' className="contact-btn">
                                    <Button
                                        sx={styles.contactBtn} 
                                        variant="contained"
                                    >
                                        Contact Us
                                    </Button>
                                </Link>
                            </>
                            
                        )}
                        
                    
                    
                    
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
