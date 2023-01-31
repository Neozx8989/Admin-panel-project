import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import PersonIcon from '@mui/icons-material/Person';
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from "react-router-dom";

const drawerWidth = 200; // Sidebar-ын урт хэмжээ.
const openedMixin = (theme) => ({ // Sidebar нээгдэх үеийн transition area ///
  width: drawerWidth,                                                       //
  transition: theme.transitions.create("width", {                           //
    easing: theme.transitions.easing.sharp,                                 //
    duration: theme.transitions.duration.enteringScreen,                    //
  }),                                                                       //
  overflowX: "hidden",                                                      //
});   ////////////////////////////////////////////////////////////////////////                                                                      //

const closedMixin = (theme) => ({ // Sidebar Хаагдах үеийн transition area ///
  transition: theme.transitions.create("width", {                           //
    easing: theme.transitions.easing.sharp,                                 //
    duration: theme.transitions.duration.leavingScreen,                     //
  }),                                                                       //
  overflowX: "hidden",                                                      //
  width: `calc(${theme.spacing(7)} + 1px)`,                                 //
  [theme.breakpoints.up("sm")]: {                                           //
    width: `calc(${theme.spacing(8)} + 1px)`,                               //
  },                                                                        //
});  /////////////////////////////////////////////////////////////////////////

const DrawerHeader = styled("div")(({ theme }) => ({ // Sidebar open and closed arrow icon button area ///
  display: "flex",                                                                                      //
  alignItems: "center",                                                                                 //
  justifyContent: "flex-end",                                                                           //  
  padding: theme.spacing(0, 1),                                                                         //
  ...theme.mixins.toolbar,                                                                              //
}));   ///////////////////////////////////////////////////////////////////////////////////////////////////

const Drawer = styled(MuiDrawer, {  // Үндсэн Sidebar Эцэг area ////
  shouldForwardProp: (prop) => prop !== "open",                   //
})(({ theme, open }) => ({                                        //
  width: drawerWidth,                                             //
  flexShrink: 0,                                                  //
  whiteSpace: "nowrap",                                           //
  boxSizing: "border-box",                                        //
  ...(open && {                                                   //
    ...openedMixin(theme),                                        //
    "& .MuiDrawer-paper": openedMixin(theme),                     //
  }),                                                             //
  ...(!open && {                                                  //
    ...closedMixin(theme),                                        //
    "& .MuiDrawer-paper": closedMixin(theme),                     //
  }),                                                             //
}));    ////////////////////////////////////////////////////////////

export default function Sidebar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={ () => setOpen(!open)}>{theme.direction === "rtl" ? (<ChevronRightIcon />) : (<ChevronLeftIcon />)}</IconButton>
        </DrawerHeader>
        <Divider />
        <List>
            <ListItem disablePadding sx={{ display: "block" }} onClick={()=>{navigate("/user")}}>
              <ListItemButton>
                <ListItemIcon><PersonIcon/></ListItemIcon>
                <ListItemText primary="User" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ display: "block" }} onClick={()=>{navigate("/product")}}>
              <ListItemButton>
                <ListItemIcon><ShoppingCartIcon/></ListItemIcon>
                <ListItemText primary="Product" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
        </List>
        <Divider />
      </Drawer>
    </Box>
  );
}
