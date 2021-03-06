import React, { useEffect, useState } from "react";
import { IconButton, Snackbar, Button, Popover } from "@mui/material";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import service from "../service/noteService";
import { useDispatch } from "react-redux";
import { addTrashNote, updateNote} from "../actions/noteActions";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";


const NoteFooter = ({ item, handleOpenSnackBar, index}) => {


  const dispatch = useDispatch();
  const handleTrash = () => {
    let data = {
      ...item,
      isTrash: true,
    };
    service
      .updateNotes(data, item._id)
      .then((res) => {
        if (res.data.status === 200) {
          dispatch(addTrashNote(res.data.message));
          handleOpenSnackBar(res.data.message);
          console.log(res);
        } else {
          console.log(res);
        }
      })
      .catch((err) => console.log(err.message));
  };

  const [color, setColor] = useColor('hex',item.noteColor);
  const [colorOpen, setColorOpen] = useState(false)

  useEffect(() =>{
    handleColor();
},[color])

  const openHandler = () =>{
    setColorOpen(!colorOpen)
  }
  const handleColor = () => {
    
    let data = {
      ...item,
      noteColor: color.hex,
    };
    // console.log("note",data);
    service
      .updateNotes(data, item._id)
      .then((res) => {
        if (res.data.status === 200) {
            dispatch(updateNote({data:res.data.message,index:index}));
          console.log(res);
        } else {
          console.log(res);
        }
      })
      .catch((err) => console.log(err.message));
  };


  const handleImage = (image) => {
    let data = {
      ...item,
      image: image,
    };
    service
      .updateNotes(data, item._id)
      .then((res) => {
        if (res.data.status === 200) {
          dispatch(updateNote({ data: res.data.message, index: index }));
          console.log(res);
        } else {
          console.log(res);
        }
      })
      .catch((err) => console.log(err));
  };

  const fileHandler = (event) => {
    const fd = new FormData();
    fd.append("image", event.target.files[0], event.target.files[0].name);
    service
      .setImage(fd)
      .then((res) => {
        handleImage(res.data.filename);
        console.log(res);
      })
      .catch((err) => console.log(err.message));
  };


//   console.log(color);
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <label>
      <IconButton size="small" onClick={openHandler} > 
        <ColorLensOutlinedIcon />
      </IconButton>
      </label>
      <input
        style={{ display: "none" }}
        id="raised-button-file"
        type="file"
        onChange={fileHandler}
      />
      <label htmlFor="raised-button-file">
      <IconButton size="small" component="span">
        <InsertPhotoOutlinedIcon />
      </IconButton>
      </label>
      <label>
      <IconButton size="small" onClick={handleTrash}>
        <DeleteOutlineOutlinedIcon />
      </IconButton>
      </label>
      {colorOpen &&  <ColorPicker width={75} height={50} color={color} onChange={setColor} hideHSV hideHEX hideRGB/>}
    </div>
  );
};

export default NoteFooter;