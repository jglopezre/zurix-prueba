import { useState } from "react"
import { SnackBarDataContext } from "./SnackBarDataContext"
import { AlertData, DataProviderProps } from "../types"

export const SnackBarDataProvider = (props: DataProviderProps) => {
  const [data, setData] = useState<AlertData>({mode: 'initial'})

  return (
    <SnackBarDataContext.Provider value={{data, setData}}>
      {props.children}
    </SnackBarDataContext.Provider>
  )
}
