// ** React Core
import React, { MutableRefObject, useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"
// import { useSearchParams } from "next/navigation"
import { useGlobalContext } from "src/contexts"
import { withRouter, NextRouter } from "next/router"
// ** MUI imports
import { Box, Button, Chip, Grid, InputAdornment, Rating, Stack, TextField, Typography, IconButton } from "@mui/material"

// ** Components
import UIBreadcrumbs from "src/components/global/Breadcrumbs"

// ** Swiper
import { Swiper, SwiperSlide } from "swiper/react"
import type { Swiper as SwiperType } from "swiper"
import { type Swiper as SwiperRef } from "swiper"
import { Zoom, Thumbs } from "swiper"
import "swiper/css"
import "swiper/css/thumbs"

// ** Icon Imports
import { FaPlus, FaMinus } from "react-icons/fa"
import { AiOutlineShoppingCart } from "react-icons/ai"

// ** Components
import RenderVariants from "src/components/slugProduct/variants"

// ** Types
import { ProductsType } from "src/types"

type ProductVariantsObjType = {
  [key: string]: string[]
}
interface ParamsType {
  params: {
    productType: string
    slugProduct: string
  }
}
type SelectedVariantObjType = {
  quantity: string
  [key: string]: string
}

// ** Vars
let tmpProductVariantsObj: ProductVariantsObjType = {}
let tmpButtonObj: { [key: string]: string } = {}
let tmpObjVariantBtn = {}
const index = (props: ParamsType) => {
  const { params } = props
  // ** States
  // const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null)
  const [productVariantsObj, setProductVariantsObj] = useState<ProductVariantsObjType>()
  const [quantity, setQuantity] = useState<number>(1)
  const [product, setProduct] = useState<ProductsType>()
  const [count, setCount] = useState(0)
  const swiperRef = useRef<SwiperRef>()
  const quantityRef = useRef<HTMLInputElement>()
  const { products } = useGlobalContext()
  const [checkedButton, setCheckedButton] = useState<{ [key: string]: string }>({})
  const [selectedVariantObj, setSelectedVariantObj] = useState<string>("")

  useEffect(() => {
    setProduct(products.find((item) => item.id == Number(params.slugProduct)))
    setTimeout(() => {
      // ** it is not render variants i dont know why yet. product is a mutable state and doesnt rerender
      setCount((prev) => prev + 1)
    }, 100)
  }, [])

  useEffect(() => {
    product?.rowVariantData.map((variantProduct, index) => {
      Object.keys(variantProduct).map((variant: string) => {
        if (variant !== "quantity") {
          product?.rowVariantData[index][variant]
          if (tmpProductVariantsObj.hasOwnProperty(variant)) {
            if (tmpProductVariantsObj[variant].indexOf(product?.rowVariantData[index][variant]) === -1) {
              tmpProductVariantsObj[variant].push(product?.rowVariantData[index][variant])
            }
          } else {
            tmpProductVariantsObj[variant] = [product?.rowVariantData[index][variant]]
          }
        }
      })
    })
    setProductVariantsObj(tmpProductVariantsObj)
  }, [product])

  // ** Functions
  const makePlus = () => {
    setQuantity((prev) => prev + 1)
  }
  const makeMinus = () => {
    if (Number(quantityRef.current?.value) > 1) {
      setQuantity((prev) => prev - 1)
    }
  }

  const makeCheckedButton = (type: string, data: string) => {
    setCheckedButton({ ...checkedButton, [type]: data })
  }
  useEffect(() => {
    renderQuantity()
  }, [checkedButton])

  const renderQuantity = () => {
    console.log(checkedButton)
    if (product !== undefined) {
      if (Object.keys(product?.rowVariantData[0]!).length - 1 === Object.keys(checkedButton).length) {
        // let tmpObjVariantBtn: SelectedVariantObjType = {}
        let tmpObjVariantBtn = product?.rowVariantData.find((item) => {
          return Object.keys(checkedButton).every((variantkey) => {
            return item[variantkey] === checkedButton[variantkey]
          })
        })
        console.log(tmpObjVariantBtn)
        if (tmpObjVariantBtn !== undefined) {
          setSelectedVariantObj(tmpObjVariantBtn!.quantity as string)
        } else {
          setSelectedVariantObj("0")
        }
      }
    }
  }
  console.log(selectedVariantObj)
  const renderVariants = () => {
    if (productVariantsObj !== undefined) {
      return Object.keys(productVariantsObj as object)?.map((variantKey, index) => {
        return (
          <Grid item xs={12} key={index}>
            <Grid container>
              <Grid item xs={3}>
                <Typography fontWeight="700" textTransform="uppercase">
                  {variantKey} :
                </Typography>
              </Grid>
              <Grid item xs={9}>
                <Stack direction="row" spacing={2}>
                  {productVariantsObj?.[variantKey].map((value, ind) => {
                    console.log(checkedButton)
                    return (
                      <Button
                        key={ind}
                        variant={checkedButton[variantKey] === value ? "contained" : "outlined"}
                        size="small"
                        sx={{ width: "fit-content" }}
                        onClick={() => {
                          console.log("asda")
                          makeCheckedButton(variantKey, value)
                        }}
                      >
                        <Typography textTransform="uppercase" fontWeight="700">
                          {value}
                        </Typography>
                      </Button>
                    )
                  })}
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        )
      })
    }
  }

  return (
    <Grid container justifyContent="center">
      <Grid item maxWidth="1200px" width="100%">
        <Grid container>
          <Grid item xs={12}>
            <UIBreadcrumbs product={product} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item maxWidth="1200px" width="100%" mb="25px">
        <Grid container columnSpacing={4}>
          <Grid item width="100%" maxWidth="500px" minHeight="600px">
            <Swiper loop={true} spaceBetween={10} thumbs={{ swiper: swiperRef.current }} modules={[Zoom, Thumbs]} className="ProductSwiper">
              <SwiperSlide>
                <Box position="relative" minHeight="500px">
                  <Image src="/images/products/product-4.jpg" layout="fill" objectFit="contain" />
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box position="relative" minHeight="500px">
                  <Image src="/images/products/product-1.jpg" layout="fill" objectFit="contain" />
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box position="relative" minHeight="500px">
                  <Image src="/images/products/product-11.jpg" layout="fill" objectFit="contain" />
                </Box>
              </SwiperSlide>
            </Swiper>
            <Stack justifyContent="space-between" sx={{ mt: "10px" }}>
              <Swiper
                onSwiper={(swiper) => {
                  swiperRef.current = swiper
                }}
                spaceBetween={0}
                slidesPerView={3}
                watchSlidesProgress={true}
                modules={[Thumbs]}
                className="ProductThumb"
                style={{ gap: "10px", display: "flex", padding: "0 5px" }}
              >
                <SwiperSlide style={{ display: "flex" }}>
                  <Box position="relative" height="130px" width="130px" m="auto">
                    <Image src="/images/products/product-1.jpg" layout="fill" objectFit="cover" />
                  </Box>
                </SwiperSlide>
                <SwiperSlide style={{ display: "flex" }}>
                  <Box position="relative" height="130px" width="130px" m="auto">
                    <Image src="/images/products/product-4.jpg" layout="fill" objectFit="cover" />
                  </Box>
                </SwiperSlide>
                <SwiperSlide style={{ display: "flex" }}>
                  <Box position="relative" height="130px" width="130px" m="auto">
                    <Image src="/images/products/product-11.jpg" layout="fill" objectFit="cover" />
                  </Box>
                </SwiperSlide>
              </Swiper>
            </Stack>
          </Grid>
          <Grid item width="100%" maxWidth="700px" minHeight="600px">
            <Grid container rowSpacing={4}>
              <Grid item>
                <Grid container>
                  <Grid item xs={12}>
                    <Typography textTransform="uppercase" fontSize="48px" fontWeight="700">
                      {product?.product_name}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Rating name="read-only" value={5} readOnly />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Typography fontWeight="700" fontSize="36px">
                  ${product?.price}
                </Typography>
              </Grid>

              <Grid item>
                <Typography>{product?.description}as</Typography>
              </Grid>

              <Grid item display="flex" alignItems="center" xs={12}>
                <Typography variant="h6" fontWeight={700} mr="5px">
                  Categories :
                </Typography>
                <Link href="/bag">
                  <a>
                    <Chip
                      label={
                        <Typography fontWeight="700" textTransform="uppercase">
                          {product?.sub_cat?.label}
                        </Typography>
                      }
                      className="link"
                    />
                  </a>
                </Link>
              </Grid>
              {selectedVariantObj && (
                <Grid item display="flex" alignItems="center" xs={12}>
                  <Typography variant="h6" fontWeight={700} mr="5px">
                    Stok Size :
                  </Typography>

                  <Chip label={<Typography fontWeight="700">{selectedVariantObj} in stok</Typography>} className="link" />
                </Grid>
              )}

              {productVariantsObj && renderVariants()}

              <Grid item xs={12}>
                <Grid container columnSpacing={4}>
                  <Grid item xs={4}>
                    <TextField
                      sx={{ width: "200px", mx: "10%", "& .MuiOutlinedInput-root": { borderRadius: "50px", background: "#fff" } }}
                      autoComplete="off"
                      type="number"
                      value={quantity}
                      disabled={!Number(selectedVariantObj)}
                      inputRef={quantityRef}
                      onChange={(e) => setQuantity(Number(e.target.value))}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="end">
                            <IconButton sx={{ mr: "10px" }} onClick={makeMinus} disabled={!Number(selectedVariantObj)}>
                              <FaMinus fontSize="20px" />
                            </IconButton>
                          </InputAdornment>
                        ),
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton onClick={makePlus} disabled={!Number(selectedVariantObj)}>
                              <FaPlus fontSize="20px" />
                            </IconButton>
                          </InputAdornment>
                        ),
                        sx: { "& input": { fontSize: "25px", py: "8px", textAlign: "center" } },
                      }}
                      InputLabelProps={{
                        sx: { borderRadius: "250px", color: "secondary" },
                      }}
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <Button variant="contained" disabled={!Number(selectedVariantObj)}>
                      <AiOutlineShoppingCart fontSize="24px" />
                      <Typography fontWeight="700" fontSize="18px" textTransform="uppercase" ml="10px">
                        add to cart
                      </Typography>
                    </Button>
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

export function getServerSideProps(context: any) {
  return {
    props: { params: context.params },
  }
}
