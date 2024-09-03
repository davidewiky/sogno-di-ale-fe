import { IBM_Plex_Sans as GoogleFont } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { green, lightBlue, orange, red } from "@mui/material/colors";
import { itIT } from "@mui/material/locale";

const ibmPlex = GoogleFont({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["sans-serif"],
});

const brightBlue = "#1194d2";

// Copied from nexus mui-theme
export const theme = createTheme(
  {
    palette: {
      mode: "light",
      primary: {
        main: lightBlue[900],
        light: lightBlue[50],
      },
      secondary: {
        main: brightBlue,
      },
      error: {
        main: red[700],
        light: red[400],
        dark: red[700],
      },
      success: {
        main: green[800],
        light: green[500],
        dark: green[900],
      },
      warning: {
        main: orange[800],
        light: orange[500],
        dark: orange[900],
      },
      info: {
        main: lightBlue[700],
        light: lightBlue[600],
        dark: lightBlue[900],
      },
    },
    typography: {
      fontFamily: ibmPlex.style.fontFamily,
    },
    components: {
      MuiTabs: {
        styleOverrides: {
          indicator: {
            height: "4px",
            borderRadius: "5px",
            backgroundColor: brightBlue,
          },
        },
      },
      MuiTab: {
        styleOverrides: {
          root: {
            fontSize: "1rem",
            "&.Mui-selected": {
              color: brightBlue,
            },
          },
        },
      },
    },
  },
  itIT,
);
