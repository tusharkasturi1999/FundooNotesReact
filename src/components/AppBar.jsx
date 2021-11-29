import "../styles/dashboard.scss";
import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import MenuIcon from "@mui/icons-material/Menu";
import TextField from "@mui/material/TextField";
import Logo from "../assets/Logo.png";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import RefreshIcon from "@mui/icons-material/Refresh";
import ViewAgendaOutlinedIcon from "@mui/icons-material/ViewAgendaOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import Avatar from "react-avatar";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setFilteredNotes } from "../actions/noteActions";
import { listView } from "../actions/noteActions";
import GridViewIcon from "@mui/icons-material/GridView";
import { Popover, Button} from "@mui/material";
import 'reactjs-popup/dist/index.css';
import { Redirect } from "react-router";


export const Appbar = ({ handleDrawerOpen }) => {
  const [search, setSearch] = useState("");
  const [logout, setLogout] = useState(false);
  const myNotes = useSelector((state) => state.allNotes.notes);
  const dispatch = useDispatch();
  const list = useSelector((state) => state.allNotes.listView);
  const title = useSelector((state) => state.allNotes.title);
  const [anchorEl, setAnchorEl] = useState(null);

  let emailAvatar = localStorage.getItem("emailAvatar");

  const handlePopClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const handleLogout = () => {
    localStorage.removeItem("emailAvatar");
    localStorage.removeItem("token");
    setLogout(true);
  };
  const handleSearch = (searchValue) => {
    setSearch(searchValue);
  };

  const handleView = () => {
    dispatch(listView());
  };

  useEffect(() => {
    dispatch(
      setFilteredNotes(
        myNotes.filter((item) => {
          return item.title.toLowerCase().includes(search.toLowerCase());
        })
      )
    );
  }, [search, myNotes]);

  return (
    <Grid
      container
      padding="2px"
      borderBottom="1px solid #e5e8e9" //#f1f3f4"
      borderTop="1px solid #e5e8e9"
      alignItems="center"
      justifyContent="space-evenly"
      InputProps={{
        style: {
          height: "68px",
        },
      }}
    >
      {/* <ThemeProvider theme={customTextField}> */}
      <Grid item padding="12px">
        <IconButton onClick={handleDrawerOpen}>
          <MenuIcon />
        </IconButton>
      </Grid>

      <Grid item>
        <img
          alt=""
          src={Logo}
          height="44px"
          width="42px"
          style={{ verticalAlign: "middle", padding: "0px 4px 0px 0px" }}
        />
      </Grid>

      <Grid item xs padding="0px 30px 0px 0px">
        <span className="fundooNotesFont">{title}</span>
      </Grid>

      <Grid item xs={6} padding="0 5% 0 0">
        <TextField
          onChange={(e) => handleSearch(e.target.value)}
          sx={{
            borderRadius: "20",
          }}
          //   variant="outlined"
          size="large"
          placeholder="Search"
          fullWidth
          InputProps={{
            style: {
              borderRadius: "8px",
              height: "48px",
              background: "#f1f3f4",
              border: "1px solid transparent",
            },
            startAdornment: (
              <InputAdornment>
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Grid>

      <Grid item>
        <IconButton>
          <RefreshIcon />
        </IconButton>
      </Grid>
      <Grid item>
      <IconButton>
      {!list ? (
          <ViewAgendaOutlinedIcon 
            fontSize="medium"
            onClick={handleView}
          />
        ) : (
          <GridViewIcon
            fontSize="medium"
            onClick={handleView}
          />
        )}
        </IconButton>
      </Grid>
      <Grid item xl padding="0px 0px 0px 0px">
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
      </Grid>
      <Grid item container xs>
        <div className='appAvatar' style={{paddingLeft:"3%"}}>
        <Grid
          item
          sx={{
            maxHeight: "40px",
            marginLeft: "auto",
            alignItems: "center",
            height: "40px",
          }}
        >
          <IconButton>
            <AppsOutlinedIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton onClick={handlePopClick}>
            <Avatar name={emailAvatar} size="32" round={true} />
          </IconButton>
          {/* {logOut && <Popup trigger={<button>LogOut</button>} position="right center">
    <div>Popup content here !!</div>
  </Popup>} */}
        </Grid>
        </div>
      </Grid>
      <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={handlePopClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Button onClick={handleLogout}>Logout</Button>
          </Popover>
          {logout ? <Redirect to="/login" /> : null}
    </Grid>
  );
};

export default Appbar;
