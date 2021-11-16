import React, { useState, useEffect } from "react";
import noteService from "../service/noteService.jsx";
import { Box } from "@mui/material";
import Note from "../components/Notes";
import AppBar from "../components/AppBar";
import SideBar from "../components/SideBar";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const [note, setNote] = useState([]);

  useEffect(() => {
    fetchitem();
  }, []);

  const fetchitem = () => {
    noteService
      .getNotes()
      .then((res) => {
          console.log(res);
        setNote(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDrawerOpen = () => {
    setOpen((prevState) => {
      return !prevState;
    });
  };

  return (
      <Box>
          <AppBar handleDrawerOpen={handleDrawerOpen} />
    <Box sx={{ display: "flex"}}>
            <SideBar open={open} />
      {/* <AppBar handleDrawerOpen={handleDrawerOpen} /> */}
  
      <Box component="main" sx={{ flexGrow: 1, p: 3, margin: "5% auto" }}>
        <Note notes={note} />
      </Box>
    </Box>
    </Box>
  );
};

export default Dashboard;