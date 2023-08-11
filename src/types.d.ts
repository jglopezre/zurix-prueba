

//ReactComponents Interfaces and types
export interface DataProviderProps {
  children: JSX.Element
}

export interface ProductCardProps {
  product: Product
  dispatch: ProductReducerDispatch
}

export interface DeleteWarningAdviceProps {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  producName: string
  onConfirm: () => void
}

export interface AppViewHeadersProps {
  title: string
}

//Types and Interfaces for productsListReducer
export interface Product {
  id: string
  producto: string
  cantidad: number
  unidad: string
  descripcion: string
}

export type ProductAction = 
  { type: 'ADD_PRODUCT', payload: Product }
  | { type: 'MODIFY_PRDUCT', payload: Product }
  | { type: 'DELETE_PRODUCT', payload: string }

export type ProductList = Array<Product>
export type ProductReducerDispatch = React.Dispatch<ProductAction>

//Types and interfaces for ProductListContext
export interface ProductsDataContext {
  productsList: ProductList
  dispatch: ProductReducerDispatch
}

//Types and interfaces of Model Mode
export type ModalModeData = 
    {mode: 'CREATE', isOpen: boolean, product?: Product }
  | {mode: 'MODIFY', isOpen: boolean, product: Product }

export interface ModalModeSetContext {
  modalModeData: ModalModeData
  setModalModeData: React.Dispatch<React.SetStateAction<ModalModeData>>
}

//Types for AlertMessage
export interface SnackBarDataSetContext {
  data: AlertData
  setData: React.Dispatch<React.SetStateAction<AlertData>>
}

export type AlertData =
{ mode: 'deleted', name: string }
| { mode: 'modified', name: string }
| { mode: 'created', name: string }
| { mode: 'initial' }
