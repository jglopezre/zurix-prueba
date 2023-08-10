import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, MenuItem, TextField, TextFieldProps } from "@mui/material"
import { Product, ProductsInputForm } from "../types"
import { useContext, useEffect, useState } from "react"
import { ProductContext } from "../context/ProductContext"
import { ModalModeContext } from "../context/ModalModeContext"

enum Unity {
  UNITY = "unidad",
  KILOGRAM = "kilogramo",
  LITER = "litro",
  METER = "metro"
}

const emptyProduct: Product = {
  id: "XXXX",
  producto: "",
  cantidad: 0,
  unidad: Unity.UNITY,
  descripcion: ""
}

//Textfields Configurations
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
  //const { isOpen, setIsOpen } = props

  const modalModeDataProvided = useContext(ModalModeContext)

  const mode = modalModeDataProvided.modalModeData.mode
  const product = modalModeDataProvided.modalModeData.product
  const isOpen = modalModeDataProvided.modalModeData.isOpen
  const setModalModeData = modalModeDataProvided.setModalModeData
  const productsProvided = useContext( ProductContext )
  const [ productInputData, setProductInputData ] = useState( product ?? emptyProduct )

  useEffect(() => {
    if(mode === 'MODIFY') setProductInputData(product ?? emptyProduct)
  }, [mode])
  

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
    if(mode === 'CREATE') {
      setModalModeData({ mode: 'CREATE', isOpen: false })
    } else if (mode === 'MODIFY') {
      setModalModeData({ mode: 'MODIFY', isOpen: false, product: product ?? emptyProduct })
    }
  }

  return (
    <Dialog open={isOpen}>
      <DialogTitle>Agrega un nuevo producto</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Ingresa los datos para crear un nuevo producto
        </DialogContentText>
        <TextField {...productFieldConfig} onChange={productChangeHandle} defaultValue={mode === 'MODIFY' ? product?.producto : emptyProduct.producto} />
        <TextField {...quantityFieldConfig} onChange={quantityChangeHandle} defaultValue={mode === 'MODIFY' ? product?.cantidad : emptyProduct.cantidad} />
        <TextField {...unityFieldConfig} onChange={unityChangeHandle} defaultValue={mode === 'MODIFY' ? product?.unidad : emptyProduct.unidad} >
          {
            unities.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))
          }
        </TextField>
        <TextField {...DescriptionFieldConfig} onChange={descriptionChangeHandle} defaultValue={mode === 'MODIFY' ? product?.descripcion : emptyProduct.descripcion}/>
      </DialogContent>
      <DialogActions>
        <Button onClick={ () => props.setIsOpen(false) }>Cancelar</Button>
        <Button onClick={ () => onAccept() }>Aceptar</Button>
      </DialogActions>
    </Dialog>
  )
}
