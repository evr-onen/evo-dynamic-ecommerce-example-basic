import { Divider, Grid, Typography } from "@mui/material"
import React from "react"
import { FaShippingFast } from "react-icons/fa"
import { RiRefund2Line, Ri24HoursLine } from "react-icons/ri"
import { useTheme } from "@mui/material"
const SliderTopModul = () => {
  const theme = useTheme()
  console.log(theme)
  return (
    <Grid container color={theme?.palette?.black?.main}>
      <Grid item xs={12} sm={4} display="flex" justifyContent="center" alignItems="center">
        <Grid container m="auto" justifyContent="center" columnSpacing={2} py="1.5625rem">
          <Grid item>
            <FaShippingFast fontSize="2rem" />
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" fontWeight="700" textTransform="uppercase">
              free shipping & return
            </Typography>
            <Typography variant="body2">Free shipping on all orders over $99</Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} sm={4} display="flex" justifyContent="center" alignItems="center">
        <Grid container m="auto" justifyContent="center" columnSpacing={2} py="1.5625rem">
          <Grid item>
            <RiRefund2Line fontSize="2rem" />
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" fontWeight="700" textTransform="uppercase">
              free shipping & return
            </Typography>
            <Typography variant="body2">Free shipping on all orders over $99</Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} sm={4} display="flex" justifyContent="center" alignItems="center">
        <Grid container m="auto" justifyContent="center" columnSpacing={2} py="1.5625rem">
          <Grid item>
            <Ri24HoursLine fontSize="2rem" />
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
