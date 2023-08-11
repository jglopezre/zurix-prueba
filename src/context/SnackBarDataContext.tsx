import { createContext } from "react";
import { SnackBarDataSetContext } from "../types";

const SnackBarDataInitialValue: SnackBarDataSetContext = {
  data: { mode: 'initial' },
  setData: () => {}
}

export const SnackBarDataContext = createContext<SnackBarDataSetContext>(SnackBarDataInitialValue)