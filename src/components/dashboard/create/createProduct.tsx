// ** React Core
import React, { useState, forwardRef, useRef, useEffect } from "react"

import { useGlobalContext } from "src/contexts"
// ** MUI imports
import {
  Grid,
  TextField,
  Autocomplete,
  Button,
  FormHelperText,
  Select,
  MenuItem,
  Chip,
  InputLabel,
  FormControl,
  Card,
  CardContent,
  CardHeader,
} from "@mui/material"
import { useTheme } from "@mui/material"

// ** Third Party Imports
import * as yup from "yup"
import { useForm, Controller, useFieldArray, useWatch } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

// ** components
import { QuickAdd } from "src/components/global/quickAdd"

// NOTE - YUP Schema
const schema = yup.object().shape({
  product_name: yup.string().required("Name Required"),
  section_cat: yup
    .object()
    .shape({
      id: yup.number().required(),
      label: yup.string().required(),
    })
    .required("Section Category Required")
    .nullable(),
  main_cat: yup
    .object()
    .shape({
      id: yup.number().required(),
      label: yup.string().required(),
    })
    .required("Main Category Required")
    .nullable(),
  sub_cat: yup
    .object()
    .shape({
      id: yup.number().required(),
      label: yup.string().required(),
    })
    .required("Sub Category Required")
    .nullable(),

  price: yup.string().required("Price Required"),
  description: yup.string().required("Description Required"),
  rowVariantData: yup.array().of(
    yup.object({
      quantity: yup.string().required(),
    })
  ),
})

const defaultValues = {
  product_name: "",
  price: "",
  section_cat: null,
  main_cat: null,
  sub_cat: null,
  selected_variants: [],
  rowVariantData: [{ quantity: "" }],
  description: "",
}

// ** Types
import { ProductsType } from "src/types"

type ValuesType = {
  id: number
  label: string
}

type VariantType = {
  id: number
  variantName: string
  variantValues: { value: string }[]
}

type SelectedVariantsArrayType = {
  [key: string]: VariantType
}

