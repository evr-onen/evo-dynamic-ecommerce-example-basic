// ** React Core
import React, { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import Image from "next/image"
import Link from "next/link"

// ** Theme Imports
import { useTheme } from "next-themes"
import { useTheme as themeOptions } from "@mui/material/styles"

// ** MUI Imports
import { Button, Grid, IconButton, MenuItem, Select, SelectChangeEvent, TextField, Typography, Badge, Fab } from "@mui/material"

// ** Icons
const UIWeatherSunny = dynamic(() => import("mdi-material-ui/WeatherSunny"), { ssr: false })
const UIWeatherNight = dynamic(() => import("mdi-material-ui/WeatherNight"), { ssr: false })
import { Facebook, Magnify } from "mdi-material-ui"
import { ImFacebook, ImTwitter, ImInstagram } from "react-icons/im"
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai"
import { BsHandbag } from "react-icons/bs"

// ** Components
import LangDropdown from "../LangDropdown"

// Images
import Logo from "/public/images/shop1_logo.png"
import { Stack } from "@mui/material"

const Header = () => {
  const { resolvedTheme, setTheme } = useTheme()

  // ** States
  const [mounted, setMounted] = useState(false)
  const [age, setAge] = React.useState("1")
  const [whishListBadgeCount, setWhishListBadgeCount] = useState(4)
  const [chartBadgeCount, setChartBadgeCount] = useState(1)
  // ** Calls
  const theme = themeOptions()

  // ** Handlers
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string)
  }

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])
  // console.log(theme.palette)
  return (
    <Grid container className="header-main" justifyContent="center" marginBottom="5px" alignItems="center">
      <Grid item xs={12} sx={{ background: theme.palette.secondary.main }}>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item sx={{ maxWidth: "1200px", width: "100%", py: "10px" }} mx="auto">
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item>
                <LangDropdown />
              </Grid>
              <Grid item>
                <Stack direction="row" spacing={4} sx={{ color: "aliceblue" }}>
                  <Link href="/dashboard">
                    <Button
                      size="small"
                      variant="outlined"
                      sx={{ border: "1px solid rgb(205 214 218 / 50%)", color: "aliceblue", "&:hover": { border: "1px solid #fff" } }}
                    >
                      <Typography color="aliceblue" fontWeight="700" fontSize="14px">
                        Dashboard
                      </Typography>
                    </Button>
                  </Link>
                  <Link href="/allproducts">
                    <Button
                      size="small"
                      variant="outlined"
                      sx={{ border: "1px solid rgb(205 214 218 / 50%)", color: "aliceblue", "&:hover": { border: "1px solid #fff" } }}
                    >
                      <Typography color="aliceblue" fontWeight="700" fontSize="14px">
                        AllProducts
                      </Typography>
                    </Button>
                  </Link>
                </Stack>
              </Grid>
              <Grid item>
                <Grid container columnSpacing={4} justifyContent="space-between" alignItems="center">
                  <Grid item className="note" display="flex">
                    <Typography my="auto" textTransform="uppercase" fontWeight={700} color={theme.palette.black.main}>
                      welcome to porto!
                    </Typography>
                  </Grid>
                  <Grid item className="btns">
                    <Button variant="text" size="small" sx={{ color: theme.palette.text.secondary, fontWeight: "bold", letterSpacing: "0.275px" }}>
                      contact us
                    </Button>
                    <Button variant="text" size="small" sx={{ color: theme.palette.text.secondary, fontWeight: "bold", letterSpacing: "0.275px" }}>
                      my account
                    </Button>
                    <Button variant="text" size="small" sx={{ color: theme.palette.text.secondary, fontWeight: "bold", letterSpacing: "0.275px" }}>
                      my wishlist
                    </Button>
                    <Button variant="text" size="small" sx={{ color: theme.palette.text.secondary, fontWeight: "bold", letterSpacing: "0.275px" }}>
                      cart
                    </Button>
                    <Button variant="text" size="small" sx={{ color: theme.palette.text.secondary, fontWeight: "bold", letterSpacing: "0.275px" }}>
                      login
                    </Button>
                  </Grid>
                  <Grid item className="social">
                    <IconButton>
                      <ImFacebook /* sx={{ color: "#1977F2" }}  */ />
                    </IconButton>
                    <IconButton>
                      <ImTwitter />
                    </IconButton>
                    <IconButton>
                      <ImInstagram />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item sx={{ maxWidth: "1200px", width: "100%" }} height={100}>
        <Grid container flexWrap="nowrap" justifyContent="space-between" alignItems="center">
          <Grid item className="logo" sx={{ position: "relative" }}>
            <Link href={"/home"}>
              <Image src={Logo} quality={100} width={111} objectFit="contain" />
            </Link>
          </Grid>
          <Grid item className="search">
            <Grid container flexWrap="nowrap">
              <Grid item>
                <TextField
                  placeholder="Search..."
                  variant="filled"
                  autoComplete="off"
                  sx={{
                    width: "300px",
                    borderRight: "0.5px solid #c8c6c6",
                    "& input": { pb: "12px", pt: "13px", pl: "30px" },
                    "& .MuiFilledInput-root": { borderRadius: "20px 0 0 20px" },
                    "& .MuiFilledInput-root::after": { left: "12px" },
                    "& .MuiFilledInput-root:hover:not(.Mui-disabled):before": { borderBottom: 0 },
                    "& .MuiFilledInput-root::before": { left: "12px", border: 0 },
                  }}
                  size="small"
                />
              </Grid>
              <Grid item>
                <Select
                  disableUnderline
                  sx={{
                    "& .MuiInputBase-input": { pb: "12px", pt: "13px", pl: "10px" },
                    borderRadius: "0 0 0 0 ",
                    width: "200px",
                    borderRight: "0.5px solid #c8c6c6",
                    flexWrap: "nowrap",
                  }}
                  size="small"
                  variant="filled"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={1}>All Categories</MenuItem>
                  <MenuItem value={2}>Bags</MenuItem>
                  <MenuItem value={3}>Phones</MenuItem>
                </Select>
              </Grid>
              <Grid item>
                <IconButton
                  sx={{
                    "&:hover": { background: "#f0f0f0" },
                    background: "#f0f0f0",
                    p: "7px 10px 7px 10px",
                    borderRadius: "0 20px 20px  0 ",
                    flexWrap: "nowrap",
                  }}
                >
                  <Magnify fontSize="large" sx={{ m: "auto" }} />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid item className="btns" sx={{ maxWidth: "150px", width: "100%" }}>
            <Grid container>
              <Grid item>
                <IconButton sx={{ "&.MuiIconButton-root": { color: "black" } }}>
                  <AiOutlineUser fontSize="36px" />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton sx={{ "&.MuiIconButton-root": { color: "black" } }}>
                  <Badge color="secondary" badgeContent={whishListBadgeCount} /* invisible={!!mailBadgeCount} */>
                    <AiOutlineHeart fontSize="36px" />
                  </Badge>
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton sx={{ "&.MuiIconButton-root": { color: "black" } }}>
                  <Badge color="secondary" badgeContent={chartBadgeCount} /* invisible={!!mailBadgeCount} */>
                    <BsHandbag fontSize="36px" />
                  </Badge>
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Header
