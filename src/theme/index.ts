import { PaletteOptions, createTheme, css, ThemeOptions, responsiveFontSizes, Breakpoints } from "@mui/material/styles"
import createBreakpoints from "@mui/system/createTheme/createBreakpoints"
const breakpoints = createBreakpoints({})
import { purple } from "@mui/material/colors"
// import overrides from "./overrides"
export type AllowedTheme = NonNullable<PaletteOptions["mode"]>

export const DEFAULT_THEME: AllowedTheme = "light"

export let lightTheme: ThemeOptions = createTheme()
lightTheme = createTheme(lightTheme, {
  palette: {
    mode: "light",
    black: {
      main: "#222529",
    },
    white: {
      main: "#fefefe",
    },
    gray: {
      main: "#796c7f",
    },

    primary: {
      main: "#0088CC",
    },
    secondary: {
      main: "#0088CC",
    },
    text: {
      primary: "#796c7f",
      disabled: "rgba(216,213,213,0.38)",
      secondary: "#BDE1F5",
    },
    divider: "rgba(224,190,190,0.18)",
    background: {
      paper: "rgb(247,247,247)",
    },
  },
  typography: {
    fontFamily: "Roboto Condensed",
    h1: {
      fontSize: "6rem",
      [breakpoints.down("sm")]: {
        fontSize: "4rem",
      },
    },
    h2: {
      fontSize: "3.75rem",
      [breakpoints.down("md")]: {
        fontSize: "2.5rem",
      },
    },
    h3: {
      fontSize: "3rem",
      [breakpoints.down("md")]: {
        fontSize: "2rem",
      },
    },
    h4: {
      fontSize: "2.125rem",
      [breakpoints.down("md")]: {
        fontSize: "1.60rem",
      },
    },
    h5: {
      fontSize: "1.5rem",
      [breakpoints.down("md")]: {
        fontSize: "1rem",
      },
    },
    h6: {
      fontSize: "1.25rem",
      [breakpoints.down("md")]: {
        fontSize: "0.65rem",
      },
    },
    body1: {
      fontSize: "1rem",
      [breakpoints.down("md")]: {
        fontSize: "0.875rem",
      },
    },
    body2: {
      fontSize: "0.875rem",
      [breakpoints.down("md")]: {
        fontSize: "0.70rem",
      },
    },
  },
  components: {
    MuiCard: {
      defaultProps: {
        elevation: 12,
      },
      styleOverrides: {
        root: {},
      },
    },
    MuiTypography: {
      styleOverrides: {
        // h5: {
        //   "font-size": "36px",
        // },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: "#111333",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            background: "#4d4ddc",
            color: "#fdf2f2",
          },
          "&.Mui-selected:hover": {
            backgroundColor: "#4d4ddc",
            color: "#fdf2f2",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: "bold",
          letterSpacing: "0.275px",
          // "&:hover": {
          //   background: "rgba(247,247,247,0.1)",
          // },
        },
      },
    },
    MuiIconButton: {
      defaultProps: {
        size: "small",
      },
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            color: "#6adc4d",
          },
          "&:hover": {
            background: "rgba(247,247,247,0.1)",
          },
        },
      },
    },
    MuiGrid: {
      defaultProps: {},
    },
  },
})

export const darkTheme = createTheme({
  palette: {
    mode: "light",
    black: {
      main: "#222529",
    },
    white: {
      main: "#fefefe",
    },
    gray: {
      main: "#796c7f",
    },

    primary: {
      main: "#0088CC",
    },
    secondary: {
      main: "#0088CC",
    },
    text: {
      primary: "#796c7f",
      disabled: "rgba(216,213,213,0.38)",
      secondary: "#BDE1F5",
    },
    divider: "rgba(224,190,190,0.18)",
    background: {
      paper: "rgb(247,247,247)",
    },
  },
  typography: {
    fontFamily: "Roboto Condensed",
  },
  components: {
    MuiCard: {
      defaultProps: {
        elevation: 12,
      },
      styleOverrides: {
        root: {},
      },
    },
    MuiTypography: {
      styleOverrides: {
        // h5: {
        //   "font-size": "36px",
        // },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: "#111333",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            background: "#4d4ddc",
            color: "#fdf2f2",
          },
          "&.Mui-selected:hover": {
            backgroundColor: "#4d4ddc",
            color: "#fdf2f2",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: "bold",
          letterSpacing: "0.275px",
          // "&:hover": {
          //   background: "rgba(247,247,247,0.1)",
          // },
        },
      },
    },
    MuiIconButton: {
      defaultProps: {
        size: "small",
      },
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            color: "#6adc4d",
          },
          "&:hover": {
            background: "rgba(247,247,247,0.1)",
          },
        },
      },
    },
    MuiGrid: {
      defaultProps: {},
    },
  },
})

export const globalStyles = {}
