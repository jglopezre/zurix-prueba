import { createContext } from 'react'
import { ProductsDataContext } from '../types'

export const ProductContext = createContext<ProductsDataContext | undefined> (undefined)
