import Link from "@mui/material/Link"
import { Box, Typography, Breadcrumbs } from "@mui/material"

// ** Types
import { ProductsType } from "src/types"
interface PropsType {
  product?: ProductsType
}

const UIBreadcrumbs = (props: PropsType) => {
  const { product } = props
  return (
    <Box>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="black" href="/allproducts">
          <Typography variant="body2" color="text.primary" textTransform="uppercase">
            {product?.section_cat.label}
          </Typography>
        </Link>

        <Link underline="hover" color="black" href="/allproducts">
          <Typography variant="body2" color="text.primary" textTransform="uppercase">
            {product?.main_cat.label}
          </Typography>
        </Link>
        <Link underline="hover" color="black" href="/allproducts">
          <Typography variant="body2" color="text.primary" textTransform="uppercase">
            {product?.sub_cat.label}
          </Typography>
        </Link>
        <Typography variant="body2" color="text.primary" textTransform="uppercase">
          {product?.product_name}
        </Typography>
      </Breadcrumbs>
    </Box>
  )
}

export default UIBreadcrumbs
