import "../css/dashboard.scss";
import Grid from "@mui/material/Grid";
import MenuIcon from "@mui/icons-material/Menu";
import TextField from "@mui/material/TextField";
import Logo from "../assets/Logo.png";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import RefreshIcon from '@mui/icons-material/Refresh';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ViewAgendaOutlinedIcon from '@mui/icons-material/ViewAgendaOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import Avatar from 'react-avatar';

// const customTextField = createTheme({
//   components: {
//     styleOverrides: {
//       MuiOutlinedInput: {
//         contained: {
//           borderRadius: "30",
//           border: "4px solid red",
//         },
//         root: {
//           borderRadius: "30",
//           border: "4px solid red",
//         },
//       },
//       MuiInputBase: {
//         root: {
//           borderRadius: "30",
//           border: "4px solid red",
//         },
//         formControl: {
//           borderRadius: "30",
//           border: "4px solid red",
//         },
//       },
//       MuiTextField: {
//         contained: {
//           borderRadius: "30",
//           border: "4px solid red",
//         },
//         root: {
//           borderRadius: "30",
//           border: "4px solid red",
//         },
//       },
//       MuiFormControl: {
//         fullWidth: {
//           borderRadius: "30",
//           border: "4px solid red",
//         },
//         root: {
//           borderRadius: "30",
//           border: "4px solid red",
//         },
//       },
//     },
//   },
// });

export const Appbar = ({ handleDrawerOpen }) => {
  return (
    <Grid
      container
      padding="2px"
      borderBottom="1px solid #e5e8e9" //#f1f3f4"
      borderTop="1px solid #e5e8e9"
      alignItems="center"
      justifyContent="space-evenly"
      
        
      InputProps={{
        style:{
            height:'68px'
        }}}
    >
     
      {/* <ThemeProvider theme={customTextField}> */}
        <Grid item padding="12px">
          <IconButton  onClick={handleDrawerOpen}>
            <MenuIcon />
          </IconButton>
        </Grid>

        <Grid item >
          <img
            alt=""
            src={Logo}
            height="44px"
            width="42px"
            style={{ verticalAlign: "middle", padding: "0px 4px 0px 0px" }}
          />
        </Grid>

        <Grid item xs padding="0px 30px 0px 0px">
          <span className="fundooNotesFont">FundooNotes</span>
        </Grid>

        <Grid item xs={7} padding="0px 10% 0px 0px" >
          <TextField
          sx={{
              borderRadius:'20'
          }}
        //   variant="outlined"
            size="large"
            placeholder="Search"
            fullWidth
            InputProps={{
                style:{
                    borderRadius:'8px',
                    height:'48px',
                    background: '#f1f3f4',
                    border: '1px solid transparent'
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
 
        <Grid item >
            <IconButton>
        <RefreshIcon/>
        </IconButton>
        </Grid>
        <Grid item >
            <IconButton>
        < ViewAgendaOutlinedIcon/>
        </IconButton>
        </Grid>
        <Grid item  xl padding="0px 0px 0px 0px">
            <IconButton>
        < SettingsOutlinedIcon/>
        </IconButton>
        </Grid>
        <div className='appAvatar'>
        <Grid item sx={{maxHeight:'40px'}}>
            <IconButton>
        <  AppsOutlinedIcon/>
        </IconButton>
        </Grid>
        <Grid item  position='relative' >
            <IconButton>
        < Avatar name="Tushar"  size="32" round={true}/>
        </IconButton>
        </Grid>
        </div>
      {/* </ThemeProvider> */}
   </Grid>
  );
}

export default Appbar;