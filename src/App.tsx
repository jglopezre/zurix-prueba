import { Box, Container, CssBaseline, SxProps, Theme } from "@mui/material"

import { ProductProvider } from "./context/ProductProvider"
import { ProductsList } from "./components/ProductsList"
import { ProductInputModal } from "./components/ProductInputModal"
import { ModalModeProvider } from "./context/ModalModeProvider"
import { AppViewHeader } from "./components/AppViewHeader"
import { AlertMessage } from "./components/AlertMessage"
import { SnackBarDataProvider } from "./context/SnackBarDataProvider"
import { SnackbarProvider } from "notistack"

const productListBoxStyleConfig:SxProps<Theme> = {
  height: '100vh',
  overflow: 'scroll'
}

function App(): JSX.Element {

  return(
    <>
      <CssBaseline />
      <ProductProvider>
        <ModalModeProvider>
          <SnackBarDataProvider>
            <SnackbarProvider maxSnack={1}>
              <Container fixed>
                <AppViewHeader title="inventario" />
                <Box sx={ productListBoxStyleConfig }>
                  <ProductsList />
                </Box>
                <ProductInputModal />
                <AlertMessage />
              </Container>
            </SnackbarProvider>
          </SnackBarDataProvider>
        </ModalModeProvider>
      </ProductProvider>
    </>
  )
}

export default App
