import { createContext } from "react";
import { ModalModeSetContext } from "../types";

const defaultValue: ModalModeSetContext = {
  modalModeData: { mode: 'CREATE', isOpen: false },
  setModalModeData: () => {}
}

export const ModalModeContext = createContext<ModalModeSetContext> (defaultValue)
