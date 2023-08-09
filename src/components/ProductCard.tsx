import { Box, Button, Stack, SxProps, Theme, Typography } from "@mui/material"
import { ProductCardProps } from "../types"

const boxStyle: SxProps<Theme> = {
  boxShadow: "0 3px 3px rgba(0, 0, 0, 0.3)",
  borderRadius: 2,
  p: 2,
}

export const ProductCard = (props: ProductCardProps): JSX.Element => {
  const { id, producto, cantidad, descripcion, unidad } = props.product

  return (
    <Box sx={boxStyle}>
      <Stack direction="row" spacing={4}>
        <Stack width="50%">
          <Typography variant="body1">{`Producto: ${producto}`}</Typography>
          <Typography variant="body1">{`Cantidad: ${cantidad}`}</Typography>
          <Typography variant="body1">{`Unidad: ${unidad}`}</Typography>
          <Typography variant="body1">{`Descripcion: ${descripcion}`}</Typography>     
        </Stack>
        <Stack direction="row" spacing={4} height={32} >
          <Button variant="outlined" onClick={() => console.log('editar')}>Editar</Button>
          <Button variant="contained" onClick={() => props.dispatch({type: 'DELETE_PRODUCT', payload: id})} color="error">Eliminar</Button>
        </Stack>
      </Stack>
    </Box>
    
  )
}
