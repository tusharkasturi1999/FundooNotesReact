import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  IconButton,
  Snackbar,
  Button,
  CardMedia
} from "@mui/material";
import React, { useState } from "react";
import "../styles/dashboard.scss";
import { useSelector } from "react-redux";
import Popup from "../components/Popup";
import NoteFooter from "../components/NoteFooter";
import CloseIcon from "@mui/icons-material/Close";
import noteService from "../service/noteService";
import { useDispatch } from "react-redux";
import { removeTrashNote } from "../actions/noteActions";

const Note = () => {
  const myNotes = useSelector((state) => state.allNotes.filteredNotes);
  const listView = useSelector((state) => state.allNotes.listView);
  const [isOpen, setIsOpen] = useState(false);
  const [updateData, setUpdateData] = useState({});
  const [hover, setHover] = useState([]);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const [undoItem, setundoItem] = useState("");
  const handleOpenSnackBar = (item) => {
    setOpen(true);
    setundoItem(item);
  };
  const handleCloseSnackBar = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleRestore = () => {
    let data = {
      ...undoItem,
      isTrash: false,
    };
    noteService
      .updateNotes(data, undoItem._id)
      .then((res) => {
        if (res.data.status === 200) {
          dispatch(removeTrashNote(res.data.message));
          setundoItem("");
          handleCloseSnackBar();
        } else {
          console.log(res);
        }
      })
      .catch((err) => console.log(err));
  };

  const action = (
    <React.Fragment>
      <Button size="small" onClick={handleRestore} style={{color:"yellow"}}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleCloseSnackBar}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  const handleUpdate = (item, index) => {
    let data = {
      index: index,
      item: item,
    };
    setUpdateData(data);
    setIsOpen(!isOpen);
  };

  const handleClose = (item) => {
    setIsOpen(!isOpen);
  };

  return (
    <Box className="main-container">
      <Grid container spacing={4} justifyContent={listView ? "center" : null}>
        {myNotes.map((item, index) => {
          return (
            <Grid item xs={12} md={listView ? 8 : 3} key={item._id}>
              <Card
                style={{backgroundColor:item.noteColor}}
                elevation={hover[index] ? 6 : 1}
                onMouseEnter={() => {
                  setHover({ [index]: true });
                }}
                onMouseLeave={() => {
                  setHover({ [index]: false });
                }}
              >
                <CardContent onClick={() => handleUpdate(item, index)}>
                  <Typography variant="h5">{item.title}</Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {item.content}
                  </Typography>
                </CardContent>
                <CardContent onClick={() => handleUpdate(item, index)}>
                  {item.image !== "" ? (
                    <CardMedia
                      component="img"
                      image={`http://localhost:4000/images/${item.image}`}
                      alt="dish"
                      style={{ minHeight: "150px", maxHeight:"250px"}}
                    />
                  ) : null}

                  {/* <Typography variant="h6" style={{ fontWeight: "bold" }}>
                    {item.title}
                  </Typography>
                  <Typography
                    style={{
                      overflow: "hidden",
                      height: item.image !==""?"3em":"12.5em",
                    }}
                    color="text.secondary"
                  >
                    {item.content}
                  </Typography> */}
                </CardContent>
                {hover[index] ? (
                  <NoteFooter
                    item={item}
                    index={index}
                    handleOpenSnackBar={handleOpenSnackBar}
                  />
                ) : (
                  <div style={{ height: "35px" }}></div>
                )}
              </Card>
            </Grid>
          );
        })}
      </Grid>
      {isOpen && <Popup handleClose={handleClose} item={updateData} />}
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleCloseSnackBar}
        message="Note Trashed"
        action={action}
      />
    </Box>
  );
};

export default Note;