import * as React from "react"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import { Card, CardContent } from "@mui/material"

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div role="tabpanel" hidden={value !== index} id={`vertical-tabpanel-${index}`} aria-labelledby={`vertical-tab-${index}`} {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  }
}

const ListTab = () => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ flexGrow: 1, bgcolor: "background.paper", display: "flex", height: 224 }}>
      <Tabs orientation="vertical" variant="scrollable" value={value} onChange={handleChange} aria-label="Vertical tabs example" sx={{ borderRight: 1, borderColor: "divider", maxWidth: "150px", width: "100%" }}>
        <Tab label="Product" {...a11yProps(0)} sx={{ color: "#796c7f" }} />
        <Tab label="Categories" {...a11yProps(1)} sx={{ color: "#796c7f" }} />
        <Tab label="Product Properties" {...a11yProps(2)} sx={{ color: "#796c7f" }} />
      </Tabs>
      <TabPanel value={value} index={0}>
        Product
      </TabPanel>
      <TabPanel value={value} index={1}>
        Categories
      </TabPanel>
      <TabPanel value={value} index={2}>
        Product Properties
      </TabPanel>
    </Box>
  )
}

export default ListTab
