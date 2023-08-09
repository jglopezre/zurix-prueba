import { Box, Button, Dialog, DialogContent, DialogTitle, MenuItem, SxProps, TextField, TextFieldProps, Theme } from "@mui/material"
import { Product, ProductsInputForm } from "../types"
import { useContext, useState } from "react"
import { ProductContext } from "../context/ProductContext"

enum Unity {
  UNITY = "unidad",
  KILOGRAM = "kilogramo",
  LITER = "litro",
  METER = "metro"
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
    value: Unity.METER,
    label: Unity.METER
  }
]

export const ProductInputModal = (props: ProductsInputForm): JSX.Element => {
  const {isOpen, setIsOpen, mode, product} = props

  const productsProvided = useContext( ProductContext )
  const [productInputData, setProductInputData] = useState({} as Product)

  const onModalMode = mode === 'CREATE'
  ? () => productsProvided?.dispatch({type: 'ADD_PRODUCT', payload: productInputData})
  : mode === "MODIFY"
  ? () => productsProvided?.dispatch({type: 'MODIFY_PRDUCT', payload: productInputData})
  : () => console.warn(`Modal Mode value is invalid. modalMode = ${mode}`)

  const productChangeHandle = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setProductInputData((productData) => {
      return { ...productData, producto: event.target.value }
    })
  }

  const quantityChangeHandle = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setProductInputData((productData) => {
      return { ...productData, cantidad: Number(event.target.value) > 0 ? parseInt(event.target.value) : 0 }
    })
  }

  const unityChangeHandle = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setProductInputData((productData) => {
      return { ...productData, unidad: event.target.value }
    })
  }

  const descriptionChangeHandle = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setProductInputData((productData) => {
      return { ...productData, descripcion: event.target.value }
    })
  }

  const onAccept = () => {
    onModalMode()
    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen}>
      <Box sx={mainBoxConfig} component="form">
        <DialogTitle>Agrega un nuevo producto</DialogTitle>
        <DialogContent>
          Ingresa los datos para crear un nuevo producto
        </DialogContent>
        <TextField {...productFieldConfig} onChange={productChangeHandle} defaultValue={mode === 'MODIFY' ? product?.producto : ''} />
        <TextField {...quantityFieldConfig} onChange={quantityChangeHandle} defaultValue={mode === 'MODIFY' ? product?.cantidad : 0} />
        <TextField {...unityFieldConfig} onChange={unityChangeHandle} defaultValue={mode === 'MODIFY' ? product?.unidad : Unity.UNITY} >
          {
            unities.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))
          }
        </TextField>
        <TextField {...DescriptionFieldConfig} onChange={descriptionChangeHandle} defaultValue={mode === 'MODIFY' ? product?.descripcion : ''}/>
        <Button onClick={ () => props.setIsOpen(false) }>Cancelar</Button>
        <Button onClick={ () => onAccept() }>Aceptar</Button>
      </Box>
    </Dialog>
  )
}