const CreateProduct = forwardRef((props, inputRef) => {
  const { variants, products, setProducts } = useGlobalContext()

  // ** States
  const [selectedVariantsArray, setSelectedVariantsArray] = useState<SelectedVariantsArrayType>()
  const [selectProduct, setSelectProduct] = useState("")
  const [resetCount, setResetCount] = useState(0)
  const [sectionCats, setSectionCats] = useState<ValuesType[]>([
    { id: 1, label: "mutfak" },
    { id: 2, label: "bilgisayar" },
    { id: 3, label: "ev aletleri" },
  ])
  const [mainCats, setMainCats] = useState<ValuesType[]>([
    { id: 1, label: "robotlar" },
    { id: 2, label: "bilsenler" },
    { id: 3, label: "temizlik" },
  ])
  const [subCats, setSubCats] = useState<ValuesType[]>([
    { id: 1, label: "mikser" },
    { id: 2, label: "mouse" },
    { id: 3, label: "elektirk supurgesi" },
  ])

  // ** Hooks
  const theme = useTheme()

  const {
    reset,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
    mode: "onChange",
  })

  const selectedVariantTypes = useWatch({
    control,
    name: "selected_variants",
  })

  const { fields, append, prepend, remove, swap, move, insert, update, replace } = useFieldArray({
    control,
    name: "rowVariantData",
  })

  const renderVariantValueQuantities = () => {
    return fields.map((item, fieldIndex) => {
      if (selectedVariantTypes.length) {
        return (
          <Grid item key={fieldIndex} xs={6}>
            <Card>
              <CardHeader title={`Variant ${fieldIndex + 1}`} />
              <CardContent>
                <Grid container spacing={4} marginY="15px">
                  {selectedVariantTypes?.map((variant: { id: number; variantName: string; variantValues: { value: string }[] }, index) => {
                    return (
                      <Grid item key={variant.id} xs={6 / selectedVariantTypes.length}>
                        <FormControl fullWidth>
                          <InputLabel id={variant.variantName + index} sx={{ color: theme.palette.text.primary }}>
                            {variant.variantName}
                          </InputLabel>
                          <Controller
                            // {...register(`rowVariantData.${fieldIndex}.variant${index}` as any)}
                            name={`rowVariantData.[${fieldIndex}].${variant.variantName}` as any}
                            control={control}
                            rules={{ required: true }}
                            render={({ field: { onChange, value, ref } }) => (
                              <Select
                                fullWidth
                                defaultValue={variant.variantValues[0]}
                                value={value || ""}
                                onChange={onChange}
                                label={variant.variantName}
                                labelId={variant.variantName + index}
                                ref={ref}
                                // itemRef="ref"
                              >
                                {(variant?.variantValues).map((value: { value: string }, ind: number) => {
                                  return (
                                    <MenuItem key={ind} value={value.value}>
                                      {value.value}
                                    </MenuItem>
                                  )
                                })}
                              </Select>
                            )}
                            defaultValue={selectedVariantsArray?.[index].variantValues[0].value}
                          />
                        </FormControl>
                      </Grid>
                    )
                  })}
                  {selectedVariantTypes.length ? (
                    <Grid item xs={3}>
                      <Controller
                        // {...register(`rowVariantData.${fieldIndex}.quantity`)}
                        name={`rowVariantData.${fieldIndex}.quantity` as any}
                        control={control}
                        render={({ field, fieldState }) => (
                          <TextField
                            variant="standard"
                            autoComplete="off"
                            InputLabelProps={{
                              sx: { color: theme.palette.text.primary },
                            }}
                            value={field.value || ""}
                            onChange={field.onChange}
                            inputRef={field.ref}
                            label="Quantity"
                            fullWidth
                            error={!!fieldState.error}
                          />
                        )}
                      />

                      {/* {errors.rowVariantData[fieldIndex].quantity && <FormHelperText error>{errors.product_name?.message}</FormHelperText>} */}
                    </Grid>
                  ) : null}
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        )
      }
    })
  }

  const getCategory = (type: string, data: string) => {
    let id: number = Date.now()
    let label: string = data!
    let newvalue = { id, label }

    switch (type) {
      case "section_cat":
        if (sectionCats.every((cat) => cat.label !== label)) {
          setSectionCats((prev) => [...prev, { id, label }])
          !!newvalue && setValue("section_cat", newvalue as any) // ** i will look after finish this project
        }

        break
      case "main_cat":
        if (mainCats.every((cat) => cat.label !== label)) {
          setMainCats((prev) => [...prev, { id, label }])
          !!newvalue && setValue("main_cat", newvalue as any) // **  i will look after finish this project
        }
        break
      case "sub_cat":
        if (subCats.every((cat) => cat.label !== label)) {
          setSubCats((prev) => [...prev, { id, label }])
          !!newvalue && setValue("sub_cat", newvalue as any) // **  i will look after finish this project
        }
        break

      default:
        break
    }
  }

  const submitHandler = (data: ProductsType) => {
    console.log(data)
    if (products.every((item) => item.product_name !== data.product_name)) {
      let productsData = [...products]
      productsData.push({ ...data, id: Date.now() } as never)
      setProducts(productsData as never)
    } else {
      let productsData = [...products]
      let theProduct = productsData.find((item: ProductsType) => item.id === data.id)!
      theProduct.product_name = data.product_name
      theProduct.price = data.price
      theProduct.section_cat = data.section_cat
      theProduct.main_cat = data.main_cat
      theProduct.sub_cat = data.sub_cat
      theProduct.selected_variants = data.selected_variants
      theProduct.rowVariantData = data.rowVariantData
      theProduct.description = data.description

      setProducts(productsData as never)
    }
    setResetCount((prev) => prev + 1)
  }

  const addHandler = () => {
    append({ quantity: "" })
  }

  const renderSelectItem = () => {
    return products.map((item) => {
      return (
        <MenuItem key={item.id} value={item.id}>
          {item.product_name}
        </MenuItem>
      )
    })
  }
  const editHandler = () => {
    let tmpProduct = products.find((product) => product.id === Number(selectProduct))
    reset(tmpProduct as never)
  }
  useEffect(() => {
    reset(defaultValues)
  }, [resetCount])
  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          <Grid item xs={2}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label" sx={{ color: theme.palette.text.primary }}>
                Variant Select
              </InputLabel>
              <Select
                color="secondary"
                fullWidth
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Variant Select"
                value={selectProduct}
                onChange={(e) => setSelectProduct(e.target.value as string)}
              >
                {renderSelectItem()}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={1}>
            <Button variant="contained" onClick={editHandler}>
              Edit
            </Button>
          </Grid>
          <Grid item xs={1}>
            <Button
              variant="contained"
              onClick={() => {
                setResetCount((prev) => prev + 1)
              }}
            >
              New
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <form onSubmit={handleSubmit(submitHandler as () => string)}>
          <Grid container spacing={4} color="#796c7f">
            <Grid item xs={6}>
              <Controller
                control={control}
                name="product_name"
                render={({ field, fieldState }) => (
                  <TextField
                    variant="standard"
                    autoComplete="off"
                    InputLabelProps={{
                      sx: { color: theme.palette.text.primary },
                    }}
                    value={field.value}
                    onChange={field.onChange}
                    inputRef={field.ref}
                    label="Product Name"
                    fullWidth
                    error={!!fieldState.error}
                  />
                )}
              />

              {errors.product_name && <FormHelperText error>{errors.product_name?.message}</FormHelperText>}
            </Grid>
            <Grid item xs={6}>
              <Controller
                control={control}
                name="price"
                render={({ field, fieldState }) => (
                  <TextField
                    InputLabelProps={{
                      sx: { color: theme.palette.text.primary },
                    }}
                    autoComplete="off"
                    type="number"
                    variant="standard"
                    value={field.value}
                    onChange={field.onChange}
                    inputRef={field.ref}
                    label="Price"
                    fullWidth
                    error={!!fieldState.error}
                  />
                )}
              />

              {errors.price && <FormHelperText error>{errors.price?.message}</FormHelperText>}
            </Grid>
            <Grid item xs={12}>
              <Controller
                control={control}
                name="description"
                render={({ field, fieldState }) => (
                  <TextField
                    variant="standard"
                    InputLabelProps={{
                      sx: { color: theme.palette.text.primary },
                    }}
                    value={field.value}
                    onChange={field.onChange}
                    inputRef={field.ref}
                    label="Description"
                    multiline
                    maxRows={4}
                    fullWidth
                    error={!!fieldState.error}
                  />
                )}
              />

              {errors.description && <FormHelperText error>{errors.description?.message}</FormHelperText>}
            </Grid>
            <Grid item xs={4}>
              <QuickAdd getCategory={getCategory} name="section_cat">
                <Controller
                  control={control}
                  name="section_cat"
                  rules={{ required: true }}
                  render={({ field: { onChange, value, ref } }) => (
                    <Autocomplete
                      onChange={(_, item) => onChange(item)}
                      value={value}
                      options={sectionCats}
                      getOptionLabel={(item) => (item.label ? item.label : "")}
                      isOptionEqualToValue={(option, value) => option.id === value.id}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          variant="standard"
                          InputLabelProps={{
                            sx: { color: theme.palette.text.primary },
                          }}
                          inputRef={ref}
                          label="Section Cat"
                          error={!!errors.section_cat}
                        />
                      )}
                    />
                  )}
                />
              </QuickAdd>
              {errors.section_cat && <FormHelperText error>{errors.section_cat?.message}</FormHelperText>}
            </Grid>
            <Grid item xs={4}>
              <QuickAdd getCategory={getCategory} name="main_cat">
                <Controller
                  control={control}
                  name="main_cat"
                  rules={{ required: true }}
                  render={({ field: { onChange, value, ref } }) => (
                    <Autocomplete
                      onChange={(_, item) => onChange(item)}
                      value={value}
                      options={mainCats}
                      getOptionLabel={(item) => (item.label ? item.label : "")}
                      isOptionEqualToValue={(option, value) => option.id === value.id}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          variant="standard"
                          InputLabelProps={{
                            sx: { color: theme.palette.text.primary },
                          }}
                          inputRef={ref}
                          label="Main Cat"
                          error={!!errors.main_cat}
                        />
                      )}
                    />
                  )}
                />
              </QuickAdd>
              {errors.main_cat && <FormHelperText error>{errors.main_cat?.message}</FormHelperText>}
            </Grid>
            <Grid item xs={4}>
              <QuickAdd getCategory={getCategory} name="sub_cat">
                <Controller
                  control={control}
                  name="sub_cat"
                  rules={{ required: true }}
                  render={({ field: { onChange, value, ref } }) => (
                    <Autocomplete
                      onChange={(_, item) => onChange(item)}
                      value={value}
                      autoSelect
                      options={subCats}
                      getOptionLabel={(item) => (item.label ? item.label : "")}
                      isOptionEqualToValue={(option, value) => option.id === value.id}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          InputLabelProps={{
                            sx: { color: theme.palette.text.primary },
                          }}
                          variant="standard"
                          inputRef={ref}
                          label="Sub Cat"
                          error={!!errors.sub_cat}
                        />
                      )}
                    />
                  )}
                />
              </QuickAdd>
              {errors.sub_cat && <FormHelperText error>{errors.sub_cat?.message}</FormHelperText>}
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="selected_variants"
                control={control}
                render={({ field: { onChange } }) => (
                  <Autocomplete
                    id="selected_variants"
                    onChange={(_, data) => onChange(data)}
                    options={variants}
                    multiple
                    disableCloseOnSelect
                    getOptionLabel={(option) => option.variantName}
                    isOptionEqualToValue={(option, value) => option.variantName === value.variantName}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Variant Type"
                        InputLabelProps={{
                          sx: { color: theme.palette.text.primary },
                        }}
                        error={!!errors.selected_variants}
                        inputProps={{
                          ...params.inputProps,
                        }}
                      />
                    )}
                    renderTags={(tagValue, getTagProps) => {
                      return tagValue.map((option, index) => (
                        <Chip
                          {...getTagProps}
                          key={index}
                          variant="outlined"
                          sx={{ mr: 0.5, mb: 0.5 }}
                          color="primary"
                          label={option.variantName}
                          size="medium"
                        />
                      ))
                    }}
                  />
                )}
              />
              {errors?.selected_variants && <FormHelperText sx={{ color: "error.main" }}>{errors?.selected_variants?.message}</FormHelperText>}
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" onClick={addHandler}>
                Add Variant
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={4}>
                {renderVariantValueQuantities()}
              </Grid>
            </Grid>
            <Grid item xs={12} display="flex" justifyContent="flex-end">
              <Button variant="contained" type="submit">
                Save
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  )
})

export default CreateProduct
