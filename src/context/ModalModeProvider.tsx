import { useState } from "react"
import { ModalModeData, ModalModeSetProvider } from "../types"
import { ModalModeContext } from "./ModalModeContext"

export const ModalModeProvider = (props: ModalModeSetProvider) => {
  const [ modalModeData, setModalModeData ] = useState<ModalModeData>({ mode: 'CREATE', isOpen: false })

  return(
    <ModalModeContext.Provider value={{ modalModeData, setModalModeData }}> 
      { props.children }
    </ModalModeContext.Provider>
  )
}
