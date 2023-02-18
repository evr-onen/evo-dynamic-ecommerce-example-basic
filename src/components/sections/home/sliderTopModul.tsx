import { Divider, Grid, Typography } from "@mui/material"
import React from "react"
import { FaShippingFast } from "react-icons/fa"
import { RiRefund2Line, Ri24HoursLine } from "react-icons/ri"
import { useTheme } from "@mui/material"
const SliderTopModul = () => {
  const theme = useTheme()
  return (
    <Grid container color={theme.palette.black?.main}>
      <Grid item xs={4} display="flex" justifyContent="center" alignItems="center">
        <Grid container m="auto" justifyContent="center" columnSpacing={2} py="25px">
          <Grid item>
            <FaShippingFast fontSize="32px" />
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" fontWeight="700" textTransform="uppercase">
              free shipping & return
            </Typography>
            <Typography variant="body2">Free shipping on all orders over $99</Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={4} display="flex" justifyContent="center" alignItems="center">
        <Grid container m="auto" justifyContent="center" columnSpacing={2} py="25px">
          <Grid item>
            <RiRefund2Line fontSize="32px" />
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" fontWeight="700" textTransform="uppercase">
              free shipping & return
            </Typography>
            <Typography variant="body2">Free shipping on all orders over $99</Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={4} display="flex" justifyContent="center" alignItems="center">
        <Grid container m="auto" justifyContent="center" columnSpacing={2} py="25px">
          <Grid item>
            <Ri24HoursLine fontSize="32px" />
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" fontWeight="700" textTransform="uppercase">
              free shipping & return
            </Typography>
            <Typography variant="body2">Free shipping on all orders over $99</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default SliderTopModul
