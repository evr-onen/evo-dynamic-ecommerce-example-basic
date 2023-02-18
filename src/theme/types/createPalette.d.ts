import * as createPalette from "@mui/material/styles/createPalette"

declare module "@mui/material/styles/createPalette" {
  interface PaletteOptions {
    black?: PaletteColorOptions
    white?: PaletteColorOptions
    gray?: PaletteColorOptions
  }
  interface Palette {
    black: PaletteColor
    white: PaletteColor
    gray: PaletteColor
  }
}

declare module "@mui/material" {
  interface ButtonPropsColorOverrides {
    black
    gray
  }
  interface IconButtonPropsColorOverrides {
    white
  }
}
