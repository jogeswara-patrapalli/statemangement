import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#6C5DD3",
      contrastText: "#E8E8E9",
    },
    secondary: {
      main: "#2D2D30",
      contrastText: "#C9C8CC",
    },
    error:{
      main: "#201F24",
      light:'#28272b',
      contrastText: "#C9C8CC",
    }
  },
  typography: {
    fontFamily: "Gilroy",

    h1: {
      fontWeight: 700,
      fontSize: 36,
      color:"#E8E7F0"
    },
    h2: {
      fontWeight: 600,
      fontSize: 24,
      color:"#E8E7F0"
    },
    h3: {
      fontWeight: 500,
      fontSize: 18,
      color:"#A5A5A6"
    },
    body1: {
      fontSize: 16,
      fontWeight: 600,
      color:"#E8E7F0"
    },
    body2: {
      fontSize: 14,
      fontWeight: 600,
    },
    caption: {
      fontSize: 12,
      fontWeight: 500,
    },

    subtitle1: {
      fontSize: 16,
      fontWeight: 600,
      textTransform: "capitalize",
    },
    subtitle2: {
      fontSize: 14,
      fontWeight: 500,
      color:"#E8E7F0",
      textTransform: "capitalize",
    },
    button: {
      textTransform: "capitalize",
    },
  },
});
