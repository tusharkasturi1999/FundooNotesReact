import React, { useState, useEffect } from "react";
import noteService from "../service/noteService.jsx";
import { Box } from "@mui/material";
import Note from "../components/Notes";
import AppBar from "../components/AppBar";
import SideBar from "../components/SideBar";
import AddNote from "../components/AddNote.jsx";
import { useDispatch } from "react-redux";
import { setTrashNotes} from "../actions/noteActions"
import Trash from "../components/Trash.jsx";

const Bin = () => {
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
        dispatch(setTrashNotes(res.data.message.filter(item => item.isTrash)))
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
      <Box sx={{ display: "flex"}}>
        <SideBar
          open={open}
          handleDrawerOpen={handleDrawerOpen}
          handleDrawerHover={handleDrawerHover}
          handleDrawerHoverLeave={handleDrawerHoverLeave}
        />
        {/* <AppBar handleDrawerOpen={handleDrawerOpen} /> */}

        <Box component="main" sx={{ flexGrow: 1, p: 3, }}>
        {/* <div style={{padding:"0% 4% 4% 4%", width: "50%", marginLeft:"auto", marginRight:"auto"}}> */}
        <AddNote/>
        {/* </div> */}
          <Trash />
        </Box>
      </Box>
    </Box>
  );
};

export default Bin;