import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Divider, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { NavLink } from 'react-router-dom';

export default function ButtonAppBar() {

  const [openDrawer, setOpenDrawer] = React.useState<boolean>(false)

  const anchor = 'left'
  
  const drawerList = new Map([
    [ '','Home' ],
    [ 'trips', 'All Trips' ],
    [ 'events', 'Events' ],
    [ 'report', 'Report' ],
  ]);

  const list = () => (
    <Box
      sx={{ width: 180 }}
      role="presentation"
      onClick={() => setOpenDrawer(false)}
      onKeyDown={() => setOpenDrawer(false)}
    >
      <List>
        {Array.from(drawerList).map(([index, text]) => (
          <ListItem button key={text}>
            <NavLink style={{ textDecoration: 'none', color:'#1976d2' }} to={"/"+index}>
                <ListItemText primary={text} />
            </NavLink>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setOpenDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" style={{marginLeft: '20px'}}>
            The Cyclist
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </Box>
    <Drawer
      anchor={anchor}
      open={openDrawer}
      onClose={() => setOpenDrawer(false)}
    >
      {list()}
    </Drawer>
    </>
  );
}