import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  IconButton,
  Snackbar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import React, { useState } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";
import "../styles/dashboard.scss";
import { useSelector } from "react-redux";
import noteService from "../service/noteService";
import { useDispatch } from "react-redux";
import {
  removeTrashNote,
  deleteNote,
  addTrashNote,
} from "../actions/noteActions";
import CloseIcon from "@mui/icons-material/Close";

const Trash = () => {
  const myNotes = useSelector((state) => state.allNotes.trash);
  const listView = useSelector((state) => state.allNotes.listView);
  const [hover, setHover] = useState([]);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [undoItem, setundoItem] = useState("");
  const [deleteItem, setDeleteItem] = useState("");
  const [dialougOpen, setDialougOpen] = useState(false);

  const handleDilougOpen = (item) => {
    setDeleteItem(item);
    setDialougOpen(true);
  };

  const handleDialogClose = () => {
    setDialougOpen(false);
  };

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

  const handleDelete = () => {
    noteService
      .deletNote(deleteItem._id)
      .then((res) => {
        if (res.data.status === 200) {
          dispatch(deleteNote(deleteItem));
          handleDialogClose();
        } else {
          console.log(res);
        }
      })
      .catch((err) => console.log(err));
  };

  const handleRestore = (item) => {
    let data = {
      ...item,
      isTrash: false,
    };
    noteService
      .updateNotes(data, item._id)
      .then((res) => {
        if (res.data.status === 200) {
          dispatch(removeTrashNote(res.data.message));
          handleOpenSnackBar(res.data.message);
        } else {
          console.log(res);
        }
      })
      .catch((err) => console.log(err));
  };

  const handleUndoTrash = () => {
    let data = {
      ...undoItem,
      isTrash: true,
    };
    noteService
      .updateNotes(data, undoItem._id)
      .then((res) => {
        if (res.data.status === 200) {
          dispatch(addTrashNote(res.data.message));
          handleCloseSnackBar();
        } else {
          console.log(res);
        }
      })
      .catch((err) => console.log(err.message));
  };

  const action = (
    <React.Fragment>
      <Button
        size="small"
        onClick={handleUndoTrash}
        style={{ color: "yellow" }}
      >
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

  return (
    <Box className="main-container">
      <Typography
        style={{ fontStyle: "italic", marginBottom: "20px", fontSize: "17px" ,left:"0", Right:"0"}}
      >
        Notes in Trash are deleted after 7 days.
      </Typography>
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
                <CardContent>
                  <Typography variant="h5">{item.title}</Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {item.content}
                  </Typography>
                </CardContent>
                {hover[index] ? (
                  <div style={{ display: "flex", justifyContent: "start" }}>
                    <IconButton
                      size="small"
                      onClick={() => handleDilougOpen(item)}
                    >
                      <DeleteForeverIcon />
                    </IconButton>
                    <IconButton
                      size="small"
                      onClick={() => handleRestore(item)}
                    >
                      <RestoreFromTrashIcon />
                    </IconButton>
                  </div>
                ) : (
                  <div style={{ height: "36px" }}></div>
                )}
              </Card>
            </Grid>
          );
        })}
      </Grid>
      <Dialog open={dialougOpen} onClose={handleDialogClose}>
        <DialogContent>
          <DialogContentText style={{ width: "32vw" }}>
            Delete note forever?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleDialogClose}
            style={{ color: "black", textTransform: "none" }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleDelete}
            autoFocus
            style={{ textTransform: "none" }}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleCloseSnackBar}
        message="Note Restored"
        action={action}
      />
    </Box>
  );
};

export default Trash;