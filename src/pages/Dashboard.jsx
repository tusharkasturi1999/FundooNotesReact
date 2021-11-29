import React, { useState, useEffect } from "react";
import noteService from "../service/noteService.jsx";
import { Box } from "@mui/material";
import Note from "../components/Notes";
import AppBar from "../components/AppBar";
import SideBar from "../components/SideBar";
import AddNote from "../components/AddNote.jsx";
import Trash from "../components/Trash.jsx";
import { useDispatch } from "react-redux";
import { setNotes, setTrashNotes } from "../actions/noteActions";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const [buttonOn, setButtonOn] = useState(false);
  const title = useSelector((state) => state.allNotes.title);
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  useEffect(() => {
    fetchitem();
  }, []);

  const fetchitem = () => {
    noteService
      .getNotes()
      .then((res) => {
        console.log(res);
        dispatch(setNotes(res.data.message.filter((item) => !item.isTrash)));
        dispatch(setTrashNotes(res.data.message.filter(item => item.isTrash)))
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDrawerOpen = () => {
    setOpen((prevState) => {
      setButtonOn(!buttonOn);
      return !prevState;
    });
  };

  const handleDrawerHover = () => {
    if (buttonOn == false && open === false) {
      setOpen(true);
    }
  };

  const handleDrawerHoverLeave = () => {
    if (buttonOn == false && open === true) {
      setOpen(false);
    }
  };


  const renderOption = () => {
    switch (title) {
      case "Notes":
        return (
          <>
            <AddNote />
            <Note />
          </>
        );
      case "Trash":
        return (<Trash />);
      default:
        return (
          <>
            <AddNote />
            <Note />
          </>
        );
    }
  };
  if (token == null) {
    return <>{<Redirect to="/login" />}</>;
  } else {
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

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          {renderOption()}
        </Box>
      </Box>
    </Box>
  );}
};

export default Dashboard;
