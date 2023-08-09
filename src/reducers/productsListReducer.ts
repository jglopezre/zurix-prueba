import { v4 as uuidv4 } from 'uuid'
import { ProductAction, ProductList } from "../types"
 

export const productListReducer = (state: ProductList, action: ProductAction) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return [...state, {...action.payload, id: uuidv4()}]
      
    case "DELETE_PRODUCT":
      return state.filter(product => product.id !== action.payload)

    case "MODIFY_PRDUCT":
      throw new Error(`Action MODIFY in productListReducer has not implemented yet`)

    default:
      return state
  }
}