import { useState } from "react"
import { DataProviderProps, ModalModeData } from "../types"
import { ModalModeContext } from "./ModalModeContext"

export const ModalModeProvider = (props: DataProviderProps) => {
  const [ modalModeData, setModalModeData ] = useState<ModalModeData>({ mode: 'CREATE', isOpen: false })

  return(
    <ModalModeContext.Provider value={{ modalModeData, setModalModeData }}> 
      { props.children }
    </ModalModeContext.Provider>
  )
}
