import { createMuiTheme } from '@material-ui/core/styles';
import { primaryColor, secondaryColor, textColor } from './colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText: textColor
    },
    secondary: {
      main: secondaryColor,
      contrastText: textColor,
    },
    text: {
        primary: textColor
    }
  }
});

export default theme

