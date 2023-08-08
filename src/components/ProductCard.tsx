import { Box, Stack, SxProps, Theme, Typography } from "@mui/material"
import { ProductCardProps } from "../types"

const boxStyle: SxProps<Theme> = {
  boxShadow: "0 3px 3px rgba(0, 0, 0, 0.3)",
  borderRadius: 2,
  p: 2,
  width: "50%"
}


export const ProductCard = (props: ProductCardProps): JSX.Element => {
  const { producto, cantidad, descripcion, unidad } = props.product
  return (
    <Stack direction="row" spacing={4} >
      <Box sx={boxStyle}>
        <Typography variant="body1">{`Producto: ${producto}`}</Typography>
        <Typography variant="body1">{`Cantidad: ${cantidad}`}</Typography>
        <Typography variant="body1">{`Unidad: ${unidad}`}</Typography>
        <Typography variant="body1">{`Descripcion: ${descripcion}`}</Typography>     
      </Box>
    </Stack>
    
  )
}
