import { Container, CssBaseline } from "@mui/material"
import { ProductProvider } from "./context/ProductProvider"
import { ProductsList } from "./components/ProductsList"
import { useState } from "react"
import { ProductInputModal } from "./components/ProductInputModal"
import { ModalModeProvider } from "./context/ModalModeProvider"
import { AppViewHeader } from "./components/AppViewHeader"


function App(): JSX.Element {
  const [inputFormIsOpen, setInputFormIsOpen] = useState(false)

  return(
    <>
    <CssBaseline />
    <ProductProvider>
      <ModalModeProvider>
        <Container>
          <AppViewHeader title="inventario" setState={setInputFormIsOpen} />
          <ProductInputModal isOpen={ inputFormIsOpen } setIsOpen={ setInputFormIsOpen } />
          <ProductsList />
        </Container>
      </ModalModeProvider>
    </ProductProvider>
    </>
  )
}

export default App
