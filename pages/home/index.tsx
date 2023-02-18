// ** React Core
import React from "react"

// ** MUI Imports
import { Box, Grid } from "@mui/material"

// ** Component Import
import SliderTopModul from "src/components/sections/home/sliderTopModul"
import SideMenu from "src/components/sections/home/SideMenu"
import MainSlider from "src/components/sections/home/MainSlider"
import SingleCommentSlider from "src/components/sections/home/SingleCommentSlider"
import DiscountImages from "src/components/sections/home/DiscountImages"
import FeaturedProducts from "src/components/sections/home/FeaturedProducts"
import NewsSlider from "src/components/sections/home/NewsSlider"
import OurAdvantage from "src/components/sections/home/OurAdvantage"
import SubscribeBlock from "src/components/sections/home/Subscribe"

const index = () => {
  return (
    <Grid container sx={{ maxWidth: "1200px", width: "100%" }} justifyContent="center" mx="auto">
      <Grid item xs={12} mb="25px">
        <Box border="0.5px solid #c9c9c9">{/* <SliderTopModul /> */}</Box>
      </Grid>
      <Grid item xs={12}>
        <Grid container columnSpacing={2} alignItems="flex-start">
          <Grid item xs={3}>
            <Grid container rowSpacing={4}>
              <Grid item xs={12} height="490px">
                <SideMenu />
              </Grid>
              <Grid item xs={12} mt="20px">
                {/* <SingleCommentSlider /> */}
              </Grid>
              <Grid item xs={12}>
                {/* <NewsSlider /> */}
              </Grid>{" "}
              <Grid item xs={12} marginTop="20px">
                {/* <SubscribeBlock /> */}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={9}>
            <Grid container rowSpacing={4}>
              <Grid item xs={12}>
                {/* <MainSlider /> */}
              </Grid>
              <Grid item xs={12} mt="20px">
                {/* <DiscountImages /> */}
              </Grid>
              <Grid item xs={12} mt="40px">
                {/* <FeaturedProducts /> */}
              </Grid>
              <Grid item xs={12} mt="20px">
                {/* <OurAdvantage /> */}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default index
