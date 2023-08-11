import { useContext } from "react"
import { SnackBarDataContext } from "../context/SnackBarDataContext"
import { OptionsObject, useSnackbar } from 'notistack'

const snackBarConfig: OptionsObject = {
  variant:'success',
  anchorOrigin: {vertical: 'bottom', horizontal: 'right'}
}

export const AlertMessage = () => {
  const alertDataProvided = useContext(SnackBarDataContext)
  const { enqueueSnackbar } = useSnackbar()
  const data = alertDataProvided.data

  switch(data.mode) {
    case 'created':
      enqueueSnackbar(`El producto: ${ data.name }, ha sido creado con éxito.`, snackBarConfig)
      break

    case 'modified':
      enqueueSnackbar(`El producto: ${ data.name }, ha sido modificado con éxito.`, snackBarConfig)
      break
    
    case 'deleted':
      enqueueSnackbar(`El producto: ${ data.name } ha sido eliminado con éxito.`, snackBarConfig)
      break

    default: null
  }

  return (
    <>
    </>
  )
}
