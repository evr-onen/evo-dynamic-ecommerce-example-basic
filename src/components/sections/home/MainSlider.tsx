// ** React Core
import React from "react"

// ** Swiper imports
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation } from "swiper"

// ** Swiper CSS Imports
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import Slide01 from "public/images/shop1_home_slider1.webp"
import Slide02 from "public/images/shop1_home_slider2.jpg"
import Slide03 from "public/images/shop1_home_slider3.jpg"
import Image from "next/image"
import { Box, Button, Grid, Typography } from "@mui/material"

const MainSlider = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={0}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <Box sx={{ display: "flex", justifyContent: "center" }} className="sliderItem">
          <Image src={Slide01} quality={100} objectFit="cover" width={896} height={489} className="slideImage" />
          <Typography variant="h4">Evren was Here!</Typography>
          <Button variant="contained">Bas Bana</Button>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box sx={{ display: "flex", justifyContent: "center" }} className="sliderItem">
          <Image src={Slide02} quality={100} objectFit="cover" width={896} height={489} className="slideImage" />
          <Typography variant="h4">Evren was Here!</Typography>
          <Button variant="contained">Bas Bana</Button>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box sx={{ display: "flex", justifyContent: "center" }} className="sliderItem">
          <Image src={Slide03} quality={100} objectFit="cover" width={896} height={489} className="slideImage" />
          <Typography variant="h4">Evren was Here!</Typography>
          <Button variant="contained">Bas Bana</Button>
        </Box>
      </SwiperSlide>
    </Swiper>
  )
}

export default MainSlider
