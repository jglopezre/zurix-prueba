import { Container, CssBaseline } from "@mui/material"
import { ProductProvider } from "./context/ProductProvider"
import { ProductsList } from "./components/ProductsList"
import { ProductInputModal } from "./components/ProductInputModal"
import { ModalModeProvider } from "./context/ModalModeProvider"
import { AppViewHeader } from "./components/AppViewHeader"


function App(): JSX.Element {

  return(
    <>
    <CssBaseline />
    <ProductProvider>
      <ModalModeProvider>
        <Container>
          <AppViewHeader title="inventario" />
          <ProductInputModal />
          <ProductsList />
        </Container>
      </ModalModeProvider>
    </ProductProvider>
    </>
  )
}

export default App
