// ** React Core
import React from "react"
import Image from "next/image"

// ** MUI imports
import { Box, Grid, Typography, IconButton, Stack, Button } from "@mui/material"
import { useTheme } from "@mui/material"
// ** Images
import FooterImage from "public/images/footer/shop1_footer_logo.png"

// ** Icons
import { FaFacebookF } from "react-icons/fa"
import { BsTwitter, BsInstagram } from "react-icons/bs"
import Link from "next/link"

const index = () => {
  const theme = useTheme()
  return (
    <Grid container marginTop="50px">
      <Grid item xs={12} sx={{ background: "#222529" }}>
        <Grid container>
          <Grid item mx="auto" maxWidth="1200px" width="100%" minHeight="450px" alignItems="center" display="flex">
            <Grid container>
              <Grid item xs={3} px="20px">
                <Grid container height="380px" alignContent="start">
                  <Grid item xs={12} height="40px">
                    <Typography fontSize="18px" textTransform="uppercase" color="#fff" fontWeight="700">
                      about us
                    </Typography>
                  </Grid>
                  <Grid item xs={12} mb="20px">
                    <Box display="flex" position="relative">
                      <Image src={FooterImage} height={55} objectFit="contain" />
                    </Box>
                  </Grid>
                  <Grid item>
                    <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapibus lacus. Duis nec vestibulum magna, et dapibus lacus.</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={3} px="20px">
                <Grid container height="380px" alignContent="start">
                  <Grid item xs={12} height="40px">
                    <Typography fontSize="18px" textTransform="uppercase" color="#fff" fontWeight="700">
                      contact info
                    </Typography>
                  </Grid>
                  <Grid item xs={12} mb="20px">
                    <Typography fontSize="18px" textTransform="uppercase" color="#fff">
                      address :
                    </Typography>
                    <Typography fontSize="18px">123 Street Name, City, England</Typography>
                  </Grid>
                  <Grid item xs={12} mb="20px">
                    <Typography fontSize="18px" textTransform="uppercase" color="#fff">
                      PHONE :
                    </Typography>
                    <Typography fontSize="18px">(123) 456-7890</Typography>
                  </Grid>
                  <Grid item xs={12} mb="20px">
                    <Typography fontSize="18px" textTransform="uppercase" color="#fff">
                      EMAIL :
                    </Typography>
                    <Typography fontSize="18px">mail@example.com</Typography>
                  </Grid>
                  <Grid item xs={12} mb="20px">
                    <Typography fontSize="18px" textTransform="uppercase" color="#fff">
                      WORKING DAYS/HOURS :
                    </Typography>
                    <Typography fontSize="18px">Mon - Sun / 9:00 AM - 8:00 PM</Typography>
                  </Grid>
                  <Grid item xs={12} mb="20px">
                    <Stack direction="row" justifyContent="space-evenly" pr="50px">
                      <IconButton size="medium" color="white" sx={{ border: "0.5px solid gray" }}>
                        <FaFacebookF />
                      </IconButton>
                      <IconButton size="medium" color="white" sx={{ border: "0.5px solid gray" }}>
                        <BsTwitter />
                      </IconButton>
                      <IconButton size="medium" color="white" sx={{ border: "0.5px solid gray" }}>
                        <BsInstagram />
                      </IconButton>
                    </Stack>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={3} px="20px">
                <Grid container height="380px" alignContent="start">
                  <Grid item xs={12} height="40px" mb="25px">
                    <Typography fontSize="18px" textTransform="uppercase" color="#fff" fontWeight="700">
                      CUSTOMER SERVICE
                    </Typography>
                  </Grid>
                  <Grid item xs={12} mb="20px">
                    <Stack sx={{ textDecoration: "none" }}>
                      <Link href={"/"}>
                        <a className="white-Link"> Help & FAQs</a>
                      </Link>
                      <Link href={"/"} color="white">
                        <a className="white-Link"> Order Tracking</a>
                      </Link>
                      <Link href={"/"}>
                        <a className="white-Link"> Shipping & Delivery</a>
                      </Link>
                      <Link href={"/"}>
                        <a className="white-Link"> Orders History</a>
                      </Link>
                      <Link href={"/"}>
                        <a className="white-Link"> Advanced Search</a>
                      </Link>
                      <Link href={"/"}>
                        <a className="white-Link"> My Account</a>
                      </Link>
                      <Link href={"/"}>
                        <a className="white-Link"> Careers</a>
                      </Link>
                      <Link href={"/"}>
                        <a className="white-Link"> About Us</a>
                      </Link>
                      <Link href={"/"}>
                        <a className="white-Link"> Corporate Sales</a>
                      </Link>
                      <Link href={"/"}>
                        <a className="white-Link">Privacy</a>
                      </Link>
                    </Stack>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={3} px="20px">
                <Grid container height="380px" alignContent="start">
                  <Grid item xs={12} height="40px">
                    <Typography fontSize="18px" textTransform="uppercase" color="#fff" fontWeight="700">
                      POPULAR TAGS
                    </Typography>
                  </Grid>
                  <Grid item xs={12} mb="20px">
                    <Stack direction="row" flexWrap="wrap">
                      <Button variant="outlined" size="small" color="gray" sx={{ width: "max-content", m: "5px" }}>
                        Bag
                      </Button>
                      <Button variant="outlined" size="small" color="gray" sx={{ width: "max-content", m: "5px" }}>
                        Bag
                      </Button>
                      <Button variant="outlined" size="small" color="gray" sx={{ width: "max-content", m: "5px" }}>
                        Bag
                      </Button>
                      <Button variant="outlined" size="small" color="gray" sx={{ width: "max-content", m: "5px" }}>
                        Bag
                      </Button>
                      <Button variant="outlined" size="small" color="gray" sx={{ width: "max-content", m: "5px" }}>
                        Bag
                      </Button>
                      <Button variant="outlined" size="small" color="gray" sx={{ width: "max-content", m: "5px" }}>
                        Bag
                      </Button>
                      <Button variant="outlined" size="small" color="gray" sx={{ width: "max-content", m: "5px" }}>
                        Bag
                      </Button>
                      <Button variant="outlined" size="small" color="gray" sx={{ width: "max-content", m: "5px" }}>
                        Bag
                      </Button>
                    </Stack>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default index
