// ** Core React
import React from "react"
import Image from "next/image"

// ** Swiper imports
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

// ** MUI Imports
import { Box, Grid } from "@mui/material"

const TopSlider = () => {
  return (
    <Grid item xs={12}>
      <Swiper loop={true} spaceBetween={10} className="ProductSwiper">
        <SwiperSlide>
          <Box position="relative" height="284px">
            <Image src="/images/archPage/shop1_shop_slider1.jpg" layout="fill" objectFit="cover" />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box position="relative" height="284px">
            <Image src="/images/archPage/shop1_shop_slider1.jpg" layout="fill" objectFit="cover" />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box position="relative" height="284px">
            <Image src="/images/archPage/shop1_shop_slider1.jpg" layout="fill" objectFit="cover" />
          </Box>
        </SwiperSlide>
      </Swiper>
    </Grid>
  )
}

export default TopSlider
