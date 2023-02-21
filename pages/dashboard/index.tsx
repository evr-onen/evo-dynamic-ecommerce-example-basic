// ** React Core
import { forwardRef, useState } from "react"

// ** MUI Imports
import { Box, Card, CardContent, Grid, Tab, Tabs, Typography } from "@mui/material"

// ** Components
import CreateTab from "src/components/dashboard/create"
import DashboardTab from "src/components/dashboard/dashboard"
import ListTab from "src/components/dashboard/list"

// ** Types
interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  }
}
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  )
}
const index = forwardRef((props, ref) => {
  const [value, setValue] = useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }
  return (
    <Grid container justifyContent="center">
      <Grid item maxWidth="1200px" width="100%" minHeight="800px">
        <Grid container>
          <Grid item xs={12} sx={{ borderBottom: 1, borderColor: "divider", width: "100%" }} color="#796c7f">
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={{ width: "100%" }}>
              <Tab label="Dashboard" {...a11yProps(0)} sx={{ color: "#796c7f" }} />
              <Tab label="List" {...a11yProps(1)} sx={{ color: "#796c7f" }} />
              <Tab label="Create" {...a11yProps(2)} sx={{ color: "#796c7f" }} />
            </Tabs>
            <Grid item xs={12}>
              <Grid container>
                <Grid item xs={12}>
                  <TabPanel value={value} index={0}>
                    <Grid container>
                      <DashboardTab />
                    </Grid>
                  </TabPanel>
                </Grid>
                <Grid item xs={12}>
                  <TabPanel value={value} index={1}>
                    <Grid container>
                      <ListTab />
                    </Grid>
                  </TabPanel>
                </Grid>
                <Grid item xs={12}>
                  <TabPanel value={value} index={2}>
                    <Grid container>
                      <CreateTab ref={ref} />
                    </Grid>
                  </TabPanel>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
})

export default index
