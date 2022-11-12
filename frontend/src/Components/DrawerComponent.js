import React, { useState } from "react";
import { 
    Drawer, 
    List,
    ListItem,
    ListItemText,
    IconButton
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';


const DrawerComponent = ()=> {
    const [openDrawer, setOpenDrawer] = useState(false);

    const handleDrawerChange = ()=> {
        setOpenDrawer(false);
    }

    return (
        <div>
            <Drawer 
                open={openDrawer} 
                onClose={handleDrawerChange}
            >
                <List>
                    <ListItem>
                        <ListItemText onClick={handleDrawerChange}>
                            <Link to=''>Home</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText onClick={handleDrawerChange}>
                            <Link to=''>About</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText onClick={handleDrawerChange}>
                            <Link to=''>Blog</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText onClick={handleDrawerChange}>
                            <Link to=''>Programs</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText onClick={handleDrawerChange}>
                            <Link to=''>Contact Us</Link>
                        </ListItemText>
                    </ListItem>
                </List>
                <p className="drawer-text">All right Reserved</p>
            </Drawer>
            <IconButton
                sx={{color: 'black', marginLeft: 'auto'}}
                onClick={()=> setOpenDrawer(!openDrawer)}
            >
                <MenuIcon />
            </IconButton>
        </div>
    )
}

export default DrawerComponent