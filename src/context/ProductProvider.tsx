import { useReducer } from 'react'
import { productListReducer } from '../reducers/productsListReducer'
import { ProductContext } from './ProductContext'
import { products } from '../data/products'
import { DataProviderProps } from '../types'

export const ProductProvider = (props: DataProviderProps) => {
  const [productsList, dispatch] = useReducer(productListReducer, JSON.parse(products))
  
  return (
    <ProductContext.Provider value={{ productsList, dispatch }}>
      { props.children }
    </ProductContext.Provider>
  )
}
