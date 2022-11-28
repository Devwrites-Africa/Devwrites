import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import DrawerComponent from "./DrawerComponent";
import { 
    AppBar, 
    Tab, 
    Tabs, 
    Toolbar, 
    Button,
    useTheme,
    useMediaQuery
} from "@mui/material";

const Navbar = ()=> {
    const theme = useTheme();
    const mobileView = useMediaQuery(theme.breakpoints.down('md'))

     const styles = {
        tab: {
           color: 'var(--purple)',
           fontWeight: '700',
           fontSize: '1.2rem',
           textDecoration: 'capitalize'
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
                            // <Tabs >
                            //     <Tab label='Home' sx={styles.tab}/>
                            //     <Tab label='About' sx={styles.tab}/>
                            //     <Tab label='Contributors' sx={styles.tab}/>
                            //     <Tab label='Blog' sx={styles.tab}/>
                            //     <Tab label='Programs' sx={styles.tab}/>
                            // </Tabs>
                            <div className='navLink-container'>
                                <Link to='/' className="active-link">Home</Link>
                                <Link to='/about'>About</Link>
                                <Link to=''>Contributors</Link>
                                <Link to='/blog'>Blog</Link>
                                <Link to='/programs'>Programs</Link>
                            </div>
                        )}

                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
