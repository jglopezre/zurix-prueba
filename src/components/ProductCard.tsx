import { Box, Button, Stack, SxProps, Theme, Typography } from "@mui/material"
import { ProductCardProps } from "../types"
import { DeleteWarningAdvice } from "./DeleteWarningAdvice"
import { useContext, useState } from "react"
import { ModalModeContext } from "../context/ModalModeContext"

const boxStyle: SxProps<Theme> = {
  boxShadow: "0 3px 3px rgba(0, 0, 0, 0.3)",
  borderRadius: 2,
  p: 2,
}

export const ProductCard = (props: ProductCardProps): JSX.Element => {
  const { id, producto, cantidad, descripcion, unidad } = props.product
  const [ modalWarnIsOpen, setModalWarnIsOpen ] = useState(false)

  const modalModeDataProvided = useContext(ModalModeContext)

  const deleteHandle = () => {
    setModalWarnIsOpen(true)
  }

  const onConfirmHandle = () => {
    props.dispatch({type: 'DELETE_PRODUCT', payload: id})
    setModalWarnIsOpen(false)
  }

  const onModifyHandle = () => {
    modalModeDataProvided.setModalModeData({mode: 'MODIFY', isOpen: true , product: props.product})
  }

  return (
    <>
      <DeleteWarningAdvice isOpen={modalWarnIsOpen} setIsOpen={setModalWarnIsOpen} producName={producto} onConfirm={onConfirmHandle}/>
      <Box sx={boxStyle}>
        <Stack direction="row">
          <Stack flexGrow={2}>
            <Typography variant="body1">{`Producto: ${producto}`}</Typography>
            <Typography variant="body1">{`Cantidad: ${cantidad}`}</Typography>
            <Typography variant="body1">{`Unidad: ${unidad}`}</Typography>
            <Typography variant="body1">{`Descripcion: ${descripcion}`}</Typography>  
          </Stack>
          <Stack direction="row" spacing={4} height={100} alignItems="center" justifyContent="center" flexGrow={1}>
            <Button variant="outlined" onClick={() => onModifyHandle()}>Editar</Button>
            <Button variant="contained" onClick={() => deleteHandle()} color="error">Eliminar</Button>  
          </Stack>
          
        </Stack>
      </Box>
    </>
  )
}
