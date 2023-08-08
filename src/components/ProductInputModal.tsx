import { Box, Button, Dialog, DialogContent, DialogTitle, MenuItem, SxProps, TextField, TextFieldProps, Theme } from "@mui/material"
import { Product, ProductsInputForm } from "../types"
import { useState } from "react"

enum Unity {
  UNITY = "unidad",
  KILOGRAM = "kilogramo",
  LITER = "litro",
  METTER = "metro"
}

const mainBoxConfig: SxProps<Theme> = {
  p: 4
}

const productFieldConfig: TextFieldProps = {
  autoFocus: true,
  margin: "dense",
  id: "product",
  label: "Product",
  type: "text",
  fullWidth: true,
  variant: "standard"
}

const quantityFieldConfig: TextFieldProps = {
  margin: "dense",
  id: "quantity",
  label: "Cantidad",
  type: "number",
  fullWidth: true,
  variant: "standard"
}

const unityFieldConfig: TextFieldProps = {
  margin: "dense",
  select: true,
  id: "unity",
  label: "Unidad",
  fullWidth: true,
  variant: "standard"
}

const DescriptionFieldConfig: TextFieldProps = {
  margin: "dense",
  id: "description",
  label: "Descripcion",
  type: "text",
  fullWidth: true,
  variant: "standard"
}

const unities = [
  {
    value: Unity.UNITY,
    label: Unity.UNITY
  },
  {
    value: Unity.KILOGRAM,
    label: Unity.KILOGRAM
  },
  {
    value: Unity.LITER,
    label: Unity.LITER
  },
  {
    value: Unity.METTER,
    label: Unity.METTER
  }
]

export const ProductInputModal = (props: ProductsInputForm): JSX.Element => {

  const [productInputData, setProductInputData] = useState({} as Product)

  const productChangeHandle = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setProductInputData((productData) => {
      return { ...productData, producto: event.target.value }
    })
  }

  const quantityChangeHandle = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setProductInputData((productData) => {
      return { ...productData, cantidad: parseInt(event.target.value) }
    })
  }

  const unityChangeHandle = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setProductInputData((productData) => {
      return { ...productData, unidad: event.target.value }
    })
  }

  const descriptionChangeHandle = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setProductInputData((productData) => {
      return { ...productData, description: event.target.value }
    })
  }

  const onAccept = () => {
    console.log(productInputData)
    props.setIsOpen(false)
  }

  return (
    <Dialog open={props.isOpen}>
      <Box sx={mainBoxConfig} component="form">
        <DialogTitle>Agrega un nuevo producto</DialogTitle>
        <DialogContent>
          Ingresa los datos para crear un nuevo producto
        </DialogContent>
        <TextField {...productFieldConfig} onChange={productChangeHandle}/>
        <TextField {...quantityFieldConfig} onChange={quantityChangeHandle}/>
        <TextField {...unityFieldConfig} onChange={unityChangeHandle}>
          {
            unities.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))
          }
        </TextField>
        <TextField {...DescriptionFieldConfig} onChange={descriptionChangeHandle}/>
        <Button onClick={ () => props.setIsOpen(false) }>Cancelar</Button>
        <Button onClick={ () => onAccept() }>Aceptar</Button>
      </Box>
    </Dialog>
  )
}
