import { useTheme } from "next-themes"
import { createTheme, GlobalStyles, responsiveFontSizes } from "@mui/material"
import { CssBaseline, ThemeProvider, ThemeOptions } from "@mui/material"
import { darkTheme, globalStyles, lightTheme } from "../../theme"
import { FC, useEffect, useState } from "react"

const MUIThemeProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const { resolvedTheme } = useTheme()
  const [currentTheme, setCurrentTheme] = useState<ThemeOptions>(lightTheme)
  let theme = createTheme()
  theme = responsiveFontSizes(theme)

  useEffect(() => {
    resolvedTheme === "dark" ? setCurrentTheme(darkTheme) : setCurrentTheme(lightTheme)
  }, [resolvedTheme])
  console.log(currentTheme)
  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <GlobalStyles styles={globalStyles} />
      {children}
    </ThemeProvider>
  )
}

export default MUIThemeProvider
