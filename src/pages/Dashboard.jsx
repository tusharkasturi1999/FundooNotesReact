import React, { useState, useEffect } from "react";
import noteService from "../service/noteService.jsx";
import { Box } from "@mui/material";
import Note from "../components/Notes";
import AppBar from "../components/AppBar";
import SideBar from "../components/SideBar";
import { useDispatch } from "react-redux";
import { setNotes } from "../actions/noteActions"

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const [buttonOn, setButtonOn] = useState(false);

  const dispatch = useDispatch()

  useEffect(() => {
    fetchitem();
  }, []);

  const fetchitem = () => {
    noteService
      .getNotes()
      .then((res) => {
        console.log(res);
        dispatch(setNotes(res.data.message))
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDrawerOpen = () => {
    setOpen((prevState) => {
      setButtonOn(!buttonOn)
      return !prevState;
    });
  };

  const handleDrawerHover = () => {
    if (buttonOn==false && open === false) {
      setOpen(true);
    }
  };

  const handleDrawerHoverLeave = () => {
    if (buttonOn==false && open === true) {
      setOpen(false);
    }
  };
  return (
    <Box>
      <AppBar handleDrawerOpen={handleDrawerOpen} />
      <Box sx={{ display: "flex" }}>
        <SideBar
          open={open}
          handleDrawerOpen={handleDrawerOpen}
          handleDrawerHover={handleDrawerHover}
          handleDrawerHoverLeave={handleDrawerHoverLeave}
        />
        {/* <AppBar handleDrawerOpen={handleDrawerOpen} /> */}

        <Box component="main" sx={{ flexGrow: 1, p: 3, margin: "5% auto" }}>
          <Note />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;