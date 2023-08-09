import { Stack } from '@mui/material'
import { ProductCard } from './ProductCard'
import { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'

export const ProductsList = (): JSX.Element => {
  const productsProvided = useContext( ProductContext )

  return (
    <Stack spacing={2}>
      { 
        productsProvided?.productsList.map( product => {
          return(
            <ProductCard 
              product={product}
              dispatch = {productsProvided.dispatch}
              key={product.id} />
          )
        }).reverse()
      }
    </Stack>
  )
}
