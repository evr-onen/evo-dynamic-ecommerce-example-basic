// ** React Imports
import { Fragment, SyntheticEvent, useEffect, useState } from "react"

// ** MUI Imports
import { Menu, MenuItem, IconButton } from "@mui/material"
import { useTheme } from "@mui/material"
// ** Icons Imports
import Translate from "mdi-material-ui/Translate"

// ** Third Party Import
import { useTranslation } from "react-i18next"

// ** Contex API
import { useGlobalContext } from "src/contexts"

const LangDropdown = () => {
  // ** State
  const [anchorEl, setAnchorEl] = useState<any>(null)

  // ** Calls
  const { setSettings, settings } = useGlobalContext()
  const theme = useTheme()
  // ** Hook
  const { i18n } = useTranslation()

  // ** Vars
  const { direction } = settings
  useEffect(() => {
    if (i18n.language === "ar" && direction === "ltr") {
      setSettings({ ...settings, direction: "ltr" })
    } else if (i18n.language === "ar" || direction === "rtl") {
      setSettings({ ...settings, direction: "rtl" })
    } else {
      setSettings({ ...settings, direction: "ltr" })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.language, direction])

  const handleLangDropdownOpen = (event: SyntheticEvent) => {
    setAnchorEl(event.currentTarget)
  }

  const handleLangDropdownClose = () => {
    setAnchorEl(null)
  }

  const handleLangItemClick = (lang: "en" | "tr") => {
    i18n.changeLanguage(lang)
    handleLangDropdownClose()
  }

  return (
    <Fragment>
      <IconButton aria-haspopup="true" aria-controls="customized-menu" onClick={handleLangDropdownOpen}>
        <Translate sx={{ color: theme.palette.black.main }} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleLangDropdownClose}
        className="evo"
        sx={{ py: 0, "& .MuiMenu-paper": { mt: 4, minWidth: 130 } }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: direction === "ltr" ? "right" : "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: direction === "ltr" ? "right" : "left",
        }}
        variant="menu"
      >
        <MenuItem
          selected={i18n.language === "en"}
          onClick={() => {
            handleLangItemClick("en")
            setSettings({ ...settings, direction: "ltr" })
          }}
        >
          English
        </MenuItem>
        <MenuItem
          selected={i18n.language === "tr"}
          onClick={() => {
            handleLangItemClick("tr")
            setSettings({ ...settings, direction: "ltr" })
          }}
        >
          Türkçe
        </MenuItem>
      </Menu>
    </Fragment>
  )
}

export default LangDropdown
