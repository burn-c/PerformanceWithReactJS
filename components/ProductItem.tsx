/* eslint-disable react/display-name */
import { memo } from "react"

interface ProductItemProps {
  product: {
    id: number
    price: number
    title: string
  }
}

export function ProductItemComponent({ product }: ProductItemProps) {
  return (
    <div>
      {product.title} - <strong>{product.price}</strong>
    </div>
  )
}

/**
 * memo
 * Compara as props do componente
 * Tem um custo de comparação
 * Verificar renderização normal do react X custo comparação memo
 * 
 * Usar quando:
 * 1. Pure Functional Components
 * 2. Renders too often
 * 3. Re-renders with same props
 * 4. Medium to big size component
 */

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.product, nextProps.product)
})