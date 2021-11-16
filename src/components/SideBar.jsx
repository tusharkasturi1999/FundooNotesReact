// import * as React from 'react';
// import { Grid, IconButton } from "@mui/material";
// import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
// import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
// import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
// import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
// import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
// import MuiDrawer from '@mui/material/Drawer';
// export default function Sidebar() {
//   const [open, setOpen] = React.useState(false);

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };

//   return (
//     <Grid
//       container
//       direction="column"
//       padding="8px 12px"
//       spacing={1}
//     //   margin="0px 0px 0px 12px"
      
//       justifyContent="space-evenly"
//     >
//       <Grid item xs>
//         <IconButton>
//           <LightbulbOutlinedIcon />
//         </IconButton>
//       </Grid>
//       <Grid item xs>
//         <IconButton>
//           <NotificationsNoneOutlinedIcon />
//         </IconButton>
//       </Grid>
//       <Grid item>
//         <IconButton>
//           <CreateOutlinedIcon />
//         </IconButton>
//       </Grid>
//       <Grid item>
//         <IconButton>
//           <ArchiveOutlinedIcon />
//         </IconButton>
//       </Grid>
//       <Grid item>
//         <IconButton>
//           <DeleteOutlinedIcon />
//         </IconButton>
//       </Grid>
//     </Grid>
//   );
// }

import React from "react";
import { styled } from "@mui/material/styles";
import { autocompleteClasses, IconButton, List, ListItem} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import NoteOutlinedIcon from '@mui/icons-material/NoteOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { color, style } from "@mui/system";

const drawerWidth = 240;
const openedMixin = (theme) => ({
  width: drawerWidth,
  top: "auto",
  borderRight: "0px",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  top: "auto",
  borderRight: "0px",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const SideBar = ({ open }) => {

  return (
    <Drawer variant="permanent" open={open} >
      <DrawerHeader />
      <List>
          <ListItem button>
            <ListItemIcon >
             <LightbulbOutlinedIcon/>
            </ListItemIcon>
            <ListItemText primary="Notes" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
             <NotificationsNoneOutlinedIcon/>
            </ListItemIcon>
            <ListItemText primary="Reminders" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
             <NoteOutlinedIcon/>
            </ListItemIcon>
            <ListItemText primary="Label" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
             <EditOutlinedIcon/>
            </ListItemIcon>
            <ListItemText primary="Edit labels" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
             <ArchiveOutlinedIcon/>
            </ListItemIcon>
            <ListItemText primary="Archive" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
             <DeleteOutlineOutlinedIcon/>
            </ListItemIcon>
            <ListItemText primary="Trash" />
          </ListItem>
      </List>
    </Drawer>
  );
};

export default SideBar;