import { createContext } from 'react'
import { ProductDispatcher } from '../types'

export const ProductContext = createContext(
  {
    producstList: [],
    setProductsList: ()=>{}
  } as unknown as ProductDispatcher
)
