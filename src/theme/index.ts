import { PaletteOptions, createTheme, css, ThemeOptions } from "@mui/material/styles"
import { purple } from "@mui/material/colors"
// import overrides from "./overrides"
export type AllowedTheme = NonNullable<PaletteOptions["mode"]>

export const DEFAULT_THEME: AllowedTheme = "light"
import { useTheme } from "@mui/material/styles"

export const lightTheme: ThemeOptions = createTheme({
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
      secondary: "#BDE1F5",
    },
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

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#4d4ddc",
    },
    secondary: {
      main: "#afafd2",
    },
    background: {
      default: "#111333",
      paper: "#141b60",
    },
    text: {
      secondary: "#f1bcbc",
      disabled: "rgba(216,213,213,0.38)",
      primary: "#efefef",
    },
    divider: "rgba(224,190,190,0.18)",
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
          borderColor: "#fdf2f2",
        },
      },
    },

    // color: "#6adc4d;",
    MuiTabs: {
      styleOverrides: {
        indicator: {
          background: "#6adc4d",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            color: "#6adc4d",
          },
          "&:hover": {
            color: "#6adc4d",
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            color: "#6adc4d",
          },
          "&:hover": {
            color: "#6adc4d",
          },
        },
      },
    },
  },
})

export const globalStyles = {}
