// ** React Core
import React from "react"
import Image from "next/image"

// ** Swiper imports
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper"

import { useTheme } from "@mui/material"

// ** Swiper CSS Imports
import "swiper/css"
import "swiper/css/pagination"

import { Box, Button, Grid, Typography } from "@mui/material"
const SingleCommentSlider = () => {
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
        <Grid container border={`5px solid ${theme.palette.primary?.main}`} minHeight={200} p="15px">
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={12}>
                <Typography textAlign="center" fontWeight="600" fontSize="24px" color={theme.palette.black?.main}>
                  John Smith
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography textAlign="center" fontWeight="600">
                  Simple User
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container height="150px" position="relative">
              <Grid item>
                <Typography fontSize="32px" fontWeight="700" position="absolute" left="5%" top="10px">
                  ``
                </Typography>
              </Grid>
              <Grid item>
                <Typography textAlign="center" fontWeight="600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quas?
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </SwiperSlide>{" "}
      <SwiperSlide>
        <Grid container border={`5px solid ${theme.palette.primary?.main}`} minHeight={200} p="15px">
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={12}>
                <Typography textAlign="center" fontWeight="600" fontSize="24px" color={theme.palette.black?.main}>
                  John Smith
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography textAlign="center" fontWeight="600">
                  Simple User
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container height="150px" position="relative">
              <Grid item>
                <Typography fontSize="32px" fontWeight="700" position="absolute" left="5%" top="10px">
                  ``
                </Typography>
              </Grid>
              <Grid item>
                <Typography textAlign="center" fontWeight="600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quas?
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </SwiperSlide>{" "}
      <SwiperSlide>
        <Grid container border={`5px solid ${theme.palette.primary?.main}`} minHeight={200} p="15px">
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={12}>
                <Typography textAlign="center" fontWeight="600" fontSize="24px" color={theme.palette.black?.main}>
                  John Smith
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography textAlign="center" fontWeight="600">
                  Simple User
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container height="150px" position="relative">
              <Grid item>
                <Typography fontSize="32px" fontWeight="700" position="absolute" left="5%" top="10px">
                  ``
                </Typography>
              </Grid>
              <Grid item>
                <Typography textAlign="center" fontWeight="600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quas?
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </SwiperSlide>
    </Swiper>
  )
}

export default SingleCommentSlider
