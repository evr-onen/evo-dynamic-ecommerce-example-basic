import { Box, Grid, Typography } from "@mui/material"
import Image from "next/image"
import React from "react"

import Image1 from "public/images/discount/shop1_home_ads1.jpg"
import Image2 from "public/images/discount/shop1_home_ads2.jpg"
import Image3 from "public/images/discount/shop1_home_ads3.jpg"

const DiscountImages = () => {
  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item position="relative" sx={{ background: "#ECECEC" }}>
        <Image src={Image1} quality={100} height={170} objectFit="contain" />
        <Typography variant="h5" fontWeight={700} sx={{ position: "absolute", top: "10%", left: "20%" }}>
          Porto Watches
        </Typography>
        <Box sx={{ position: "absolute", top: "28%", left: "15%" }} display="flex" alignItems="center">
          <Typography sx={{ textDecoration: "line-through" }} fontWeight={700} fontSize="20px">
            20%
          </Typography>
          <Typography ml={1} fontWeight={700} fontSize="36px">
            30%
          </Typography>
          <Typography ml={1} fontWeight={900} fontSize="28px">
            OFF
          </Typography>
        </Box>
      </Grid>
      <Grid item position="relative" sx={{ background: "#ECECEC" }}>
        <Image src={Image2} quality={100} height={170} objectFit="contain" />
        <Typography variant="h6" fontWeight={700} sx={{ position: "absolute", top: "30%", left: "25%" }}>
          DEAL PROMOS
        </Typography>{" "}
        <Typography variant="body2" fontWeight={700} sx={{ position: "absolute", top: "50%", left: "30%" }}>
          STARTING AT $99
        </Typography>
      </Grid>
      <Grid item position="relative" sx={{ background: "#ECECEC" }}>
        <Image src={Image3} quality={100} height={170} objectFit="contain" />
        <Typography variant="h4" fontWeight={700} sx={{ position: "absolute", top: "15%", left: "42%" }}>
          Handbags
        </Typography>
        <Typography variant="body2" fontWeight={700} sx={{ position: "absolute", top: "38%", left: "47%" }}>
          STARTING AT $99
        </Typography>
      </Grid>
    </Grid>
  )
}

export default DiscountImages

/* <Image src={Image1} quality={100} height={111} objectFit="cover" />    // scale i arttirip heryeri dolduruyor 
<Image src={Image1} quality={100} height={111} objectFit="fill" />        // scale bozulmasina ragmen doldurur 
<Image src={Image1} quality={100} height={111} objectFit="contain" />     // width ya da height icin auto denmis oluyor
<Image src={Image1} quality={100} height={111} objectFit="scale-down" />
<Image src={Image1} quality={100} height={111} objectFit="none" /> */
