import { Box, Button, Stack, Typography } from "@mui/material"
import { AppViewHeadersProps } from "../types"
import { useContext } from "react"
import { ModalModeContext } from "../context/ModalModeContext"

export const AppViewHeader = (props: AppViewHeadersProps) => {
  const { title, setState } = props
  const modalModeDataProvided = useContext(ModalModeContext)

  const onButtonPressing = () => {
    modalModeDataProvided.setModalModeData({ mode: "CREATE", isOpen: true })
    setState(true)
  }

  return (
    <Stack spacing={3} direction="row">
      <Typography variant="h1">{`${title}`}</Typography>
      <Box p={5}>
        <Button variant="contained" onClick={() => onButtonPressing()} >Nuevo Producto</Button>
      </Box>
    </Stack>
  )
}
