import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Divider, Drawer, List, ListItem, ListItemText } from '@mui/material';

export default function ButtonAppBar() {

  const [openDrawer, setOpenDrawer] = React.useState<boolean>(false)

  const anchor = 'left'
  
  const drawerList = new Map([
    [ 'home','Home' ],
    [ 'trips', 'My Trips' ]
  ]);

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={() => setOpenDrawer(false)}
      onKeyDown={() => setOpenDrawer(false)}
    >
      <List>
        {Array.from(drawerList).map(([index, text]) => (
          <ListItem button key={text} onClick={() => alert(text)}>
            <ListItemText primary={text} />
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
          <Typography variant="h6" component="div">
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