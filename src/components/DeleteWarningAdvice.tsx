import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material"
import { DeleteWarningAdviceProps } from "../types"


export const DeleteWarningAdvice = (props: DeleteWarningAdviceProps) => {
  const {isOpen, setIsOpen, producName, onConfirm} = props
  return (
    <Dialog open={isOpen}>
      <DialogTitle>Eliminar</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Va a eliminar el producto:<b>{` ${producName}`}</b> 
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setIsOpen(false)}>Cancelar</Button>
        <Button onClick={() => onConfirm()}>Aceptar</Button>
      </DialogActions>
    </Dialog>
  )
}
