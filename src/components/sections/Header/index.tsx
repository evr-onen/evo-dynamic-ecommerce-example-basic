// ** React Core
import React, { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import Image from "next/image"
import Link from "next/link"

// ** Theme Imports
import { useTheme } from "next-themes"
import { useTheme as themeOptions } from "@mui/material/styles"

// ** MUI Imports
import { Button, Grid, IconButton, MenuItem, Select, SelectChangeEvent, TextField, Typography, Badge, Fab, useMediaQuery } from "@mui/material"

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
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"))

  // ** Handlers
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string)
  }

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])
  // console.log(theme.palette)
  return (
    <Grid container className="header-main" justifyContent="center" marginBottom="5px" alignItems="center">
      <Grid item xs={12} sx={{ background: theme?.palette?.secondary?.main }}>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item sx={{ maxWidth: "1250px", width: "100%", py: "10px" }} mx="auto" px="1.5rem">
            <Grid container justifyContent="space-between" alignItems="center" spacing={1}>
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
              <Grid item xs={12} md={12} lg={8}>
                <Grid container columnSpacing={4} justifyContent="space-between" alignItems="center">
                  <Grid item className="note" display="flex" xs={2}>
                    <Typography
                      variant="body2"
                      my="auto"
                      textTransform="uppercase"
                      fontWeight={700}
                      color={theme?.palette?.black?.main}
                      textAlign="center"
                    >
                      welcome to porto!
                    </Typography>
                  </Grid>
                  <Grid item className="btns" xs={10} sm={8}>
                    <Grid container columnSpacing={isSmall ? 1 : 2} justifyContent="center">
                      <Grid item>
                        <Button
                          variant="text"
                          size="small"
                          sx={{ color: theme?.palette?.text?.secondary, fontWeight: "bold", letterSpacing: "0.275px" }}
                        >
                          <Typography variant="body2" color={theme?.palette?.text?.secondary} fontWeight="700" letterSpacing="0.275px">
                            contact us
                          </Typography>
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button
                          variant="text"
                          size="small"
                          sx={{ color: theme?.palette?.text?.secondary, fontWeight: "bold", letterSpacing: "0.275px" }}
                        >
                          <Typography variant="body2" color={theme?.palette?.text?.secondary} fontWeight="700" letterSpacing="0.275px">
                            my account
                          </Typography>
                        </Button>
                      </Grid>{" "}
                      <Grid item>
                        <Button
                          variant="text"
                          size="small"
                          sx={{ color: theme?.palette?.text?.secondary, fontWeight: "bold", letterSpacing: "0.275px" }}
                        >
                          <Typography variant="body2" color={theme?.palette?.text?.secondary} fontWeight="700" letterSpacing="0.275px">
                            my wishlist
                          </Typography>
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button
                          variant="text"
                          size="small"
                          sx={{ color: theme?.palette?.text?.secondary, fontWeight: "bold", letterSpacing: "0.275px" }}
                        >
                          <Typography variant="body2" color={theme?.palette?.text?.secondary} fontWeight="700" letterSpacing="0.275px">
                            cart
                          </Typography>
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button variant="text" size="small">
                          <Typography variant="body2" color={theme?.palette?.text?.secondary} fontWeight="700" letterSpacing="0.275px">
                            login
                          </Typography>
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    className="social"
                    xs={0}
                    sm={2}
                    sx={{ display: "none", [theme.breakpoints.up("sm")]: { display: "flex", justifyContent: "center" } }}
                  >
                    <Grid container>
                      <Grid item>
                        <IconButton>
                          <ImFacebook />
                        </IconButton>
                      </Grid>
                      <Grid item>
                        <IconButton>
                          <ImTwitter />
                        </IconButton>
                      </Grid>
                      <Grid item>
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
        </Grid>
      </Grid>
      <Grid item sx={{ maxWidth: "1250px", width: "100%" }} minHeight={100} px="1.5rem">
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          px="1rem"
          sx={{ flexWrap: "nowrap", [theme.breakpoints.down("sm")]: { flexWrap: "wrap", "-webkit-flex-wrap": "wrap" } }}
        >
          <Grid item className="logo" sx={{ position: "relative", [theme.breakpoints.down("sm")]: { order: 1, display: "flex", width: "50%" } }}>
            <Link href={"/home"}>
              <Image src={Logo} quality={100} width={111} objectFit="contain" />
            </Link>
          </Grid>
          <Grid
            item
            className="search"
            mx=".5rem"
            sm={12}
            md={8}
            sx={{ [theme.breakpoints.down("sm")]: { order: 3, display: "flex", width: "100%" } }}
          >
            <Grid container flexWrap="nowrap" justifyContent="center">
              <Grid item>
                <TextField
                  placeholder="Search..."
                  variant="filled"
                  autoComplete="off"
                  fullWidth
                  sx={{
                    "&::placeholder": { fontSize: "0.4rem" },
                    [theme.breakpoints.down("md")]: { maxWidth: "150px" },
                    maxWidth: "500px",
                    width: "100%",
                    minWidth: "100px",
                    borderRight: "0.5px solid #c8c6c6",
                    "& input": { pb: "0.75rem", pt: "0.8125rem", pl: "1.875rem" },
                    "& .MuiFilledInput-root": { borderRadius: "20px 0 0 20px" },
                    "& .MuiFilledInput-root::after": { left: "12px" },
                    "& .MuiFilledInput-root:hover:not(.Mui-disabled):before": { borderBottom: 0 },
                    "& .MuiFilledInput-root::before": { left: "12px", border: 0 },
                  }}
                />
              </Grid>
              <Grid item>
                <Select
                  disableUnderline
                  fullWidth
                  sx={{
                    "& .MuiInputBase-input": { pb: "12px", pt: "13px", pl: "10px" },
                    "& .MuiInputBase-input::placeholder": { fontSize: "1rem" },
                    borderRadius: "0 0 0 0 ",
                    maxWidth: "200px",
                    minWidth: "150px",
                    width: "100%",
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
                  <MenuItem value={1}>
                    <Typography variant="body1" color="initial">
                      All Categories
                    </Typography>
                  </MenuItem>
                  <MenuItem value={2}>Bags</MenuItem>
                  <MenuItem value={3}>Phones</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={2}>
                <IconButton
                  sx={{
                    "&:hover": { background: "#f0f0f0" },
                    background: "#f0f0f0",
                    p: "7px 10px 7px 10px",
                    borderRadius: "0 20px 20px  0 ",
                    flexWrap: "nowrap",
                  }}
                >
                  <Magnify fontSize={"large"} sx={{ m: "auto" }} />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            className="btns"
            sx={{ maxWidth: "150px", width: "100%", [theme.breakpoints.down("sm")]: { order: 2, display: "flex", width: "50%" } }}
            xs={2}
          >
            <Grid container justifyContent="space-between" wrap="nowrap">
              <Grid item>
                <IconButton
                  sx={{ "&.MuiIconButton-root": { color: "black" }, fontSize: "2.25rem", [theme.breakpoints.down("md")]: { fontSize: "1.75rem" } }}
                >
                  <AiOutlineUser />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                  sx={{ "&.MuiIconButton-root": { color: "black" }, fontSize: "2.25rem", [theme.breakpoints.down("md")]: { fontSize: "1.75rem" } }}
                >
                  <Badge color="secondary" badgeContent={whishListBadgeCount} /* invisible={!!mailBadgeCount} */>
                    <AiOutlineHeart />
                  </Badge>
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                  sx={{ "&.MuiIconButton-root": { color: "black" }, fontSize: "2.25rem", [theme.breakpoints.down("md")]: { fontSize: "1.75rem" } }}
                >
                  <Badge color="secondary" badgeContent={chartBadgeCount} /* invisible={!!mailBadgeCount} */>
                    <BsHandbag />
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
