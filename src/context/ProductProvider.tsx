
import { ProductContext } from './ProductContext'
import { products } from '../data/products'
import { ElementProps, Product } from '../types'
import { useState } from 'react'

export const ProductProvider = (props: ElementProps) => {

  const [productsList, setProductsList] = useState(JSON.parse(products) as Array<Product>)
  /* const productsList: Array<Products>  = JSON.parse(products) */
  return (
    <ProductContext.Provider value={{productsList, setProductsList}}>
      {props.children}
    </ProductContext.Provider>
  )
}