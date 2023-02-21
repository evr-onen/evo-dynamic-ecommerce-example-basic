// ** React Core
import { forwardRef, useState, createRef, SyntheticEvent } from "react"

// ** MUI import
import { Tabs, Tab, Grid, Box, Card, CardContent, useTheme, useMediaQuery } from "@mui/material"

// ** Components
import CreateProduct from "./create/createProduct"
import CreateVariant from "./create/createVariant"

// ** Types
interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

// ** Sub Funcs
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props
  return (
    <Box
      sx={{ width: "100%", padding: "30px" }}
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Grid container>
          <Grid item xs={12}>
            {children}
          </Grid>
        </Grid>
      )}
    </Box>
  )
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  }
}

const CreateTab = forwardRef((props, inputRef) => {
  const [value, setValue] = useState(0)
  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.down("md"))
  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Grid item sx={{ flexGrow: 1, bgcolor: "background.paper", display: "flex", minHeight: isMd ? "10px" : "60vh", width: "100%" }}>
      <Grid container>
        <Grid item xs={12} md={2}>
          <Tabs
            orientation={isMd ? "horizontal" : "vertical"}
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{ borderRight: 1, borderColor: "divider", width: "100%", height: "100%" }}
          >
            <Tab label="Create Product" {...a11yProps(0)} sx={{ color: "#796c7f" }} />
            <Tab label="Create Variant Type" {...a11yProps(1)} sx={{ color: "#796c7f" }} />
            <Tab label="Create Product Properties" {...a11yProps(2)} sx={{ color: "#796c7f" }} />
          </Tabs>
        </Grid>
        <Grid item xs={12} md={10}>
          <Grid container>
            <Grid item xs={12}>
              <TabPanel value={value} index={0}>
                <CreateProduct ref={inputRef} />
              </TabPanel>
            </Grid>
            <Grid item xs={12}>
              <TabPanel value={value} index={1}>
                <CreateVariant ref={inputRef} />
              </TabPanel>
            </Grid>
            <Grid item xs={12}>
              <TabPanel value={value} index={2}>
                Product Properties
              </TabPanel>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
})

export default CreateTab
