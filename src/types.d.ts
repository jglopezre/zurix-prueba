export interface Product {
  id: number
  producto: string
  cantidad: number
  unidad: string
  descripcion: string
}

export interface ElementProps {
  children: JSX.Element
}

export interface ProductDispatcher {
  productsList: Array<Products>
  setProductsList: React.Dispatch<React.SetStateAction<Products[]>>
}

export interface ProductCardProps {
  product: Product
}

export interface ProductsInputForm {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}