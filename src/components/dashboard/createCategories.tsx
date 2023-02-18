// // ** React Core
// import React, { useState } from "react"

// // ** MUI imports
// import { Grid, Typography, TextField, Autocomplete, Button, FormControlLabel, FormHelperText } from "@mui/material"
// import { useTheme } from "@mui/material"

// // ** Third Party Imports
// import * as yup from "yup"
// import { useForm, Controller } from "react-hook-form"
// import { yupResolver } from "@hookform/resolvers/yup"
// import { toast } from "react-hot-toast"

// // NOTE - YUP Schema
// const schema = yup.object().shape({
//   product_name: yup.string().required("Name Required"),
//   section_cat: yup
//     .object()
//     .shape({
//       id: yup.number().required(),
//       label: yup.string().required(),
//     })
//     .required("Section Category Required")
//     .nullable(),
//   main_cat: yup
//     .object()
//     .shape({
//       id: yup.number().required(),
//       label: yup.string().required(),
//     })
//     .required("Main Category Required")
//     .nullable(),
//   sub_cat: yup
//     .object()
//     .shape({
//       id: yup.number().required(),
//       label: yup.string().required(),
//     })
//     .required("Sub Category Required")
//     .nullable(),

//   price: yup.string().required("Price Required"),
//   description: yup.string().required("Description Required"),
// })

// type ValuesType = {
//   id: number
//   label: string
// }

// // ** Dummy Autocomplate Data
// const dataValues = [
//   { id: 1, label: "test1" },
//   { id: 2, label: "test2" },
//   { id: 3, label: "test3" },
// ]
// // ** Types
// const defaultValues = {
//   section_cat: "",
//   main_cat: "",
//   sub_cat: "",
// }

// const CreateCategories = () => {
//   // ** States
//   const [values, setValues] = useState<ValuesType[]>(dataValues)

//   // ** Hooks
//   const theme = useTheme()

//   const {
//     reset,
//     control,
//     handleSubmit,
//     setFocus,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(schema),
//     defaultValues,
//     mode: "onChange",
//   })

//   // ** Handlers
//   const submitHandler = (data: typeof defaultValues) => {
//     console.log(data)
//   }
//   return (
//     <Grid container>
//       <Grid item xs={12}>
//         <form onSubmit={handleSubmit(submitHandler)}>
//           <Grid container spacing={4} color="#796c7f">
//             <Grid item xs={3}>
//               <Controller
//                 control={control}
//                 name="section_cat"
//                 render={({ field, fieldState }) => (
//                   <TextField
//                     variant="standard"
//                     fullWidth
//                     autoComplete="off"
//                     InputLabelProps={{
//                       sx: { color: theme.palette.text.primary },
//                     }}
//                     value={field.value}
//                     onChange={field.onChange}
//                     inputRef={field.ref}
//                     label="Section Category Name"
//                     error={!!fieldState.error}
//                   />
//                 )}
//               />

//               {errors.section_cat && <FormHelperText error>{errors.section_cat?.message}</FormHelperText>}
//             </Grid>
//             <Grid item xs={3}>
//               <Controller
//                 control={control}
//                 name="main_cat"
//                 render={({ field, fieldState }) => (
//                   <TextField
//                     variant="standard"
//                     fullWidth
//                     autoComplete="off"
//                     InputLabelProps={{
//                       sx: { color: theme.palette.text.primary },
//                     }}
//                     value={field.value}
//                     onChange={field.onChange}
//                     inputRef={field.ref}
//                     label="Main Category Name"
//                     error={!!fieldState.error}
//                   />
//                 )}
//               />

//               {errors.main_cat && <FormHelperText error>{errors.main_cat?.message}</FormHelperText>}
//             </Grid>
//             <Grid item xs={3}>
//               <Controller
//                 control={control}
//                 name="sub_cat"
//                 render={({ field, fieldState }) => (
//                   <TextField
//                     variant="standard"
//                     fullWidth
//                     autoComplete="off"
//                     InputLabelProps={{
//                       sx: { color: theme.palette.text.primary },
//                     }}
//                     value={field.value}
//                     onChange={field.onChange}
//                     inputRef={field.ref}
//                     label="Sub Category Name"
//                     error={!!fieldState.error}
//                   />
//                 )}
//               />

//               {errors.sub_cat && <FormHelperText error>{errors.sub_cat?.message}</FormHelperText>}
//             </Grid>

//             <Grid item xs={3} display="flex" justifyContent="flex-end">
//               <Button type="submit" variant="contained">
//                 Save
//               </Button>
//             </Grid>
//           </Grid>
//         </form>
//       </Grid>
//     </Grid>
//   )
// }

// export default CreateCategories
