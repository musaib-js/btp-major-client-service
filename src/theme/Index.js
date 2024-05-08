import { createTheme } from '@mui/material/styles';
import { green, purple, red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: "#098fff", 
    },
    secondary: {
      main: green[500],
    },
    error: {
      main: red[50],
    },
  },
  // shape: {
  //   borderRadius: '25px',
  // },
});

export default theme;