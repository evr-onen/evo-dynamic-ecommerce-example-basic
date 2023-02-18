import React, { useState } from "react"

// ** dummies
import { dummyProducts } from "src/dummydata"

type Variantstype = {
  id: number
  variantName: string
  variantValues: { value: string }[]
}

type ProductsType = {
  id?: number
  product_name: string
  price: string
  section_cat: { id: number; label: string }
  main_cat: { id: number; label: string }
  sub_cat: { id: number; label: string }
  selected_variants: {
    id: number
    variantName: string
    variantValues: { value: string }[]
  }[]

  rowVariantData: { [key: string]: string }[]
  description: string
}
interface IGlobalContextProps {
  user: string
  setUser: (user: string) => void
  variants: Variantstype[]
  setVariants: (variants: Variantstype[]) => void
  settings: Settings
  setSettings: (themeMode: Settings) => void
  products: ProductsType[]
  setProducts: (product: ProductsType[]) => void
}

// ** Types
type Settings = {
  mode: string
  lang: string
  direction: string
}

export const GlobalContext = React.createContext<IGlobalContextProps>({
  user: "",
  setUser: () => {},
  variants: [],
  setVariants: () => {},
  settings: { mode: "light", lang: "tr", direction: "ltr" },
  setSettings: () => {},
  products: [],
  setProducts: () => {},
})

export const GlobalContextProvider = (props: any) => {
  const [currentUser, setCurrentUser] = useState("")
  const [allProducts, setAllProducts] = useState<ProductsType[]>(dummyProducts)
  const [productVariants, setProductVariants] = useState([
    { id: 1, variantName: "color", variantValues: [{ value: "white" }, { value: "black" }, { value: "blue" }, { value: "red" }] },
    { id: 2, variantName: "size", variantValues: [{ value: "small" }, { value: "medium" }, { value: "large" }, { value: "xlarge" }] },
  ])

  const [themeSettings, setthemeSettings] = useState({ mode: "light", lang: "tr", direction: "ltr" })

  return (
    <GlobalContext.Provider
      value={{
        user: currentUser,
        setUser: setCurrentUser,
        settings: themeSettings,
        setSettings: setthemeSettings,
        variants: productVariants,
        setVariants: setProductVariants,
        products: allProducts,
        setProducts: setAllProducts,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  )
}
