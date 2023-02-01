import * as React from 'react';
import { styled} from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import MuiAppBar from '@mui/material/AppBar';

const Appbar = styled(MuiAppBar, {
 })(({theme}) => ({
    zIndex: theme.zIndex.drawer + 1,
  }));

export default function Navbar() {
  return (
      <AppBar position="fixed">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="open drawer" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography>React Material Admin Full</Typography>
        </Toolbar>
      </AppBar>
  );
}