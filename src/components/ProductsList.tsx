import { Stack } from '@mui/material'
import { ProductCard } from './ProductCard'
import { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'


export const ProductsList = (): JSX.Element => {
  const {productsList} = useContext( ProductContext )

  console.log(productsList)
  return (
    <Stack spacing={2}>
      { productsList.map( product => <ProductCard product={product} key={product.id} /> ) }
    </Stack>
  )
}
