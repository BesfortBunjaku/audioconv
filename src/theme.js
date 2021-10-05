import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#474747",
      main: "#202020",
      dark: "#000000",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ffe44f",
      main: "#efb20c",
      dark: "#b88300",
      contrastText: "#fff",
    },
  },
});

export default theme;
