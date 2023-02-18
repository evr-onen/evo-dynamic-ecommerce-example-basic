import { Box, Grid, Typography } from "@mui/material"
import React from "react"
import { useTheme } from "@mui/material"
import { SlEarphonesAlt } from "react-icons/sl"
import { BsCreditCard2Back } from "react-icons/bs"
import { SlActionUndo } from "react-icons/sl"

const OurAdvantage = () => {
  const theme = useTheme()
  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid container columnSpacing={4}>
          <Grid item xs={4} height="300px" p="20px">
            <Grid container justifyContent="center">
              <Grid item xs={12} justifyContent="center" alignItems="center" display="flex" mb="20px" color={theme.palette.black.main}>
                <Box border="2px solid" color={theme.palette.secondary.main} borderRadius="500px" display="flex" width="85px" height="85px" justifyContent="center" alignItems="center">
                  <SlEarphonesAlt fontSize="35px" />
                </Box>
              </Grid>
              <Grid item mb="20px">
                <Grid container>
                  <Grid item xs={12}>
                    <Typography textAlign="center" textTransform="uppercase" color={theme.palette.black.main} fontWeight="700">
                      customer support
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography textTransform="capitalize" textAlign="center">
                      Need Assistence?
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Typography textAlign="center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapib.</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4} height="500px" p="20px">
            <Grid container justifyContent="center">
              <Grid item xs={12} justifyContent="center" alignItems="center" display="flex" mb="20px" color={theme.palette.black.main}>
                <Box border="2px solid" color={theme.palette.secondary.main} borderRadius="500px" display="flex" width="85px" height="85px" justifyContent="center" alignItems="center">
                  <BsCreditCard2Back fontSize="35px" />
                </Box>
              </Grid>
              <Grid item mb="20px">
                <Grid container>
                  <Grid item xs={12}>
                    <Typography textAlign="center" textTransform="uppercase" color={theme.palette.black.main} fontWeight="700">
                      SECURED PAYMENT
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography textTransform="capitalize" textAlign="center">
                      Safe & Fast
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Typography textAlign="center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapib.</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4} height="500px" p="20px">
            <Grid container justifyContent="center">
              <Grid item xs={12} justifyContent="center" alignItems="center" display="flex" mb="20px" color={theme.palette.black.main}>
                <Box border="2px solid" color={theme.palette.secondary.main} borderRadius="500px" display="flex" width="85px" height="85px" justifyContent="center" alignItems="center">
                  <SlActionUndo fontSize="35px" />
                </Box>
              </Grid>
              <Grid item mb="20px">
                <Grid container>
                  <Grid item xs={12}>
                    <Typography textAlign="center" textTransform="uppercase" color={theme.palette.black.main} fontWeight="700">
                      RETURNS
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography textTransform="capitalize" textAlign="center">
                      Easy & Free
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Typography textAlign="center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapib.</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default OurAdvantage
