// ** React Core
import React from "react"

// ** Swiper imports
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper"

// ** Swiper CSS Imports
import "swiper/css"
import "swiper/css/pagination"

import Slide01 from "public/images/shop1_home_slider1.webp"
import Slide02 from "public/images/shop1_home_slider2.jpg"
import Slide03 from "public/images/shop1_home_slider3.jpg"
import Image from "next/image"
import { Box, Button, Grid, Typography } from "@mui/material"
const MiniSlider = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="miniSlider"
    >
      <SwiperSlide>
        <Box sx={{ display: "flex", justifyContent: "center" }} className="sliderItem">
          <Image src={Slide01} quality={100} objectFit="contain" className="slideImage" />
          <Typography variant="h4">Evren was Here!</Typography>
          <Button size="small" variant="contained">
            Bas Bana
          </Button>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box sx={{ display: "flex", justifyContent: "center" }} className="sliderItem">
          <Image src={Slide02} quality={100} objectFit="contain" className="slideImage" />
          <Typography variant="h4">Evren was Here!</Typography>
          <Button size="small" variant="contained">
            Bas Bana
          </Button>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box sx={{ display: "flex", justifyContent: "center" }} className="sliderItem">
          <Image src={Slide03} quality={100} objectFit="contain" className="slideImage" />
          <Typography variant="h4">Evren was Here!</Typography>
          <Button size="small" variant="contained">
            Bas Bana
          </Button>
        </Box>
      </SwiperSlide>
    </Swiper>
  )
}

export default MiniSlider
