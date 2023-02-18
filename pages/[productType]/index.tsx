// ** React Core
import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

// ** Context API
import { useGlobalContext } from "src/contexts"

// ** MUI imports
import {
  Grid,
  Box,
  Slider,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Stack,
  Checkbox,
  FormControlLabel,
  Rating,
  Card,
  CardContent,
} from "@mui/material"
import { useTheme } from "@mui/material"

// ** Icons
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

// ** Components
import CatsTree from "src/components/productType/CatsTree"
import TopSlider from "src/components/productType/TopSlider"

// ** Types
import { ProductsType } from "src/types"

type VariantType = {
  [key: string]: string[] | undefined
}
type SimpleArrayObjType = {
  [key: string]: string[]
}

function valuetext(value: number) {
  return `${value}`
}

const minDistance = 1

// ** Vars
let allVariantsContainer: VariantType = {}

const index = () => {
  const { products } = useGlobalContext()
  const theme = useTheme()

  // ** States
  const [productData, setProductData] = useState<ProductsType[]>(products)
  const [allVariants, setAllVariants] = useState<VariantType>({})
  const [filterData, setFilterData] = useState<SimpleArrayObjType>({})
  const [filteredProduct, setFilteredProduct] = useState<ProductsType[]>([])
  const [productCats, setProductCats] = useState<{ [key: string]: string }>({})
  const [value1, setValue1] = useState<number[]>([0, 1000])
  const [maxValue, setMaxValue] = useState<number>(1000)
  // ** Calls

  const handleCheckBox = (variantType: string, variantName: string) => {
    let tmpFilter = { ...filterData }
    if (tmpFilter.hasOwnProperty(variantType)) {
      if (tmpFilter[variantType].indexOf(variantName) === -1) {
        tmpFilter[variantType].push(variantName)
      } else {
        tmpFilter[variantType] = tmpFilter[variantType].filter((item) => item !== variantName)
        tmpFilter[variantType].length === 0 ? delete tmpFilter[variantType] : null
      }
    } else {
      tmpFilter[variantType] = [variantName]
    }

    setFilterData(tmpFilter)
    filterProducts(tmpFilter)
  }
  const filterProducts = (tmpFilter: SimpleArrayObjType) => {
    let tmpProduct: ProductsType[] = []
    let tmpcatFltered: ProductsType[] = []

    productData.map((product: ProductsType) => {
      Number(product.price) > maxValue ? setMaxValue(Number(product.price)) : null
      // ** for price
      if (Number(product.price) >= value1[0] && Number(product.price) <= value1[1]) {
        if (Object.keys(productCats).length > 0) {
          // ** for category
          if (productCats.hasOwnProperty("section_cat")) {
            if (productCats.section_cat === product.section_cat.label) {
              tmpcatFltered.push(product)
            }
          }
          if (productCats.hasOwnProperty("main_cat")) {
            if (productCats.main_cat === product.main_cat.label) {
              tmpcatFltered.push(product)
            }
          }
          if (productCats.hasOwnProperty("sub_cat")) {
            if (productCats.sub_cat === product.sub_cat.label) {
              tmpcatFltered.push(product)
            }
          }
        } else {
          if (Number(product.price) >= value1[0] && Number(product.price) <= value1[1]) {
            tmpcatFltered.push(product)
          }
        }
        // ** for variant
        if (Object.keys(tmpFilter).length > 0) {
          tmpcatFltered.map((product: ProductsType) => {
            product.rowVariantData.map((productVariant) => {
              Object.keys(tmpFilter).map((variant) => {
                if (tmpFilter[variant].indexOf(productVariant[variant]) !== -1) {
                  tmpProduct.push(product)
                }
              })
            })
          })
        } else {
          tmpProduct = [...tmpcatFltered]
        }
      }
    })

    tmpProduct = tmpProduct.filter((value, index, array) => array.indexOf(value) === index)
    setFilteredProduct(tmpProduct)
  }

  const saveCatsHandler = (data: string, typeKey: string, isExpanded: boolean) => {
    let tmpData: { [key: string]: string } = {}
    if (isExpanded) {
      tmpData[typeKey] = data
      setProductCats(tmpData)
    }
  }

  const priceHandleChange = (event: Event, newValue: number | number[], activeThumb: number) => {
    if (!Array.isArray(newValue)) {
      return
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]])
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)])
    }
  }
  const renderVariantFilter = () => {
    return Object.keys(allVariants).map((variantType, index) => {
      return (
        <Grid item xs={12} key={index}>
          <Accordion defaultExpanded={true}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
              <Typography textAlign="center" fontSize="24px" fontWeight="700">
                {variantType}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container>
                <Grid item xs={12}>
                  <Grid container>
                    {allVariants[variantType]!.map((variantName, ind) => {
                      return (
                        <Grid item xs={6} key={ind}>
                          <FormControlLabel control={<Checkbox onClick={() => handleCheckBox(variantType, variantName)} />} label={variantName} />
                        </Grid>
                      )
                    })}
                  </Grid>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        </Grid>
      )
    })
  }

  const renderProductCard = () => {
    return filteredProduct.map((productCard, index) => {
      return (
        <Grid item xs={3} key={index} className="allProduct">
          <Card>
            <CardContent>
              <Link href={`/allproducts/${productCard.id}`}>
                <Grid container width="200" minHeight="300px" alignItems="flex-start" className="link">
                  <Grid item position="relative">
                    <Image src="/images/products/product-4-300x300.jpg" width={200} height={200} objectFit="contain" />
                    <Box className="imageOverlay">
                      <Box className="imageOverlay-Btn" display="flex">
                        <Typography textAlign="center" textTransform="uppercase" color="#fefefe" m="auto">
                          Quick View
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item>
                    <Grid container>
                      <Grid item xs={12}>
                        <Typography variant="subtitle1" fontWeight={700} color="error">
                          {productCard.sub_cat.label}
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="h6" fontWeight={700}>
                          {productCard.product_name}
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Rating name="disabled" value={5} precision={0.5} readOnly />
                      </Grid>
                      <Grid item xs={12} fontSize="24px" fontWeight={700} textAlign="center">
                        ${productCard.price}
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Link>
            </CardContent>
          </Card>
        </Grid>
      )
    })
  }

  useEffect(() => {
    const getAllVariants = () => {
      let productVariants: string[] | [] = []

      productData.map((product) => {
        product.selected_variants.map((selectedProductVariant) => {
          productVariants = [...productVariants, selectedProductVariant.variantName] //
        })
      })
      productVariants = productVariants.filter((v, i, a) => a.indexOf(v) === i)

      productData.map((product) => {
        productVariants.map((variant) => {
          product.rowVariantData?.map((variantValue) => {
            if (allVariantsContainer.hasOwnProperty(variant)) {
              if (allVariantsContainer[variant]?.indexOf(variantValue[variant]) === -1 && variantValue[variant] !== undefined) {
                allVariantsContainer[variant]!.push(variantValue[variant])
              }
            } else {
              if (variantValue[variant] !== undefined) allVariantsContainer[variant] = [variantValue[variant]]
            }
          })
        })
      })
      setAllVariants({ ...allVariantsContainer })
    }

    getAllVariants()
  }, [])

  useEffect(() => {
    filterProducts(filterData)
  }, [productCats, value1])

  return (
    <Grid container>
      <Grid item maxWidth="1200px" width="100%" mx="auto">
        <Grid container columnSpacing={4}>
          <Grid item xs={2}>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <CatsTree saveCatsHandler={saveCatsHandler} />
              </Grid>
              <Grid item xs={12}>
                <Accordion defaultExpanded={true}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
                    <Typography fontSize="24px" fontWeight="700">
                      Price
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Grid container>
                      <Grid item xs={12}>
                        <Grid container justifyContent="space-between">
                          <Grid item xs={4}>
                            {value1[0]}
                          </Grid>
                          <Grid item xs={4}>
                            {value1[1]}
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={12}>
                        <Slider
                          // getAriaLabel={() => "Minimum distance"}
                          value={value1}
                          onChange={priceHandleChange}
                          valueLabelDisplay="auto"
                          getAriaValueText={valuetext}
                          disableSwap
                          marks
                          min={0}
                          max={maxValue}
                          step={10}
                        />
                      </Grid>
                    </Grid>
                  </AccordionDetails>
                </Accordion>
              </Grid>
              {renderVariantFilter()}
            </Grid>
          </Grid>
          <Grid item xs={10}>
            <Grid container>
              <TopSlider />
              <Grid item xs={12} mt="15px">
                <Grid container spacing={4}>
                  {renderProductCard()}
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
