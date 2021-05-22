import { createMuiTheme } from "@material-ui/core/styles";

const defaultTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#0052D4",
    },
    secondary: {
      main: "#4364F7",
    },
  },
  typography: {
    fontFamily: ["Segoe UI", "sans-serif"].join(","),
  },
});

export default defaultTheme;
