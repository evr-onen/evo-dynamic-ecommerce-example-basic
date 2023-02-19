// ** React Core
import React from "react"
import Image from "next/image"
import Link from "next/link"
// ** Swiper imports
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper"

import { useTheme } from "@mui/material"

// ** Swiper CSS Imports
import "swiper/css"
import "swiper/css/pagination"

import { Box, Button, Grid, Typography } from "@mui/material"

const NewsSlider = () => {
  const theme = useTheme()
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="miniSlider"
    >
      <SwiperSlide>
        <Grid container>
          <Grid item xs={12} position="relative" minHeight="210px">
            <Image src="/images/news/shop1_post4-400x300.jpg" layout="fill" objectFit="contain" />
          </Grid>
          <Grid item xs={12}>
            <Grid container height="200px">
              <Grid item xs={12}>
                <Link href="/">
                  <Typography
                    fontWeight="700"
                    fontSize="24px"
                    color={theme?.palette?.black?.main}
                    textAlign="center"
                    sx={{ "&:hover": { color: theme?.palette?.secondary?.main }, cursor: "pointer" }}
                  >
                    Fashion Trends
                  </Typography>
                </Link>
              </Grid>
              <Grid item xs={12}>
                <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, ab!</Typography>
              </Grid>
              <Grid item xs={12}>
                <Link href="/">
                  <Typography color={theme?.palette?.black?.main} fontWeight="700" textAlign="end" sx={{ textDecoration: "none", cursor: "pointer" }}>
                    read more...
                  </Typography>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </SwiperSlide>

      <SwiperSlide>
        <Grid container>
          <Grid item xs={12} position="relative" minHeight="210px">
            <Image src="/images/news/shop4_post1.jpg" layout="fill" objectFit="contain" />
          </Grid>
          <Grid item xs={12}>
            <Grid container height="200px">
              <Grid item xs={12}>
                <Link href="/">
                  <Typography
                    fontWeight="700"
                    fontSize="24px"
                    color={theme?.palette?.black?.main}
                    textAlign="center"
                    sx={{ "&:hover": { color: theme?.palette?.secondary?.main }, cursor: "pointer" }}
                  >
                    Fashion Trends
                  </Typography>
                </Link>
              </Grid>
              <Grid item xs={12}>
                <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, ab!</Typography>
              </Grid>
              <Grid item xs={12}>
                <Link href="/">
                  <Typography color={theme?.palette?.black?.main} fontWeight="700" textAlign="end" sx={{ textDecoration: "none", cursor: "pointer" }}>
                    read more...
                  </Typography>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </SwiperSlide>
      <SwiperSlide>
        <Grid container>
          <Grid item xs={12} position="relative" minHeight="210px">
            <Image src="/images/news/shop4_post3.jpg" layout="fill" objectFit="contain" />
          </Grid>
          <Grid item xs={12}>
            <Grid container height="200px">
              <Grid item xs={12}>
                <Link href="/">
                  <Typography
                    fontWeight="700"
                    fontSize="24px"
                    color={theme?.palette?.black?.main}
                    textAlign="center"
                    sx={{ "&:hover": { color: theme?.palette?.secondary?.main }, cursor: "pointer" }}
                  >
                    Fashion Trends
                  </Typography>
                </Link>
              </Grid>
              <Grid item xs={12}>
                <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, ab!</Typography>
              </Grid>
              <Grid item xs={12}>
                <Link href="/">
                  <Typography color={theme?.palette?.black?.main} fontWeight="700" textAlign="end" sx={{ textDecoration: "none", cursor: "pointer" }}>
                    read more...
                  </Typography>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </SwiperSlide>
    </Swiper>
  )
}

export default NewsSlider
