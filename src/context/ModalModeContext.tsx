import { createContext } from "react";
import { ModalModeSetContext } from "../types";

export const ModalModeContext = createContext<ModalModeSetContext | undefined> (undefined)
