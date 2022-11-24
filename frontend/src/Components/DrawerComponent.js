import React, { useState } from "react";
import {
    Drawer,
    List,
    ListItem,
    ListItemText,
    IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const DrawerComponent = () => {
    const styles = {
        drawer: {
            backgroundColor: "rgba(0,0,0,0.8)",
        },
        links: {
            borderBottom: "1px solid white",
            padding: "20px 0px",
        },
        contactLink: {
            marginTop: "20px",
            padding: "0px",
        },
        iconBtn: {
            color: "black",
        },
    };
    const [openDrawer, setOpenDrawer] = useState(false);

    const handleDrawerChange = () => {
        setOpenDrawer(false);
    };

    return (
        <div className="drawer-container">
            <Drawer
                open={openDrawer}
                onClose={handleDrawerChange}
                PaperProps={{
                    sx: {
                        backgroundColor: "black",
                        width: "300px",
                        padding: "20px 50px",
                    },
                    elevation: 20,
                }}
                sx={styles.drawer}
            >
                <List>
                    <ListItem sx={styles.links}>
                        <ListItemText onClick={handleDrawerChange}>
                            <Link
                                to=""
                                className="drawer-link active-drawer-link"
                            >
                                Home
                            </Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem sx={styles.links}>
                        <ListItemText onClick={handleDrawerChange}>
                            <Link to="/about" className="drawer-link">
                                About
                            </Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem sx={styles.links}>
                        <ListItemText onClick={handleDrawerChange}>
                            <Link to="" className="drawer-link">
                                Contributors
                            </Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem sx={styles.links}>
                        <ListItemText onClick={handleDrawerChange}>
                            <Link to="" className="drawer-link">
                                Blog
                            </Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem sx={styles.links}>
                        <ListItemText onClick={handleDrawerChange}>
                            <Link to="" className="drawer-link">
                                Programs
                            </Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem sx={styles.contactLink}>
                        <ListItemText onClick={handleDrawerChange}>
                            <Link to="" className="drawer-link ">
                                Contact Us
                            </Link>
                        </ListItemText>
                    </ListItem>
                </List>
                <p className="drawer-text">
                    All Rights Reserved. Devwrites Africa
                </p>
            </Drawer>
            <IconButton
                sx={styles.iconBtn}
                onClick={() => setOpenDrawer(!openDrawer)}
            >
                <MenuIcon sx={{ fontSize: "40px" }} />
            </IconButton>
        </div>
    );
};

export default DrawerComponent;
