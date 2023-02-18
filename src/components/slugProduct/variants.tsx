import { Button, Grid, Typography } from "@mui/material"
import { Stack } from "@mui/system"
import React from "react"

// ** Types
type ProductVariantsObjType = {
  [key: string]: string[]
}
interface PropsType {
  variantsObj: ProductVariantsObjType
}
const RenderVariants = (props: PropsType) => {
  const { variantsObj } = props
  console.log(variantsObj)

  return <>{}</>
}

export default RenderVariants
