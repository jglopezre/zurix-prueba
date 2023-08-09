import { useState } from "react"
import { ModalMode, ModalModeSetProvider } from "../types"
import { ModalModeContext } from "./ModalModeContext"

export const ModalModeProvider = (props: ModalModeSetProvider) => {
  const [modalMode, setModalMode] = useState<ModalMode>("NONE")

  return(
    <ModalModeContext.Provider value={{modalMode, setModalMode}}> 
      {props.children}
    </ModalModeContext.Provider>
  )
}
