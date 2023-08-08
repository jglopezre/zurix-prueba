import { Box, Button, Container, CssBaseline, Stack, SxProps, Theme, Typography } from "@mui/material"
import { ProductProvider } from "./context/ProductProvider"
import { ProductsList } from "./components/ProductsList"
import { useState } from "react"
import { ProductInputModal } from "./components/ProductInputModal"

const boxStyle: SxProps<Theme> = {

}

function App(): JSX.Element {
  const [inputFormIsOpen, setInputFormIsOpen] = useState(false)
  return(
    <ProductProvider>
      <>
        <CssBaseline />
        <Container>
          <Box sx={boxStyle}>
            <Stack spacing={3}>
              <Typography variant="h1">Inventario</Typography>
              <Button variant="contained" onClick={() => setInputFormIsOpen(true)}>Nuevo Producto</Button>
            </Stack>
            <ProductInputModal isOpen={ inputFormIsOpen } setIsOpen={ setInputFormIsOpen } />
            <ProductsList />
          </Box>
        </Container>
      </>
    </ProductProvider>
  )
}

export default App
