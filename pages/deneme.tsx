// ** React Core
import React, { Fragment, useRef } from "react"

// ** MUI Imports
import { Button, FormHelperText, Grid, TextField } from "@mui/material"

// ** React Hook Form
import { Controller, useFieldArray, useForm } from "react-hook-form"

// ** Third Party Imports
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

const schema = yup.object({
  test: yup.array().of(
    yup.object().shape({
      value: yup.string().required("Name is required"),
    })
  ),
})
const schemaOther = yup.object({
  testOther: yup.array().of(
    yup.object().shape({
      value: yup.string().required("OtherName is required"),
    })
  ),
})

const DenemeEvren = () => {
  const inputValueRef = useRef()

  const {
    register,
    control,
    handleSubmit,
    reset,
    trigger,
    setError,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: { test: [{ value: "" }] },
    resolver: yupResolver(schema),
  })
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
    control,
    name: "test",
  })
  const {
    register: registerOther,
    control: controlOther,
    handleSubmit: handleSubmitOther,
    reset: resetOther,
    trigger: triggerOther,
    setError: setErreorOther,
    formState: { errors: errorsOther },
  } = useForm({
    mode: "onChange",
    defaultValues: { testOther: [{ value: "" }] },
    resolver: yupResolver(schemaOther),
  })

  const {
    fields: fieldsOther,
    append: appendOther,
    prepend: prependOther,
    remove: removeOther,
    swap: swapOther,
    move: moveOther,
    insert: insertOther,
  } = useFieldArray({
    control: controlOther,
    name: "testOther",
  })

  const pluss = () => {
    append({ value: "" })
  }
  const minuss = (index: number) => {
    remove(index)
  }

  const onSubmit = (data: any) => {
    console.log(data)
    console.log(errors)
  }
  ////
  const plussOther = () => {
    appendOther({ value: "" })
  }
  const minussOther = (index: number) => {
    removeOther(index)
  }

  const onSubmitOther = (data: any) => {
    console.log(data)
    console.log(errors)
  }

  const renderField = () => {
    return fields.map((field, index) => {
      return (
        <Fragment key={field.id}>
          <Grid item xs={12}>
            <Grid container columnSpacing={5} alignItems="center">
              <Grid item>
                <Controller
                  control={control}
                  name={`test.${index}.value`}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      key={field.id}
                      // important to include key with field's id
                      {...register(`test.${index}.value`)}
                      label="Type"
                      value={value}
                      onChange={onChange}
                      autoComplete="off"
                      inputRef={inputValueRef}
                      error={!!errors?.test?.[index]}
                    />
                  )}
                />
                {errors?.test?.[index] && <FormHelperText sx={{ color: "error.main" }}>{errors?.test?.[index]?.value?.message}</FormHelperText>}
              </Grid>
              <Grid item>
                <Button variant="contained" onClick={pluss}>
                  +
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" onClick={() => minuss(index)}>
                  -
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Fragment>
      )
    })
  }
  const renderFieldOther = () => {
    return fieldsOther.map((field, index) => {
      return (
        <Fragment key={field.id}>
          <Grid item xs={12}>
            <Grid container columnSpacing={5} alignItems="center">
              <Grid item>
                <Controller
                  control={controlOther}
                  name={`testOther.${index}.value`}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      key={field.id}
                      // important to include key with field's id
                      {...registerOther(`testOther.${index}.value`)}
                      label="TypeOther"
                      value={value}
                      onChange={onChange}
                      autoComplete="off"
                      inputRef={inputValueRef}
                      error={!!errorsOther?.testOther?.[index]}
                    />
                  )}
                />
                {errorsOther?.testOther?.[index] && (
                  <FormHelperText sx={{ color: "error.main" }}>{errorsOther?.testOther?.[index]?.value?.message}</FormHelperText>
                )}
              </Grid>
              <Grid item>
                <Button variant="contained" onClick={plussOther}>
                  +
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" onClick={() => minussOther(index)}>
                  -
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Fragment>
      )
    })
  }

  return (
    <Grid container spacing={5}>
      <Grid item xs={12}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container rowSpacing={5}>
            {renderField()}
            <Grid item>
              <Button variant="contained" type="submit">
                submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
      <Grid item xs={12}>
        <Grid container>
          <form onSubmit={handleSubmitOther(onSubmitOther)}>
            {renderFieldOther()}
            <Grid item>
              <Button variant="contained" type="submit">
                submit
              </Button>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default DenemeEvren
