// ** React Core
import React, { forwardRef, useEffect, useState } from "react"
import { useGlobalContext } from "src/contexts"

// ** MUI Imports
import { Button, Card, CardContent, FormHelperText, Grid, Stack, TextField, Box, InputLabel, Select, MenuItem, FormControl, Fab } from "@mui/material"
import { useTheme, IconButton } from "@mui/material"

// **Icons
import { FaPlus, FaMinus } from "react-icons/fa"

// ** React Hook Form
import { Controller, useFieldArray, useForm } from "react-hook-form"

// ** Third Party Imports
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

const schema = yup.object({
  variantName: yup.string().required("Type is required"),
  variantValues: yup.array().of(
    yup.object().shape({
      value: yup.string().required("Name is required"),
    })
  ),
})
const defaultValues = { variantName: "", variantValues: [{ value: "" }] }
// ** Types
type VariantsType = {
  id?: number
  variantName: string
  variantValues: { value: string }[]
}

const CreateVariant = forwardRef((props, ref) => {
  const { variants, setVariants } = useGlobalContext()

  // ** States
  const [selectValue, setSelectValue] = useState("")
  const [resetCount, setResetCount] = useState(0)
  // ** Hooks
  const theme = useTheme()

  const {
    register,
    control,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
  })
  const { fields, append, prepend, remove, swap, move, insert, update, replace } = useFieldArray({
    control,
    name: "variantValues",
  })

  const addHandler = () => {
    append({ value: "" })
  }

  const handleOnSubmit = (data: VariantsType) => {
    if (variants.every((item) => item.variantName !== data.variantName)) {
      let variantData = [...variants]
      variantData.push({ ...data, id: Date.now() })
      setVariants(variantData as never)
    } else {
      let variantData = [...variants]
      variantData.find((item) => item.id === data.id)!.variantValues = data.variantValues
      setVariants(variantData as never)
    }
  }
  console.log(variants)
  const minuss = (index: number) => {
    remove(index)
  }
  const renderSelectItem = () => {
    return variants.map((item) => {
      return (
        <MenuItem key={item.id} value={item.id}>
          {item.variantName}
        </MenuItem>
      )
    })
  }
  const editHandler = () => {
    let tmpVariant = variants.find((variant) => variant.id === Number(selectValue))
    reset(tmpVariant)

    console.log(fields)
  }
  useEffect(() => {
    reset(defaultValues)
  }, [resetCount])
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          <Grid item xs={3}>
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
                value={selectValue}
                onChange={(e) => setSelectValue(e.target.value as string)}
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
        <form onSubmit={handleSubmit(handleOnSubmit as () => string)}>
          <Card elevation={4} sx={{ borderRadius: "30px" }}>
            <CardContent>
              <Grid container spacing={4} justifyContent="center" alignItems="center">
                <Grid item xs={2}>
                  <Controller
                    control={control}
                    name="variantName"
                    rules={{ required: true }}
                    render={({ field: { value, onChange, onBlur } }) => (
                      <TextField
                        variant="standard"
                        InputLabelProps={{
                          sx: { color: theme.palette.text.primary },
                        }}
                        label="Variant Type"
                        value={value}
                        onChange={onChange}
                        autoComplete="off"
                        error={!!errors.variantName}
                      />
                    )}
                  />
                  {errors.variantName && <FormHelperText sx={{ color: "error.main" }}>{errors.variantName.message}</FormHelperText>}
                </Grid>

                <Grid item>
                  <Fab color="primary" aria-label="add" onClick={addHandler} size="small">
                    <FaPlus />
                  </Fab>
                </Grid>
                <Grid item xs={12}>
                  <Grid container spacing={2} alignItems="center">
                    {fields.map((field, index) => (
                      <Grid item xs={4} key={index}>
                        <Grid container alignItems="center" spacing={4}>
                          <Grid item>
                            <Controller
                              control={control}
                              name={`variantValues.${index}.value`}
                              rules={{ required: true }}
                              render={({ field: { value, onChange, onBlur } }) => (
                                <TextField
                                  key={field.id}
                                  // important to include key with field's id
                                  {...register(`variantValues.${index}.value`)}
                                  sx={{ width: "100%" }}
                                  variant="outlined"
                                  label={`Variant Value ${index + 1}`}
                                  InputLabelProps={{
                                    sx: { color: theme.palette.text.primary },
                                  }}
                                  value={value}
                                  onChange={onChange}
                                  autoComplete="off"
                                  error={!!errors?.variantValues?.[index]}
                                />
                              )}
                            />
                            {errors?.variantValues?.[index] && (
                              <FormHelperText sx={{ color: "error.main" }}>{errors?.variantValues?.[index]?.value?.message}</FormHelperText>
                            )}
                          </Grid>
                          <Grid item>
                            <Fab color="secondary" aria-label="delete" onClick={() => minuss(index)} size="small">
                              <FaMinus />
                            </Fab>
                          </Grid>
                        </Grid>
                      </Grid>
                    ))}
                    <Grid item xs={12}>
                      <Stack direction="row" justifyContent="flex-end">
                        <Button variant="contained" type="submit">
                          save
                        </Button>
                      </Stack>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </form>
      </Grid>
    </Grid>
  )
})

export default CreateVariant
